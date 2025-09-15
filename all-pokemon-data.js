// Combined Pokemon Data for All Generations
// Fallback solution - loads all Pokemon data in one file

// Import all generation data and combine
const ALL_POKEMON_DATA = {
    1: [], // Will be populated
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
};

// Simple data getter functions
function getPokemonDataForGeneration(genNumber) {
    // Try to get from individual generation variables first
    const varName = `GEN${genNumber}_POKEMON`;
    if (typeof window[varName] !== 'undefined') {
        return window[varName];
    }
    
    // Fallback to stored data
    return ALL_POKEMON_DATA[genNumber] || [];
}

function getAllPokemonData() {
    const allData = [];
    for (let gen = 1; gen <= 9; gen++) {
        const genData = getPokemonDataForGeneration(gen);
        allData.push(...genData);
    }
    return allData.sort((a, b) => a.id - b.id);
}

// Populate data after scripts load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Populating combined Pokemon data...');
    
    for (let gen = 1; gen <= 9; gen++) {
        const varName = `GEN${gen}_POKEMON`;
        if (typeof window[varName] !== 'undefined') {
            ALL_POKEMON_DATA[gen] = window[varName];
            console.log(`Loaded ${window[varName].length} Pokemon for Generation ${gen}`);
        } else {
            console.error(`Failed to load ${varName}`);
        }
    }
});

// Export for compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        getPokemonDataForGeneration, 
        getAllPokemonData,
        ALL_POKEMON_DATA 
    };
}