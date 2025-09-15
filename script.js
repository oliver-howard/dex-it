class PokedexTracker {
    constructor() {
        this.currentGeneration = 1; // Default to Generation I
        this.pokemon = []; // Will be filtered by generation
        this.pokemonStatus = this.loadPokemonStatus();
        this.filteredPokemon = [];
        this.pokemonElements = new Map(); // Cache DOM elements for performance
        this.pokemonDetailCache = new Map(); // Cache API responses
        this.currentPokemonId = null;
        
        // Web Worker for heavy operations
        this.worker = null;
        this.workerMessageId = 0;
        this.workerCallbacks = new Map();
        
        this.init();
    }

    async init() {
        console.log('=== Initializing Pokedex Tracker ===');
        
        // Initialize Web Worker for performance
        this.initializeWorker();
        
        // Check if generation variables are available
        console.log('Checking generation variables at init...');
        for (let gen = 1; gen <= 9; gen++) {
            const varName = `GEN${gen}_POKEMON`;
            const exists = typeof window[varName] !== 'undefined';
            console.log(`${varName}: ${exists ? 'AVAILABLE (' + window[varName].length + ' Pokemon)' : 'NOT AVAILABLE'}`);
        }
        
        this.setupEventListeners();
        this.setupModalEventListeners();
        this.setupGenerationSelector();
        
        console.log('About to load initial generation:', this.currentGeneration);
        // Load initial generation
        await this.setGeneration(this.currentGeneration);
        console.log('=== Initialization complete ===');
    }
    
    initializeWorker() {
        try {
            this.worker = new Worker('pokemon-worker.js');
            
            this.worker.onmessage = (e) => {
                const { id, type, data, error } = e.data;
                const callback = this.workerCallbacks.get(id);
                
                if (callback) {
                    this.workerCallbacks.delete(id);
                    
                    if (error) {
                        callback.reject(new Error(error));
                    } else {
                        callback.resolve(data);
                    }
                }
            };
            
            this.worker.onerror = (error) => {
                console.error('Worker error:', error);
            };
            
            console.log('Web Worker initialized for performance optimization');
        } catch (error) {
            console.warn('Web Worker not available, falling back to main thread:', error);
            this.worker = null;
        }
    }
    
    sendWorkerMessage(type, data) {
        return new Promise((resolve, reject) => {
            if (!this.worker) {
                reject(new Error('Web Worker not available'));
                return;
            }
            
            const id = ++this.workerMessageId;
            this.workerCallbacks.set(id, { resolve, reject });
            
            this.worker.postMessage({ id, type, data });
        });
    }

    populateTypeFilter() {
        const typeFilter = document.getElementById('typeFilter');
        const uniqueTypes = [...new Set(this.pokemon.flatMap(p => p.types))].sort();
        
        uniqueTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            typeFilter.appendChild(option);
        });
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const statusFilter = document.getElementById('statusFilter');
        const typeFilter = document.getElementById('typeFilter');
        const clearFilters = document.getElementById('clearFilters');

        // Debounce search input for better performance
        let searchTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => this.applyFilters(), 300);
        });

        statusFilter.addEventListener('change', () => this.applyFilters());
        typeFilter.addEventListener('change', () => this.applyFilters());
        
        clearFilters.addEventListener('click', () => {
            searchInput.value = '';
            statusFilter.value = 'all';
            typeFilter.value = 'all';
            this.applyFilters();
        });
    }

    setupModalEventListeners() {
        const modal = document.getElementById('pokemonModal');
        const closeBtn = document.querySelector('.close');
        
        // Close modal when clicking X or outside
        closeBtn.addEventListener('click', () => this.closeModal());
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Status buttons in modal
        document.getElementById('statusNotCaught').addEventListener('click', () => {
            this.setPokemonStatus(this.currentPokemonId, 'not-caught');
        });
        
        document.getElementById('statusCaught').addEventListener('click', () => {
            this.setPokemonStatus(this.currentPokemonId, 'caught');
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    setupGenerationSelector() {
        const generationSelect = document.getElementById('generationSelect');
        generationSelect.addEventListener('change', async (e) => {
            const selectedGen = e.target.value;
            await this.setGeneration(selectedGen === 'national' ? 'national' : parseInt(selectedGen));
        });
    }

    async setGeneration(generation) {
        console.log(`=== setGeneration called with: ${generation} ===`);
        this.currentGeneration = generation;
        
        // Show loading state
        this.showGenerationLoading(true);
        
        try {
            console.log('Loading Pokemon data...');
            
            if (generation === 'national') {
                // For National Dex, use optimized loading
                await this.loadNationalDexOptimized();
            } else {
                // Specific generation - load normally
                let allPokemonData = this.getGenerationData(generation);
                this.pokemon = allPokemonData.filter(pokemon => !isRegionalForm(pokemon.name));
                this.filteredPokemon = [...this.pokemon];
            }
            
            console.log(`Loaded ${this.pokemon.length} Pokemon for generation ${generation}`);
            console.log('Calling updateUI...');
            this.updateUI();
            console.log('updateUI completed');
            
        } catch (error) {
            console.error('Error loading generation:', error);
            alert(`Failed to load Generation ${generation} data. Please try again.`);
        } finally {
            this.showGenerationLoading(false);
        }
    }
    
    async loadNationalDexOptimized() {
        // Load Pokemon data progressively with batching
        this.pokemon = [];
        this.filteredPokemon = [];
        
        // First, load just essential data for initial display
        for (let gen = 1; gen <= 9; gen++) {
            const genData = this.getGenerationData(gen);
            const filteredGenData = genData.filter(pokemon => !isRegionalForm(pokemon.name));
            this.pokemon.push(...filteredGenData);
        }
        
        this.filteredPokemon = [...this.pokemon];
        
        // Initialize Web Worker with Pokemon data for ultra-fast filtering
        if (this.worker) {
            try {
                const result = await this.sendWorkerMessage('INIT_DATA', {
                    pokemonData: this.pokemon
                });
                console.log(`Web Worker initialized with ${result.count} Pokemon`);
            } catch (error) {
                console.warn('Failed to initialize Web Worker, using main thread:', error);
                this.buildSearchIndex();
            }
        } else {
            // Fallback to main thread
            this.buildSearchIndex();
        }
    }
    
    buildSearchIndex() {
        // Create indexed lookup for faster searching
        this.pokemonIndex = {
            byName: new Map(),
            byType: new Map(),
            byId: new Map()
        };
        
        this.pokemon.forEach((pokemon, index) => {
            // Index by name (for search)
            this.pokemonIndex.byName.set(pokemon.name.toLowerCase(), index);
            
            // Index by ID
            this.pokemonIndex.byId.set(pokemon.id, index);
            
            // Index by types
            pokemon.types.forEach(type => {
                if (!this.pokemonIndex.byType.has(type)) {
                    this.pokemonIndex.byType.set(type, []);
                }
                this.pokemonIndex.byType.get(type).push(index);
            });
        });
    }

    getGenerationData(genNumber) {
        const varName = `GEN${genNumber}_POKEMON`;
        console.log(`Getting data for ${varName}...`);
        
        if (typeof window[varName] !== 'undefined') {
            console.log(`Found ${window[varName].length} Pokemon for Generation ${genNumber}`);
            return window[varName];
        } else {
            console.error(`${varName} not found`);
            throw new Error(`Generation ${genNumber} data not available`);
        }
    }

    getAllPokemonData() {
        const allData = [];
        for (let gen = 1; gen <= 9; gen++) {
            try {
                const genData = this.getGenerationData(gen);
                allData.push(...genData);
            } catch (error) {
                console.error(`Failed to load Generation ${gen}:`, error);
            }
        }
        
        if (allData.length === 0) {
            throw new Error('No Pokemon data found');
        }
        
        return allData.sort((a, b) => a.id - b.id);
    }

    showGenerationLoading(show) {
        const loadingEl = document.getElementById('generationLoading');
        const pokemonGrid = document.getElementById('pokedexBoxes');
        
        if (show) {
            loadingEl.style.display = 'block';
            pokemonGrid.style.display = 'none';
        } else {
            loadingEl.style.display = 'none';
            pokemonGrid.style.display = 'grid';
        }
    }

    updateUI() {
        // Update progress display
        this.updateProgress();
        this.updateRegionDisplay();
        
        // Update type filter with current generation's types
        this.populateTypeFilter();
        
        // Re-render Pokemon grid
        this.renderPokedexBoxes();
        
        // Clear any active filters
        document.getElementById('searchInput').value = '';
        document.getElementById('statusFilter').value = 'all';
        document.getElementById('typeFilter').value = 'all';
    }

    updateRegionDisplay() {
        const config = this.currentGeneration === 'national' 
            ? GAME_CONFIG.national 
            : getGenerationConfig(this.currentGeneration);
            
        if (config) {
            document.getElementById('regionName').textContent = config.region;
            
            // Update page background color based on generation theme
            document.documentElement.style.setProperty('--generation-color', config.color);
        }
    }

    async applyFilters() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const statusFilter = document.getElementById('statusFilter').value;
        const typeFilter = document.getElementById('typeFilter').value;

        // Use Web Worker for ultra-fast filtering on large datasets
        if (this.currentGeneration === 'national' && this.worker) {
            try {
                const result = await this.sendWorkerMessage('FILTER_POKEMON', {
                    searchTerm,
                    statusFilter,
                    typeFilter,
                    pokemonStatus: this.pokemonStatus
                });
                
                this.filteredPokemon = result.results;
                console.log(`Worker filtering: ${result.resultCount} results in ${result.filterTime.toFixed(2)}ms`);
            } catch (error) {
                console.warn('Worker filtering failed, using main thread:', error);
                this.applyFiltersMainThread(searchTerm, statusFilter, typeFilter);
            }
        } else if (this.currentGeneration === 'national' && this.pokemonIndex) {
            // Fallback to optimized main thread filtering
            this.applyFiltersOptimized(searchTerm, statusFilter, typeFilter);
        } else {
            // Standard filtering for smaller datasets
            this.applyFiltersMainThread(searchTerm, statusFilter, typeFilter);
        }

        this.renderPokedexBoxes();
    }
    
    applyFiltersMainThread(searchTerm, statusFilter, typeFilter) {
        this.filteredPokemon = this.pokemon.filter(pokemon => {
            const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm) || 
                                  pokemon.id.toString().includes(searchTerm);
            
            const status = this.pokemonStatus[pokemon.id] || 'not-caught';
            const matchesStatus = statusFilter === 'all' || status === statusFilter;
            
            const matchesType = typeFilter === 'all' || pokemon.types.includes(typeFilter);

            return matchesSearch && matchesStatus && matchesType;
        });
    }
    
    applyFiltersOptimized(searchTerm, statusFilter, typeFilter) {
        let candidateIndices = new Set();
        
        // Start with type filter if specified (most selective)
        if (typeFilter !== 'all') {
            const typeIndices = this.pokemonIndex.byType.get(typeFilter) || [];
            candidateIndices = new Set(typeIndices);
        } else {
            // If no type filter, start with all Pokemon
            candidateIndices = new Set(Array.from({length: this.pokemon.length}, (_, i) => i));
        }
        
        // Apply search filter
        if (searchTerm) {
            const searchMatches = new Set();
            candidateIndices.forEach(index => {
                const pokemon = this.pokemon[index];
                if (pokemon.name.toLowerCase().includes(searchTerm) || 
                    pokemon.id.toString().includes(searchTerm)) {
                    searchMatches.add(index);
                }
            });
            candidateIndices = searchMatches;
        }
        
        // Apply status filter
        if (statusFilter !== 'all') {
            const statusMatches = new Set();
            candidateIndices.forEach(index => {
                const pokemon = this.pokemon[index];
                const status = this.pokemonStatus[pokemon.id] || 'not-caught';
                if (status === statusFilter) {
                    statusMatches.add(index);
                }
            });
            candidateIndices = statusMatches;
        }
        
        // Convert indices back to Pokemon objects
        this.filteredPokemon = Array.from(candidateIndices).map(index => this.pokemon[index]);
    }

    renderPokedexBoxes() {
        console.log('=== renderPokedexBoxes called ===');
        console.log('filteredPokemon length:', this.filteredPokemon.length);
        
        const container = document.getElementById('pokedexBoxes');
        if (!container) {
            console.error('pokedexBoxes container not found!');
            return;
        }
        
        container.innerHTML = '';
        this.pokemonElements.clear();

        if (this.filteredPokemon.length === 0) {
            console.log('No Pokemon to display - showing empty message');
            container.innerHTML = '<div style="text-align: center; color: #666; padding: 40px;">No Pokémon match your filters</div>';
            return;
        }

        // Use virtualized rendering for large datasets (like pokedextracker.com)
        if (this.currentGeneration === 'national' && this.filteredPokemon.length > 200) {
            this.renderVirtualizedGrid(container);
        } else {
            this.renderPokedexBoxesStandard(container);
        }
    }
    
    renderPokedexBoxesStandard(container) {
        // Standard rendering for smaller datasets
        const pokemonPerBox = 30;
        const totalBoxes = Math.ceil(this.filteredPokemon.length / pokemonPerBox);
        console.log('Creating', totalBoxes, 'boxes for', this.filteredPokemon.length, 'Pokemon');

        for (let boxIndex = 0; boxIndex < totalBoxes; boxIndex++) {
            const startIndex = boxIndex * pokemonPerBox;
            const endIndex = Math.min(startIndex + pokemonPerBox, this.filteredPokemon.length);
            const boxPokemon = this.filteredPokemon.slice(startIndex, endIndex);

            const box = this.createPokedexBox(boxIndex + 1, boxPokemon, startIndex);
            container.appendChild(box);
        }
    }
    
    renderVirtualizedGrid(container) {
        console.log('Using virtualized rendering for', this.filteredPokemon.length, 'Pokemon');
        
        // Create virtualized container structure
        const virtualContainer = document.createElement('div');
        virtualContainer.className = 'virtual-pokemon-grid';
        virtualContainer.style.cssText = `
            position: relative;
            height: ${Math.ceil(this.filteredPokemon.length / 6) * 120}px;
            overflow-y: auto;
        `;
        
        const viewport = document.createElement('div');
        viewport.className = 'virtual-viewport';
        viewport.style.cssText = `
            height: 80vh;
            overflow-y: auto;
            position: relative;
        `;
        
        const content = document.createElement('div');
        content.className = 'virtual-content';
        content.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        `;
        
        viewport.appendChild(content);
        virtualContainer.appendChild(viewport);
        container.appendChild(virtualContainer);
        
        // Set up virtual scrolling
        this.setupVirtualScrolling(viewport, content);
        
        // Initial render
        this.updateVirtualGrid(viewport, content);
    }
    
    setupVirtualScrolling(viewport, content) {
        // Virtual scrolling parameters
        this.virtualConfig = {
            itemHeight: 120, // Height of each Pokemon row
            itemsPerRow: 6,
            containerHeight: viewport.clientHeight || 600,
            visibleStart: 0,
            visibleEnd: 0,
            overscan: 5 // Render extra rows for smooth scrolling
        };
        
        // Add scroll listener with throttling
        let scrollTimeout;
        viewport.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                this.updateVirtualGrid(viewport, content);
            }, 16); // ~60fps
        });
        
        // Add resize listener
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.virtualConfig.containerHeight = viewport.clientHeight;
                this.updateVirtualGrid(viewport, content);
            }, 100);
        });
    }
    
    updateVirtualGrid(viewport, content) {
        const { itemHeight, itemsPerRow, containerHeight, overscan } = this.virtualConfig;
        const scrollTop = viewport.scrollTop;
        
        // Calculate visible range
        const totalRows = Math.ceil(this.filteredPokemon.length / itemsPerRow);
        const visibleRowStart = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
        const visibleRowEnd = Math.min(totalRows, Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan);
        
        const startIndex = visibleRowStart * itemsPerRow;
        const endIndex = Math.min(this.filteredPokemon.length, visibleRowEnd * itemsPerRow);
        
        // Only update if range changed significantly
        if (startIndex === this.virtualConfig.visibleStart && endIndex === this.virtualConfig.visibleEnd) {
            return;
        }
        
        this.virtualConfig.visibleStart = startIndex;
        this.virtualConfig.visibleEnd = endIndex;
        
        // Set total height
        content.style.height = `${totalRows * itemHeight}px`;
        
        // Use document fragment for efficient DOM manipulation
        const fragment = document.createDocumentFragment();
        
        // Clear existing content
        content.innerHTML = '';
        
        // Create grid for visible Pokemon only
        const visiblePokemon = this.filteredPokemon.slice(startIndex, endIndex);
        
        const gridContainer = document.createElement('div');
        gridContainer.className = 'virtual-pokemon-row-container';
        gridContainer.style.cssText = `
            position: absolute;
            top: ${visibleRowStart * itemHeight}px;
            left: 0;
            right: 0;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 8px;
            padding: 10px;
        `;
        
        visiblePokemon.forEach((pokemon) => {
            const slot = this.createOptimizedPokemonSlot(pokemon);
            gridContainer.appendChild(slot);
        });
        
        fragment.appendChild(gridContainer);
        content.appendChild(fragment);
        
        console.log(`Virtual render: showing ${visiblePokemon.length} Pokemon (${startIndex}-${endIndex})`);
    }
    
    createOptimizedPokemonSlot(pokemon) {
        const status = this.pokemonStatus[pokemon.id] || 'not-caught';
        
        const slot = document.createElement('div');
        slot.className = `pokemon-slot ${status}`;
        slot.style.cssText = `
            aspect-ratio: 1;
            border: 1px solid #ddd;
            background: ${status === 'caught' ? '#e8f5e8' : '#fafafa'};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            padding: 6px;
            position: relative;
            border-radius: 4px;
        `;
        
        slot.onclick = (e) => {
            if (!e.target.classList.contains('toggle-icon')) {
                e.preventDefault();
                this.showPokemonModal(pokemon.id);
            }
        };
        
        // Use innerHTML for faster creation
        slot.innerHTML = `
            <div class="pokemon-number" style="font-size: 0.7em; color: #666; margin-bottom: 2px; font-weight: bold;">
                #${pokemon.id.toString().padStart(3, '0')}
            </div>
            <img class="pokemon-sprite" 
                 src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
                 alt="${pokemon.name}"
                 loading="lazy"
                 style="width: 64px; height: 64px; image-rendering: pixelated; margin-bottom: 2px;">
            <div class="pokemon-name" style="font-size: 0.6em; color: #333; text-align: center; line-height: 1.1; text-transform: capitalize; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">
                ${pokemon.name.replace('-', ' ')}
            </div>
            <div class="toggle-icon" style="position: absolute; top: 4px; right: 4px; width: 20px; height: 20px; border-radius: 50%; border: 2px solid ${status === 'caught' ? '#4CAF50' : '#ddd'}; background: ${status === 'caught' ? '#4CAF50' : 'white'}; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 12px; transition: all 0.2s; z-index: 10; color: ${status === 'caught' ? 'white' : '#999'};">
                ${status === 'caught' ? '✓' : '○'}
            </div>
        `;
        
        // Add toggle functionality
        const toggleIcon = slot.querySelector('.toggle-icon');
        toggleIcon.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.togglePokemonStatus(pokemon.id);
        };
        
        // Cache element for updates
        this.pokemonElements.set(pokemon.id, slot);
        
        return slot;
    }

    createPokedexBox(boxNumber, pokemon, startIndex) {
        const box = document.createElement('div');
        box.className = 'pokedex-box';

        const header = document.createElement('div');
        header.className = 'box-header';
        
        // Show different header based on filtering
        const isFiltered = this.filteredPokemon.length !== this.pokemon.length;
        if (isFiltered) {
            header.textContent = `Filtered Results - Box ${boxNumber}`;
        } else {
            const realStartIndex = startIndex;
            const realEndIndex = startIndex + pokemon.length;
            header.textContent = `Box ${boxNumber} (#${realStartIndex + 1} - #${realEndIndex})`;
        }

        const grid = document.createElement('div');
        grid.className = 'pokemon-grid';

        pokemon.forEach((poke) => {
            const slot = this.createPokemonSlot(poke);
            grid.appendChild(slot);
            this.pokemonElements.set(poke.id, slot);
        });

        // Fill remaining slots if less than 30 (only for non-filtered view)
        if (!isFiltered) {
            const remainingSlots = 30 - pokemon.length;
            for (let i = 0; i < remainingSlots; i++) {
                const emptySlot = document.createElement('div');
                emptySlot.className = 'pokemon-slot empty';
                grid.appendChild(emptySlot);
            }
        }

        box.appendChild(header);
        box.appendChild(grid);
        return box;
    }

    createPokemonSlot(pokemon) {
        const status = this.pokemonStatus[pokemon.id] || 'not-caught';
        
        const slot = document.createElement('div');
        slot.className = `pokemon-slot ${status}`;
        slot.onclick = (e) => {
            // Only show modal if not clicking the toggle icon
            if (!e.target.classList.contains('toggle-icon')) {
                e.preventDefault();
                this.showPokemonModal(pokemon.id);
            }
        };

        const number = document.createElement('div');
        number.className = 'pokemon-number';
        number.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;

        const sprite = document.createElement('img');
        sprite.className = 'pokemon-sprite';
        sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        sprite.alt = pokemon.name;
        sprite.loading = 'lazy';

        const name = document.createElement('div');
        name.className = 'pokemon-name';
        name.textContent = pokemon.name.replace('-', ' ');

        const toggleIcon = document.createElement('div');
        toggleIcon.className = 'toggle-icon';
        toggleIcon.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.togglePokemonStatus(pokemon.id);
        };

        slot.appendChild(number);
        slot.appendChild(sprite);
        slot.appendChild(name);
        slot.appendChild(toggleIcon);

        return slot;
    }

    async showPokemonModal(pokemonId) {
        this.currentPokemonId = pokemonId;
        const modal = document.getElementById('pokemonModal');
        const modalBody = document.querySelector('.modal-body');
        const modalLoading = document.getElementById('modalLoading');
        
        // Show modal immediately
        modal.style.display = 'block';
        modalBody.style.display = 'none';
        modalLoading.style.display = 'block';
        
        try {
            const pokemonData = await this.fetchPokemonDetails(pokemonId);
            this.populateModal(pokemonData);
            
            modalLoading.style.display = 'none';
            modalBody.style.display = 'grid';
        } catch (error) {
            console.error('Error loading Pokemon details:', error);
            modalLoading.innerHTML = `
                <div style="color: #e53e3e; margin-bottom: 10px;">Failed to load Pokemon details</div>
                <div style="font-size: 0.9em; color: #666; margin-bottom: 15px;">${error.message}</div>
                <button onclick="pokedex.showPokemonModal(${pokemonId})" style="padding: 8px 16px; background: #3182ce; color: white; border: none; border-radius: 4px; cursor: pointer;">Try Again</button>
                <button onclick="pokedex.closeModal()" style="padding: 8px 16px; background: #e2e8f0; color: #4a5568; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">Close</button>
            `;
        }
    }

    async fetchPokemonDetails(pokemonId) {
        // Check cache first
        if (this.pokemonDetailCache.has(pokemonId)) {
            console.log(`Loading ${pokemonId} from cache`);
            return this.pokemonDetailCache.get(pokemonId);
        }

        console.log(`Loading ${pokemonId} from generation data...`);
        
        try {
            // First, check if we have the Pokemon in current generation data
            let pokemonData = this.pokemon.find(p => p.id === pokemonId);
            
            if (!pokemonData) {
                // Pokemon not in current generation, determine which generation it belongs to
                const generation = this.getPokemonGeneration(pokemonId);
                if (generation) {
                    // Load the generation that contains this Pokemon
                    const genData = await this.dataLoader.loadGeneration(generation);
                    pokemonData = genData.find(p => p.id === pokemonId);
                }
            }
            
            if (!pokemonData) {
                throw new Error(`Pokemon with ID ${pokemonId} not found`);
            }
            
            console.log(`Successfully loaded ${pokemonData.name} from generation data`);
            
            // Cache the data
            this.pokemonDetailCache.set(pokemonId, pokemonData);
            return pokemonData;
        } catch (error) {
            console.error('Error loading Pokemon details:', error);
            throw new Error(`Failed to load Pokemon data: ${error.message}`);
        }
    }

    getPokemonGeneration(pokemonId) {
        // Determine which generation a Pokemon belongs to based on ID
        for (let gen = 1; gen <= 9; gen++) {
            const config = getGenerationConfig(gen);
            if (config && pokemonId >= config.pokemonRange.start && pokemonId <= config.pokemonRange.end) {
                return gen;
            }
        }
        return null;
    }

    populateModal(pokemonData) {
        // Set current Pokemon data
        this.currentPokemonData = pokemonData;
        
        // Set up regional form tabs
        this.setupRegionalFormTabs(pokemonData);
        
        // Populate the modal with the current Pokemon data
        this.updateModalContent(pokemonData);
    }
    
    setupRegionalFormTabs(pokemonData) {
        const basePokemonName = getBasePokemonName(pokemonData.name);
        const regionalForms = getRegionalForms(basePokemonName);
        const regionalTabsContainer = document.getElementById('regionalTabs');
        const tabButtonsContainer = document.getElementById('tabButtons');
        
        // Clear existing tabs
        tabButtonsContainer.innerHTML = '';
        
        // Check if there are regional forms to show tabs for
        if (regionalForms.length > 0) {
            regionalTabsContainer.style.display = 'block';
            
            // Create base form tab
            const baseFormTab = this.createTabButton(basePokemonName, 'Base Form', true);
            tabButtonsContainer.appendChild(baseFormTab);
            
            // Create regional form tabs
            regionalForms.forEach(regionalFormName => {
                const formData = findPokemonByName(regionalFormName);
                if (formData) {
                    const formDisplayName = this.formatRegionalFormName(regionalFormName);
                    const tab = this.createTabButton(regionalFormName, formDisplayName, false);
                    tabButtonsContainer.appendChild(tab);
                }
            });
            
            // Set active tab based on current Pokemon
            this.setActiveTab(pokemonData.name);
        } else {
            regionalTabsContainer.style.display = 'none';
        }
    }
    
    createTabButton(pokemonName, displayName, isBaseForm) {
        const button = document.createElement('button');
        button.className = `tab-button ${isBaseForm ? 'base-form' : ''}`;
        button.textContent = displayName;
        button.dataset.pokemonName = pokemonName;
        
        button.addEventListener('click', () => {
            const targetPokemonData = isBaseForm ? 
                this.findBasePokemonData(pokemonName) : 
                findPokemonByName(pokemonName);
            
            if (targetPokemonData) {
                this.updateModalContent(targetPokemonData);
                this.setActiveTab(pokemonName);
            }
        });
        
        return button;
    }
    
    findBasePokemonData(basePokemonName) {
        // Find the base form Pokemon data
        for (let gen = 1; gen <= 9; gen++) {
            const varName = `GEN${gen}_POKEMON`;
            if (typeof window[varName] !== 'undefined') {
                const pokemon = window[varName].find(p => 
                    p.name === basePokemonName && !isRegionalForm(p.name)
                );
                if (pokemon) {
                    return pokemon;
                }
            }
        }
        return null;
    }
    
    formatRegionalFormName(formName) {
        // Convert 'alolan-raichu' to 'Alolan'
        const parts = formName.split('-');
        if (parts.length > 1) {
            return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        }
        return formName;
    }
    
    formatPokemonName(name) {
        return name.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
    
    setActiveTab(pokemonName) {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-button').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Find and activate the correct tab
        const targetTab = document.querySelector(`[data-pokemon-name="${pokemonName}"]`) ||
                         document.querySelector(`[data-pokemon-name="${getBasePokemonName(pokemonName)}"]`);
        
        if (targetTab) {
            targetTab.classList.add('active');
        }
    }
    
    updateModalContent(pokemonData) {
        // Update current Pokemon reference
        this.currentPokemon = pokemonData;
        this.currentPokemonId = pokemonData.id;
        
        // Basic info
        document.getElementById('modalPokemonName').textContent = this.formatPokemonName(pokemonData.name);
        document.getElementById('modalPokemonNumber').textContent = `#${pokemonData.id.toString().padStart(3, '0')}`;
        
        // Image
        const modalImage = document.getElementById('modalPokemonImage');
        modalImage.src = pokemonData.sprites?.official_artwork || 
                         pokemonData.sprites?.front_default || 
                         `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;
        modalImage.alt = pokemonData.name;
        
        // Types
        const typesContainer = document.getElementById('modalPokemonTypes');
        typesContainer.innerHTML = '';
        pokemonData.types.forEach(typeName => {
            const typeBadge = document.createElement('span');
            typeBadge.className = `type-badge type-${typeName}`;
            typeBadge.textContent = typeName.charAt(0).toUpperCase() + typeName.slice(1);
            typesContainer.appendChild(typeBadge);
        });
        
        // Physical stats
        document.getElementById('modalPokemonHeight').textContent = `${pokemonData.height / 10} m`;
        document.getElementById('modalPokemonWeight').textContent = `${pokemonData.weight / 10} kg`;
        document.getElementById('modalPokemonExperience').textContent = pokemonData.base_experience || 'Unknown';
        
        // Base stats - Radar Chart
        const statsContainer = document.getElementById('modalPokemonStats');
        statsContainer.innerHTML = '';
        
        const statOrder = ['hp', 'attack', 'defense', 'sp.-atk', 'sp.-def', 'speed'];
        const statLabels = {
            'hp': 'HP',
            'attack': 'Attack',
            'defense': 'Defense', 
            'sp.-atk': 'Sp. Atk',
            'sp.-def': 'Sp. Def',
            'speed': 'Speed'
        };
        
        // Create radar chart
        this.createRadarChart(statsContainer, pokemonData.stats, statOrder, statLabels);
        
        // Abilities
        const abilitiesContainer = document.getElementById('modalPokemonAbilities');
        abilitiesContainer.innerHTML = '';
        pokemonData.abilities.forEach(abilityData => {
            const abilityItem = document.createElement('span');
            abilityItem.className = `ability-item ${abilityData.is_hidden ? 'hidden' : ''}`;
            
            // Format ability name for display
            const displayName = abilityData.name.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            abilityItem.textContent = displayName;
            
            // Create tooltip with ability description
            const tooltip = document.createElement('div');
            tooltip.className = 'ability-tooltip';
            tooltip.textContent = getAbilityDescription(abilityData.name);
            
            // Add hover event listeners for positioning
            abilityItem.addEventListener('mouseenter', (e) => {
                const rect = abilityItem.getBoundingClientRect();
                tooltip.style.left = (rect.left + rect.width / 2) + 'px';
                tooltip.style.top = (rect.top - 10) + 'px';
            });
            
            abilityItem.appendChild(tooltip);
            abilitiesContainer.appendChild(abilityItem);
        });
        
        // Update status buttons
        this.updateModalStatusButtons();
    }

    createRadarChart(container, stats, statOrder, statLabels) {
        // Create canvas container
        const chartContainer = document.createElement('div');
        chartContainer.className = 'radar-chart-container';
        chartContainer.style.cssText = 'position: relative; width: 480px; height: 480px; margin: 0 auto; max-width: 100%;';
        
        const canvas = document.createElement('canvas');
        const scale = window.devicePixelRatio || 1;
        const displaySize = 480;
        
        // Set actual canvas size (high resolution)
        canvas.width = displaySize * scale;
        canvas.height = displaySize * scale;
        
        // Set display size (CSS pixels)
        canvas.style.cssText = `display: block; width: ${displaySize}px; height: ${displaySize}px;`;
        
        chartContainer.appendChild(canvas);
        container.appendChild(chartContainer);
        
        const ctx = canvas.getContext('2d');
        
        // Scale the context to ensure correct drawing operations
        ctx.scale(scale, scale);
        
        const centerX = displaySize / 2;
        const centerY = displaySize / 2;
        const radius = 160; // Restored to good size with larger canvas
        const numStats = statOrder.length;
        
        // Clear canvas
        ctx.clearRect(0, 0, displaySize, displaySize);
        
        // Draw background grid circles
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1.5;
        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
            ctx.stroke();
        }
        
        // Draw axis lines and labels
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#666';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        
        const statValues = [];
        
        for (let i = 0; i < numStats; i++) {
            const angle = (i * 2 * Math.PI) / numStats - Math.PI / 2;
            const statName = statOrder[i];
            const statValue = stats[statName] || 0;
            statValues.push(statValue);
            
            // Draw axis line
            const endX = centerX + Math.cos(angle) * radius;
            const endY = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            
            // Draw label with better positioning
            const labelDistance = radius + 50; // Increased distance from center
            const labelX = centerX + Math.cos(angle) * labelDistance;
            const labelY = centerY + Math.sin(angle) * labelDistance;
            
            // Adjust text alignment based on position
            if (Math.abs(Math.cos(angle)) > 0.7) {
                // Left or right position
                ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
            } else {
                // Top or bottom position
                ctx.textAlign = 'center';
            }
            
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px Arial'; // Smaller, bold font for labels
            ctx.fillText(statLabels[statName], labelX, labelY);
            
            // Draw stat value
            ctx.fillStyle = '#666';
            ctx.font = '11px Arial';
            ctx.fillText(statValue.toString(), labelX, labelY + 14);
            
            // Reset text alignment and font
            ctx.textAlign = 'center';
            ctx.font = '16px Arial';
        }
        
        // Draw stat polygon
        ctx.beginPath();
        for (let i = 0; i < numStats; i++) {
            const angle = (i * 2 * Math.PI) / numStats - Math.PI / 2;
            const statValue = statValues[i];
            const normalizedValue = Math.min(statValue / 200, 1); // Max stat assumed to be 200
            const pointRadius = radius * normalizedValue;
            
            const x = centerX + Math.cos(angle) * pointRadius;
            const y = centerY + Math.sin(angle) * pointRadius;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        
        // Fill the polygon
        ctx.fillStyle = 'rgba(74, 144, 226, 0.3)';
        ctx.fill();
        
        // Stroke the polygon
        ctx.strokeStyle = '#4a90e2';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Draw stat points
        ctx.fillStyle = '#4a90e2';
        for (let i = 0; i < numStats; i++) {
            const angle = (i * 2 * Math.PI) / numStats - Math.PI / 2;
            const statValue = statValues[i];
            const normalizedValue = Math.min(statValue / 200, 1);
            const pointRadius = radius * normalizedValue;
            
            const x = centerX + Math.cos(angle) * pointRadius;
            const y = centerY + Math.sin(angle) * pointRadius;
            
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        // Add total stats below the chart
        const totalStats = statValues.reduce((sum, val) => sum + val, 0);
        const totalDiv = document.createElement('div');
        totalDiv.style.cssText = 'text-align: center; margin-top: 10px; font-weight: bold; color: #333;';
        totalDiv.textContent = `Total: ${totalStats}`;
        chartContainer.appendChild(totalDiv);
    }

    togglePokemonStatus(pokemonId) {
        const currentStatus = this.pokemonStatus[pokemonId] || 'not-caught';
        const newStatus = currentStatus === 'caught' ? 'not-caught' : 'caught';
        
        this.setPokemonStatus(pokemonId, newStatus);
    }

    setPokemonStatus(pokemonId, status) {
        this.pokemonStatus[pokemonId] = status;
        this.savePokemonStatus();
        
        // Update the Pokemon slot in the grid
        this.updatePokemonSlot(pokemonId, status);
        
        // Update modal status buttons if modal is open
        if (this.currentPokemonId === pokemonId) {
            this.updateModalStatusButtons();
        }
        
        // Update progress
        this.updateProgress();
    }

    updateModalStatusButtons() {
        const currentStatus = this.pokemonStatus[this.currentPokemonId] || 'not-caught';
        
        // Remove active class from all buttons
        document.querySelectorAll('.status-section .status-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Map status to correct button ID
        const statusToButtonId = {
            'not-caught': 'statusNotCaught',
            'caught': 'statusCaught'
        };
        
        const buttonId = statusToButtonId[currentStatus];
        if (buttonId) {
            const button = document.getElementById(buttonId);
            if (button) {
                button.classList.add('active');
            }
        }
    }

    closeModal() {
        document.getElementById('pokemonModal').style.display = 'none';
        this.currentPokemonId = null;
    }

    updatePokemonSlot(pokemonId, newStatus) {
        const element = this.pokemonElements.get(pokemonId);
        if (element) {
            // Remove old status classes
            element.classList.remove('caught', 'not-caught');
            // Add new status class
            element.classList.add(newStatus);
        }
    }

    updateProgress() {
        const caughtCount = Object.values(this.pokemonStatus).filter(status => status === 'caught').length;
        const totalCount = this.pokemon.length;

        document.getElementById('progressCount').textContent = `${caughtCount}/${totalCount} Caught`;
    }

    loadPokemonStatus() {
        const saved = localStorage.getItem('pokemonStatus');
        return saved ? JSON.parse(saved) : {};
    }

    savePokemonStatus() {
        localStorage.setItem('pokemonStatus', JSON.stringify(this.pokemonStatus));
    }
}

let pokedex;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, creating PokedexTracker...');
    
    // Create the tracker
    setTimeout(() => {
        try {
            pokedex = new PokedexTracker();
        } catch (error) {
            console.error('Error creating PokedexTracker:', error);
            document.querySelector('.container').innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h1>Error Loading Application</h1>
                    <p>Error: ${error.message}</p>
                    <p>Check console for more details</p>
                </div>
            `;
        }
    }, 100);
});