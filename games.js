// Regional Pokédex Tracker - Similar to main tracker but for specific games
class RegionalDexBuilder {
    constructor() {
        this.pokemonData = new Map(); // Cache for Pokemon data
        this.saveFiles = []; // User's regional dex save files
        this.activeSaveFile = null; // Currently active save file
        this.init();
    }

    async init() {
        console.log('Initializing Regional Pokédex Tracker...');
        
        // Wait for scripts to load
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Load Pokemon data from all generations
        this.loadPokemonData();
        
        // Load saved regional dexes from localStorage
        this.loadSaveFiles();
        
        // Setup event listeners
        this.setupEventListeners();
        this.setupModalEventListeners();
        
        // Render save files
        this.renderSaveFiles();
    }

    loadPokemonData() {
        // Load Pokemon data from all generation variables
        for (let gen = 1; gen <= 9; gen++) {
            const varName = `GEN${gen}_POKEMON`;
            if (typeof window[varName] !== 'undefined') {
                window[varName].forEach(pokemon => {
                    this.pokemonData.set(pokemon.name.toLowerCase(), pokemon);
                });
            }
        }
        console.log(`Loaded ${this.pokemonData.size} Pokemon`);
    }

    loadSaveFiles() {
        const saved = localStorage.getItem('regionalDexSaveFiles');
        if (saved) {
            this.saveFiles = JSON.parse(saved).map(saveFile => ({
                ...saveFile,
                caughtPokemon: new Set(saveFile.caughtPokemon || saveFile.pokemon || [])
            }));
        }
    }

    saveSaveFiles() {
        const serializedSaves = this.saveFiles.map(saveFile => ({
            ...saveFile,
            caughtPokemon: Array.from(saveFile.caughtPokemon)
        }));
        localStorage.setItem('regionalDexSaveFiles', JSON.stringify(serializedSaves));
    }

