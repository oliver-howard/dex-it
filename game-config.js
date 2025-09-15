// Game Configuration Template for All 9 Main-Series Generations
// This file defines the structure for each generation/game

const GAME_CONFIG = {
    generations: {
        1: {
            name: "Generation I",
            region: "Kanto",
            games: ["Red", "Blue", "Yellow"],
            pokemonRange: { start: 1, end: 151 },
            totalPokemon: 151,
            color: "#FF6B6B", // Red theme
            sprite: "gen1",
            features: {
                types: 15, // Original 15 types (no Dark/Steel/Fairy)
                abilities: false,
                physicalSpecialSplit: false,
                genders: false
            }
        },
        2: {
            name: "Generation II", 
            region: "Johto",
            games: ["Gold", "Silver", "Crystal"],
            pokemonRange: { start: 152, end: 251 },
            totalPokemon: 100,
            color: "#4ECDC4", // Teal theme
            sprite: "gen2",
            features: {
                types: 17, // Added Dark/Steel
                abilities: false,
                physicalSpecialSplit: false,
                genders: true
            }
        },
        3: {
            name: "Generation III",
            region: "Hoenn", 
            games: ["Ruby", "Sapphire", "Emerald"],
            pokemonRange: { start: 252, end: 386 },
            totalPokemon: 135,
            color: "#45B7D1", // Blue theme
            sprite: "gen3",
            features: {
                types: 17,
                abilities: true,
                physicalSpecialSplit: false,
                genders: true
            }
        },
        4: {
            name: "Generation IV",
            region: "Sinnoh",
            games: ["Diamond", "Pearl", "Platinum"],
            pokemonRange: { start: 387, end: 493 },
            totalPokemon: 107,
            color: "#9B59B6", // Purple theme
            sprite: "gen4",
            features: {
                types: 17,
                abilities: true,
                physicalSpecialSplit: true,
                genders: true
            }
        },
        5: {
            name: "Generation V",
            region: "Unova",
            games: ["Black", "White", "Black 2", "White 2"],
            pokemonRange: { start: 494, end: 649 },
            totalPokemon: 156,
            color: "#2ECC71", // Green theme
            sprite: "gen5",
            features: {
                types: 17,
                abilities: true,
                physicalSpecialSplit: true,
                genders: true
            }
        },
        6: {
            name: "Generation VI",
            region: "Kalos",
            games: ["X", "Y"],
            pokemonRange: { start: 650, end: 721 },
            totalPokemon: 72,
            color: "#F39C12", // Orange theme
            sprite: "gen6",
            features: {
                types: 18, // Added Fairy
                abilities: true,
                physicalSpecialSplit: true,
                genders: true,
                megaEvolution: true
            }
        },
        7: {
            name: "Generation VII",
            region: "Alola",
            games: ["Sun", "Moon", "Ultra Sun", "Ultra Moon"],
            pokemonRange: { start: 722, end: 809 },
            totalPokemon: 88,
            color: "#E74C3C", // Red-orange theme
            sprite: "gen7",
            features: {
                types: 18,
                abilities: true,
                physicalSpecialSplit: true,
                genders: true,
                zMoves: true,
                ultraBeasts: true
            }
        },
        8: {
            name: "Generation VIII",
            region: "Galar",
            games: ["Sword", "Shield"],
            pokemonRange: { start: 810, end: 905 },
            totalPokemon: 96,
            color: "#3498DB", // Light blue theme
            sprite: "gen8",
            features: {
                types: 18,
                abilities: true,
                physicalSpecialSplit: true,
                genders: true,
                dynamax: true,
                gigantamax: true
            }
        },
        9: {
            name: "Generation IX",
            region: "Paldea",
            games: ["Scarlet", "Violet"],
            pokemonRange: { start: 906, end: 1025 },
            totalPokemon: 120,
            color: "#8E44AD", // Deep purple theme
            sprite: "gen9",
            features: {
                types: 18,
                abilities: true,
                physicalSpecialSplit: true,
                genders: true,
                terastallize: true
            }
        }
    },

    // National Dex mode (all Pokemon)
    national: {
        name: "National Pokédex",
        region: "All Regions",
        games: ["All Games"],
        pokemonRange: { start: 1, end: 1025 },
        totalPokemon: 1025,
        color: "#34495E", // Dark theme
        sprite: "all",
        features: {
            types: 18,
            abilities: true,
            physicalSpecialSplit: true,
            genders: true,
            allFeatures: true
        }
    }
};

// Helper functions for game configuration
function getGenerationConfig(genNumber) {
    return GAME_CONFIG.generations[genNumber] || null;
}

function getAllGenerations() {
    return Object.keys(GAME_CONFIG.generations).map(gen => ({
        id: parseInt(gen),
        ...GAME_CONFIG.generations[gen]
    }));
}

function getPokemonForGeneration(genNumber) {
    const config = getGenerationConfig(genNumber);
    if (!config) return [];
    
    const { start, end } = config.pokemonRange;
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function getTotalPokemonCount() {
    return GAME_CONFIG.national.totalPokemon;
}

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        GAME_CONFIG, 
        getGenerationConfig, 
        getAllGenerations, 
        getPokemonForGeneration, 
        getTotalPokemonCount 
    };
}