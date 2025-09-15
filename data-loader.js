// Data Loader for Pokemon Generations
// Handles lazy loading of generation data files

class DataLoader {
    constructor() {
        this.loadedGenerations = new Map();
        this.loadingPromises = new Map();
    }

    async loadGeneration(genNumber) {
        // If already loaded, return immediately
        if (this.loadedGenerations.has(genNumber)) {
            return this.loadedGenerations.get(genNumber);
        }

        // If currently loading, return the existing promise
        if (this.loadingPromises.has(genNumber)) {
            return this.loadingPromises.get(genNumber);
        }

        // Start loading the generation
        const loadPromise = this.fetchGenerationData(genNumber);
        this.loadingPromises.set(genNumber, loadPromise);

        try {
            const data = await loadPromise;
            this.loadedGenerations.set(genNumber, data);
            this.loadingPromises.delete(genNumber);
            return data;
        } catch (error) {
            this.loadingPromises.delete(genNumber);
            throw error;
        }
    }

    async fetchGenerationData(genNumber) {
        console.log(`Loading Generation ${genNumber} data...`);
        
        const globalVarName = `GEN${genNumber}_POKEMON`;
        
        try {
            // Direct access to global variables (they should be loaded by now)
            const pokemonData = window[globalVarName];
            
            console.log(`Looking for variable: ${globalVarName}`);
            console.log(`Found data:`, pokemonData ? `${pokemonData.length} Pokemon` : 'undefined');
            
            if (!pokemonData || pokemonData.length === 0) {
                // Debug: show what variables are actually available
                const availableVars = [];
                console.log('Checking all window variables...');
                for (let i = 1; i <= 9; i++) {
                    const varName = `GEN${i}_POKEMON`;
                    const exists = typeof window[varName] !== 'undefined';
                    console.log(`${varName}: ${exists ? window[varName].length + ' Pokemon' : 'NOT FOUND'}`);
                    if (window[varName]) {
                        availableVars.push(`${varName}: ${window[varName].length} Pokemon`);
                    }
                }
                console.log('Available generation variables:', availableVars);
                
                throw new Error(`Generation ${genNumber} data not found. Variable ${globalVarName} is not available.`);
            }
            
            console.log(`Successfully loaded ${pokemonData.length} Pokemon for Generation ${genNumber}`);
            
            return pokemonData;
            
        } catch (error) {
            console.error(`Error loading Generation ${genNumber}:`, error);
            throw new Error(`Failed to load Generation ${genNumber} data: ${error.message}`);
        }
    }

    async loadAllGenerations() {
        console.log('Loading all generations...');
        const allData = [];
        
        for (let gen = 1; gen <= 9; gen++) {
            try {
                const genData = await this.loadGeneration(gen);
                allData.push(...genData);
            } catch (error) {
                console.error(`Failed to load Generation ${gen}:`, error);
                // Continue with other generations even if one fails
            }
        }
        
        if (allData.length === 0) {
            throw new Error('No Pokemon data found');
        }
        
        console.log(`Successfully loaded ${allData.length} total Pokemon`);
        return allData.sort((a, b) => a.id - b.id);
    }

    isGenerationLoaded(genNumber) {
        return this.loadedGenerations.has(genNumber);
    }

    getLoadedGeneration(genNumber) {
        return this.loadedGenerations.get(genNumber) || null;
    }

    clearCache() {
        this.loadedGenerations.clear();
        this.loadingPromises.clear();
    }
}

// Create global instance
const dataLoader = new DataLoader();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataLoader;
}