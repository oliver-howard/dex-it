// Regional Pokédex Data for Each Game
// Template for easy manual entry - just add Pokemon names to each game's array

const REGIONAL_POKEDEX = {
    // Generation I - Kanto
    "red-blue": [
        "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", 
        "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
        "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
        "rattata", "raticate", "spearow", "fearow", "ekans", "arbok",
        "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina",
        "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable",
        "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat",
        "oddish", "gloom", "vileplume", "paras", "parasect", "venonat",
        "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck",
        "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
        "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop",
        "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool",
        "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash",
        "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo",
        "dodrio", "seel", "dewgong", "grimer", "muk", "shellder",
        "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
        "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute",
        "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung",
        "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela",
        "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu",
        "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar",
        "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto",
        "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte",
        "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno",
        "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"
    ],
    
    "yellow": [
        // Same as Red/Blue but with any differences for Yellow version
        // Usually the same 151 Pokemon but may have different encounter locations
    ],
    
    // Generation II - Johto
    "gold-silver": [
        // Add Johto regional dex Pokemon here
        // This includes both Johto natives (152-251) and some Kanto Pokemon
        // Example: "chikorita", "bayleef", "meganium", "cyndaquil", etc.
    ],
    
    "crystal": [
        // Same as Gold/Silver but may have slight differences
    ],
    
    // Generation III - Hoenn
    "ruby-sapphire": [
        // Add Hoenn regional dex Pokemon here
        // Example: "treecko", "grovyle", "sceptile", "torchic", etc.
    ],
    
    "emerald": [
        // Emerald regional dex (usually expanded from Ruby/Sapphire)
    ],
    
    // Generation IV - Sinnoh
    "diamond-pearl": [
        // Add Sinnoh regional dex Pokemon here
        // Example: "turtwig", "grotle", "torterra", "chimchar", etc.
    ],
    
    "platinum": [
        // Platinum regional dex (expanded from Diamond/Pearl)
    ],
    
    // Generation V - Unova
    "black-white": [
        // Add Unova regional dex Pokemon here (original B/W only had new Pokemon)
        // Example: "snivy", "servine", "serperior", "tepig", etc.
    ],
    
    "black2-white2": [
        // B2/W2 regional dex (included Pokemon from previous generations)
    ],
    
    // Generation VI - Kalos
    "x-y": [
        // Add Kalos regional dex Pokemon here
        // Example: "chespin", "quilladin", "chesnaught", "fennekin", etc.
    ],
    
    // Generation VII - Alola
    "sun-moon": [
        // Add Alola regional dex Pokemon here
        // Example: "rowlet", "dartrix", "decidueye", "litten", etc.
    ],
    
    "ultra-sun-ultra-moon": [
        // Ultra versions regional dex (expanded from Sun/Moon)
    ],
    
    // Generation VIII - Galar
    "sword-shield": [
        // Add Galar regional dex Pokemon here
        // Example: "grookey", "thwackey", "rillaboom", "scorbunny", etc.
    ],
    
    // Generation IX - Paldea
    "scarlet-violet": [
        // Add Paldea regional dex Pokemon here
        // Example: "sprigatito", "floragato", "meowscarada", "fuecoco", etc.
    ]
};

// Helper function to get regional dex for a specific game
function getRegionalDex(gameId) {
    return REGIONAL_POKEDEX[gameId] || [];
}

// Helper function to check if a Pokemon is in a specific game's regional dex
function isPokemonInGame(pokemonName, gameId) {
    const regionalDex = getRegionalDex(gameId);
    return regionalDex.includes(pokemonName.toLowerCase());
}

// Helper function to get all games a Pokemon appears in
function getGamesForPokemon(pokemonName) {
    const games = [];
    for (const [gameId, dex] of Object.entries(REGIONAL_POKEDEX)) {
        if (dex.includes(pokemonName.toLowerCase())) {
            games.push(gameId);
        }
    }
    return games;
}

// Template for adding new games:
// 1. Add the game ID to REGIONAL_POKEDEX object
// 2. Create an array with Pokemon names in regional dex order
// 3. Just type the Pokemon names separated by commas
// Example:
// "new-game": [
//     "pokemon1", "pokemon2", "pokemon3", 
//     // ... continue with all Pokemon in regional dex order
// ]

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        REGIONAL_POKEDEX, 
        getRegionalDex, 
        isPokemonInGame, 
        getGamesForPokemon 
    };
}