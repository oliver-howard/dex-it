// Web Worker for Pokemon filtering and search operations
// This moves heavy computations off the main thread for better performance

class PokemonWorker {
    constructor() {
        this.pokemonData = [];
        this.searchIndex = {
            byName: new Map(),
            byType: new Map(),
            byId: new Map()
        };
    }

    // Initialize worker with Pokemon data
    initializeData(pokemonData) {
        this.pokemonData = pokemonData;
        this.buildSearchIndex();
        return { success: true, count: pokemonData.length };
    }

    // Build optimized search index
    buildSearchIndex() {
        const startTime = performance.now();
        
        this.searchIndex = {
            byName: new Map(),
            byType: new Map(),
            byId: new Map()
        };

        this.pokemonData.forEach((pokemon, index) => {
            // Index by name (for search)
            this.searchIndex.byName.set(pokemon.name.toLowerCase(), index);
            
            // Index by ID
            this.searchIndex.byId.set(pokemon.id, index);
            
            // Index by types
            pokemon.types.forEach(type => {
                if (!this.searchIndex.byType.has(type)) {
                    this.searchIndex.byType.set(type, []);
                }
                this.searchIndex.byType.get(type).push(index);
            });
        });

        const endTime = performance.now();
        return { 
            indexTime: endTime - startTime,
            nameCount: this.searchIndex.byName.size,
            typeCount: this.searchIndex.byType.size,
            idCount: this.searchIndex.byId.size
        };
    }

    // Fast filtering using indexes
    filterPokemon(filters) {
        const startTime = performance.now();
        const { searchTerm, statusFilter, typeFilter, pokemonStatus } = filters;
        
        let candidateIndices = new Set();
        
        // Start with type filter if specified (most selective)
        if (typeFilter !== 'all') {
            const typeIndices = this.searchIndex.byType.get(typeFilter) || [];
            candidateIndices = new Set(typeIndices);
        } else {
            // If no type filter, start with all Pokemon
            candidateIndices = new Set(Array.from({length: this.pokemonData.length}, (_, i) => i));
        }
        
        // Apply search filter
        if (searchTerm) {
            const searchMatches = new Set();
            const lowerSearchTerm = searchTerm.toLowerCase();
            
            candidateIndices.forEach(index => {
                const pokemon = this.pokemonData[index];
                if (pokemon.name.toLowerCase().includes(lowerSearchTerm) || 
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
                const pokemon = this.pokemonData[index];
                const status = pokemonStatus[pokemon.id] || 'not-caught';
                if (status === statusFilter) {
                    statusMatches.add(index);
                }
            });
            candidateIndices = statusMatches;
        }
        
        // Convert indices back to Pokemon objects
        const filteredPokemon = Array.from(candidateIndices).map(index => this.pokemonData[index]);
        
        const endTime = performance.now();
        
        return {
            results: filteredPokemon,
            filterTime: endTime - startTime,
            resultCount: filteredPokemon.length
        };
    }

    // Get Pokemon by ID ranges (for pagination)
    getPokemonByRange(startId, endId) {
        return this.pokemonData.filter(pokemon => 
            pokemon.id >= startId && pokemon.id <= endId
        );
    }

    // Search Pokemon by name prefix (for autocomplete)
    searchByNamePrefix(prefix, limit = 10) {
        const lowerPrefix = prefix.toLowerCase();
        const matches = [];
        
        for (const [name, index] of this.searchIndex.byName) {
            if (name.startsWith(lowerPrefix)) {
                matches.push(this.pokemonData[index]);
                if (matches.length >= limit) break;
            }
        }
        
        return matches;
    }
}

// Web Worker message handling
const worker = new PokemonWorker();

self.onmessage = function(e) {
    const { type, data, id } = e.data;
    let result;

    try {
        switch (type) {
            case 'INIT_DATA':
                result = worker.initializeData(data.pokemonData);
                break;
                
            case 'FILTER_POKEMON':
                result = worker.filterPokemon(data);
                break;
                
            case 'BUILD_INDEX':
                result = worker.buildSearchIndex();
                break;
                
            case 'GET_BY_RANGE':
                result = worker.getPokemonByRange(data.startId, data.endId);
                break;
                
            case 'SEARCH_PREFIX':
                result = worker.searchByNamePrefix(data.prefix, data.limit);
                break;
                
            default:
                throw new Error(`Unknown message type: ${type}`);
        }

        // Send success response
        self.postMessage({
            id,
            type: `${type}_SUCCESS`,
            data: result
        });

    } catch (error) {
        // Send error response
        self.postMessage({
            id,
            type: `${type}_ERROR`,
            error: error.message
        });
    }
};