    setupEventListeners() {
        // Create new save file
        document.getElementById('createNewSave').addEventListener('click', () => {
            this.showCreateSaveModal();
        });

        // Modal controls
        document.getElementById('closeCreateModal').addEventListener('click', () => {
            this.hideCreateSaveModal();
        });

        document.getElementById('cancelCreateBtn').addEventListener('click', () => {
            this.hideCreateSaveModal();
        });

        document.getElementById('createSaveBtn').addEventListener('click', () => {
            this.createSaveFile();
        });

        // Active dex controls
        document.getElementById('closeDexBtn').addEventListener('click', () => {
            this.closeActiveDex();
        });

        document.getElementById('deleteDexBtn').addEventListener('click', () => {
            this.deleteSaveFile();
        });

        // Game select auto-fill
        document.getElementById('gameSelect').addEventListener('change', (e) => {
            this.autoFillGameInfo(e.target.value);
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
            this.setPokemonStatusFromModal('not-caught');
        });
        
        document.getElementById('statusCaught').addEventListener('click', () => {
            this.setPokemonStatusFromModal('caught');
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    showCreateSaveModal() {
        document.getElementById('createSaveModal').style.display = 'block';
        document.getElementById('saveFileName').value = '';
        document.getElementById('saveDescription').value = '';
        document.getElementById('gameSelect').value = '';
    }

    hideCreateSaveModal() {
        document.getElementById('createSaveModal').style.display = 'none';
    }

    autoFillGameInfo(gameId) {
        const gameNames = {
            'red-blue': 'My Red/Blue Playthrough',
            'yellow': 'My Yellow Playthrough',
            'gold-silver': 'My Gold/Silver Playthrough',
            'crystal': 'My Crystal Playthrough',
            'ruby-sapphire': 'My Ruby/Sapphire Playthrough',
            'emerald': 'My Emerald Playthrough',
            'diamond-pearl': 'My Diamond/Pearl Playthrough',
            'platinum': 'My Platinum Playthrough',
            'black-white': 'My Black/White Playthrough',
            'black2-white2': 'My Black 2/White 2 Playthrough',
            'x-y': 'My X/Y Playthrough',
            'sun-moon': 'My Sun/Moon Playthrough',
            'ultra-sun-ultra-moon': 'My Ultra Sun/Ultra Moon Playthrough',
            'sword-shield': 'My Sword/Shield Playthrough',
            'scarlet-violet': 'My Scarlet/Violet Playthrough'
        };

        if (gameNames[gameId]) {
            document.getElementById('saveFileName').value = gameNames[gameId];
        }
    }

    createSaveFile() {
        const gameId = document.getElementById('gameSelect').value;
        const fileName = document.getElementById('saveFileName').value.trim();
        const description = document.getElementById('saveDescription').value.trim();

        if (!gameId || !fileName) {
            alert('Please select a game and enter a save file name.');
            return;
        }

        const newSaveFile = {
            id: Date.now().toString(),
            gameId: gameId,
            fileName: fileName,
            description: description,
            caughtPokemon: new Set(), // Set of caught Pokemon names
            createdAt: new Date().toISOString(),
            lastModified: new Date().toISOString()
        };

        this.saveFiles.push(newSaveFile);
        this.saveSaveFiles();
        this.hideCreateSaveModal();
        this.renderSaveFiles();
    }

    renderSaveFiles() {
        const container = document.getElementById('saveFilesGrid');
        const emptyState = document.getElementById('emptySaves');

        container.innerHTML = '';

        if (this.saveFiles.length === 0) {
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';

        this.saveFiles.forEach(saveFile => {
            const card = this.createSaveFileCard(saveFile);
            container.appendChild(card);
        });
    }

    createSaveFileCard(saveFile) {
        const card = document.createElement('div');
        card.className = 'save-file-card';

        const gameFullName = this.getGameFullName(saveFile.gameId);
        const regionalDex = getRegionalDex(saveFile.gameId);
        const pokemonCount = saveFile.caughtPokemon.size;
        const totalPokemon = regionalDex.length;
        const lastModified = new Date(saveFile.lastModified).toLocaleDateString();

        card.innerHTML = `
            <div class="save-file-header">
                <h3>${saveFile.fileName}</h3>
                <span class="game-name">${gameFullName}</span>
            </div>
            <div class="save-file-info">
                <p class="description">${saveFile.description || 'No description'}</p>
                <div class="save-file-stats">
                    <span class="pokemon-count">${pokemonCount}/${totalPokemon} Caught</span>
                    <span class="last-modified">Modified: ${lastModified}</span>
                </div>
            </div>
            <div class="save-file-actions">
                <button class="btn btn-primary btn-small" onclick="regionalDexBuilder.openSaveFile('${saveFile.id}')">
                    Open
                </button>
                <button class="btn btn-danger btn-small" onclick="regionalDexBuilder.deleteSaveFileConfirm('${saveFile.id}')">
                    Delete
                </button>
            </div>
        `;

        return card;
    }

    getGameFullName(gameId) {
        const gameNames = {
            'red-blue': 'Pokémon Red/Blue',
            'yellow': 'Pokémon Yellow',
            'gold-silver': 'Pokémon Gold/Silver',
            'crystal': 'Pokémon Crystal',
            'ruby-sapphire': 'Pokémon Ruby/Sapphire',
            'emerald': 'Pokémon Emerald',
            'diamond-pearl': 'Pokémon Diamond/Pearl',
            'platinum': 'Pokémon Platinum',
            'black-white': 'Pokémon Black/White',
            'black2-white2': 'Pokémon Black 2/White 2',
            'x-y': 'Pokémon X/Y',
            'sun-moon': 'Pokémon Sun/Moon',
            'ultra-sun-ultra-moon': 'Pokémon Ultra Sun/Ultra Moon',
            'sword-shield': 'Pokémon Sword/Shield',
            'scarlet-violet': 'Pokémon Scarlet/Violet'
        };
        return gameNames[gameId] || gameId;
    }

    openSaveFile(saveFileId) {
        this.activeSaveFile = this.saveFiles.find(sf => sf.id === saveFileId);
        if (!this.activeSaveFile) return;

        // Update UI
        document.getElementById('activeDexTitle').textContent = 
            `${this.activeSaveFile.fileName} - ${this.getGameFullName(this.activeSaveFile.gameId)}`;
        document.getElementById('activeDexDescription').textContent = 
            this.activeSaveFile.description || 'Regional Pokédex';
        
        const regionalDex = getRegionalDex(this.activeSaveFile.gameId);
        document.getElementById('activePokemonCount').textContent = 
            `${this.activeSaveFile.caughtPokemon.size}/${regionalDex.length} Caught`;

        // Show active dex container
        document.getElementById('activeDexContainer').style.display = 'block';
        
        // Render the regional dex
        this.renderActiveDex();
    }

    renderActiveDex() {
        const container = document.getElementById('regionalDexView');
        container.innerHTML = '';

        const regionalDex = getRegionalDex(this.activeSaveFile.gameId);
        
        if (regionalDex.length === 0) {
            container.innerHTML = `
                <div class="empty-dex">
                    <h3>No Regional Pokédex Data</h3>
                    <p>This game's regional Pokédex hasn't been configured yet.</p>
                </div>
            `;
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'pokemon-grid';

        regionalDex.forEach((pokemonName, index) => {
            const pokemon = this.pokemonData.get(pokemonName.toLowerCase());
            if (pokemon) {
                const isCaught = this.activeSaveFile.caughtPokemon.has(pokemonName);
                const card = this.createRegionalPokemonSlot(pokemon, index + 1, isCaught);
                grid.appendChild(card);
            }
        });

        container.appendChild(grid);
    }

    createRegionalPokemonSlot(pokemon, regionalNumber, isCaught) {
        const slot = document.createElement('div');
        slot.className = `pokemon-slot ${isCaught ? 'caught' : 'not-caught'}`;
        slot.dataset.pokemonName = pokemon.name; // Add data attribute for easy finding
        slot.onclick = () => this.showPokemonModal(pokemon);

        const spriteUrl = pokemon.sprites?.front_default || 
                         `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

        slot.innerHTML = `
            <div class="pokemon-number">#${regionalNumber.toString().padStart(3, '0')}</div>
            <img class="pokemon-sprite" src="${spriteUrl}" alt="${pokemon.name}" loading="lazy">
            <div class="pokemon-name">${this.formatPokemonName(pokemon.name)}</div>
            <div class="toggle-icon" onclick="event.stopPropagation(); regionalDexBuilder.togglePokemonStatus('${pokemon.name}')"></div>
        `;

        return slot;
    }

    togglePokemonStatus(pokemonName) {
        if (!this.activeSaveFile) return;

        const wasCaught = this.activeSaveFile.caughtPokemon.has(pokemonName);
        
        if (wasCaught) {
            this.activeSaveFile.caughtPokemon.delete(pokemonName);
        } else {
            this.activeSaveFile.caughtPokemon.add(pokemonName);
        }

        this.activeSaveFile.lastModified = new Date().toISOString();
        this.saveSaveFiles();

        // Update just the specific Pokemon slot instead of re-rendering everything
        const slot = document.querySelector(`[data-pokemon-name="${pokemonName}"]`);
        if (slot) {
            slot.className = `pokemon-slot ${!wasCaught ? 'caught' : 'not-caught'}`;
        }

        // Update count display
        const regionalDex = getRegionalDex(this.activeSaveFile.gameId);
        document.getElementById('activePokemonCount').textContent = 
            `${this.activeSaveFile.caughtPokemon.size}/${regionalDex.length} Caught`;
    }

    closeActiveDex() {
        document.getElementById('activeDexContainer').style.display = 'none';
        this.activeSaveFile = null;
    }

    deleteSaveFileConfirm(saveFileId) {
        const saveFile = this.saveFiles.find(sf => sf.id === saveFileId);
        if (saveFile && confirm(`Are you sure you want to delete "${saveFile.fileName}"?`)) {
            this.deleteSaveFileById(saveFileId);
        }
    }

    deleteSaveFile() {
        if (!this.activeSaveFile) return;
        
        if (confirm(`Are you sure you want to delete "${this.activeSaveFile.fileName}"?`)) {
            this.deleteSaveFileById(this.activeSaveFile.id);
            this.closeActiveDex();
        }
    }

    deleteSaveFileById(saveFileId) {
        this.saveFiles = this.saveFiles.filter(sf => sf.id !== saveFileId);
        this.saveSaveFiles();
        this.renderSaveFiles();
    }

    formatPokemonName(name) {
        return name.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    showPokemonModal(pokemon) {
        this.currentPokemon = pokemon;
        const modal = document.getElementById('pokemonModal');
        
        // Show loading state
        document.getElementById('modalLoading').style.display = 'block';
        modal.style.display = 'block';
        
        // Hide modal body while loading
        document.querySelector('#pokemonModal .modal-body').style.display = 'none';
        document.querySelector('#pokemonModal .modal-header').style.display = 'none';
        
        // Populate modal with Pokemon data
        this.populateModal(pokemon);
        
        // Hide loading and show content
        document.getElementById('modalLoading').style.display = 'none';
        document.querySelector('#pokemonModal .modal-body').style.display = 'grid';
        document.querySelector('#pokemonModal .modal-header').style.display = 'block';
    }

    populateModal(pokemonData) {
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
        chartContainer.style.cssText = 'position: relative; width: 400px; height: 400px; margin: 0 auto; max-width: 100%;';
        
        const canvas = document.createElement('canvas');
        const scale = window.devicePixelRatio || 1;
        const displaySize = 400;
        
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
        const radius = 160;
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
        
        // Draw grid lines from center to each stat point
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        for (let i = 0; i < numStats; i++) {
            const angle = (i * 2 * Math.PI) / numStats - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        
        // Draw stat labels
        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        for (let i = 0; i < numStats; i++) {
            const angle = (i * 2 * Math.PI) / numStats - Math.PI / 2;
            const labelRadius = radius + 25;
            const x = centerX + labelRadius * Math.cos(angle);
            const y = centerY + labelRadius * Math.sin(angle);
            
            const statName = statOrder[i];
            const statValue = stats[statName] || 0;
            const label = `${statLabels[statName]}\n${statValue}`;
            
            // Draw label background
            const textWidth = ctx.measureText(statLabels[statName]).width;
            const textHeight = 24;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(x - textWidth/2 - 4, y - textHeight/2, textWidth + 8, textHeight);
            
            // Draw label text
            ctx.fillStyle = '#333';
            ctx.fillText(statLabels[statName], x, y - 6);
            ctx.fillStyle = '#666';
            ctx.font = '12px Arial';
            ctx.fillText(statValue.toString(), x, y + 8);
            ctx.font = 'bold 14px Arial';
        }
        
        // Draw Pokemon stats polygon
        ctx.strokeStyle = '#4CAF50';
        ctx.fillStyle = 'rgba(76, 175, 80, 0.2)';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        
        for (let i = 0; i < numStats; i++) {
            const angle = (i * 2 * Math.PI) / numStats - Math.PI / 2;
            const statName = statOrder[i];
            const statValue = stats[statName] || 0;
            const normalizedValue = Math.min(statValue / 180, 1); // Normalize to max 180
            const statRadius = radius * normalizedValue;
            
            const x = centerX + statRadius * Math.cos(angle);
            const y = centerY + statRadius * Math.sin(angle);
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Draw stat value points
        ctx.fillStyle = '#4CAF50';
        for (let i = 0; i < numStats; i++) {
            const angle = (i * 2 * Math.PI) / numStats - Math.PI / 2;
            const statName = statOrder[i];
            const statValue = stats[statName] || 0;
            const normalizedValue = Math.min(statValue / 180, 1);
            const statRadius = radius * normalizedValue;
            
            const x = centerX + statRadius * Math.cos(angle);
            const y = centerY + statRadius * Math.sin(angle);
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    updateModalStatusButtons() {
        const isCaught = this.activeSaveFile && this.activeSaveFile.caughtPokemon.has(this.currentPokemon.name);
        
        const caughtBtn = document.getElementById('statusCaught');
        const notCaughtBtn = document.getElementById('statusNotCaught');
        
        caughtBtn.classList.toggle('active', isCaught);
        notCaughtBtn.classList.toggle('active', !isCaught);
    }

    setPokemonStatusFromModal(status) {
        if (!this.currentPokemon || !this.activeSaveFile) return;
        
        const pokemonName = this.currentPokemon.name;
        const wasCaught = this.activeSaveFile.caughtPokemon.has(pokemonName);
        const nowCaught = status === 'caught';
        
        if (nowCaught) {
            this.activeSaveFile.caughtPokemon.add(pokemonName);
        } else {
            this.activeSaveFile.caughtPokemon.delete(pokemonName);
        }
        
        this.activeSaveFile.lastModified = new Date().toISOString();
        this.saveSaveFiles();
        
        // Update the Pokemon slot in the background
        const slot = document.querySelector(`[data-pokemon-name="${pokemonName}"]`);
        if (slot) {
            slot.className = `pokemon-slot ${nowCaught ? 'caught' : 'not-caught'}`;
        }
        
        // Update count display
        const regionalDex = getRegionalDex(this.activeSaveFile.gameId);
        document.getElementById('activePokemonCount').textContent = 
            `${this.activeSaveFile.caughtPokemon.size}/${regionalDex.length} Caught`;
        
        // Update modal status buttons
        this.updateModalStatusButtons();
    }

    closeModal() {
        document.getElementById('pokemonModal').style.display = 'none';
        this.currentPokemon = null;
    }
}

// Global instance
let regionalDexBuilder;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    regionalDexBuilder = new RegionalDexBuilder();
});