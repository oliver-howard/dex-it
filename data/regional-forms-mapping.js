// Regional Forms Mapping
// Maps base Pokemon names to their regional variants

window.REGIONAL_FORMS_MAPPING = {
    // Alolan Forms (Generation 7)
    'rattata': ['alolan-rattata'],
    'raticate': ['alolan-raticate'],
    'raichu': ['alolan-raichu'],
    'sandshrew': ['alolan-sandshrew'],
    'sandslash': ['alolan-sandslash'],
    'vulpix': ['alolan-vulpix'],
    'ninetales': ['alolan-ninetales'],
    'diglett': ['alolan-diglett'],
    'dugtrio': ['alolan-dugtrio'],
    'meowth': ['alolan-meowth', 'galarian-meowth'],
    'persian': ['alolan-persian'],
    'geodude': ['alolan-geodude'],
    'graveler': ['alolan-graveler'],
    'golem': ['alolan-golem'],
    'grimer': ['alolan-grimer'],
    'muk': ['alolan-muk'],
    'exeggutor': ['alolan-exeggutor'],
    'marowak': ['alolan-marowak'],
    
    // Galarian Forms (Generation 8)
    'ponyta': ['galarian-ponyta'],
    'rapidash': ['galarian-rapidash'],
    'farfetchd': ['galarian-farfetchd'],
    'weezing': ['galarian-weezing'],
    'mr-mime': ['galarian-mr-mime'],
    'zigzagoon': ['galarian-zigzagoon'],
    'linoone': ['galarian-linoone'],
    'darumaka': ['galarian-darumaka'],
    'darmanitan': ['galarian-darmanitan'],
    'yamask': ['galarian-yamask'],
    'stunfisk': ['galarian-stunfisk'],
    'corsola': ['galarian-corsola'],
    'slowpoke': ['galarian-slowpoke'],
    'slowbro': ['galarian-slowbro'],
    'slowking': ['galarian-slowking'],
    'articuno': ['galarian-articuno'],
    'zapdos': ['galarian-zapdos'],
    'moltres': ['galarian-moltres'],
    
    // Hisuian Forms (Generation 8)
    'growlithe': ['hisuian-growlithe'],
    'arcanine': ['hisuian-arcanine'],
    'voltorb': ['hisuian-voltorb'],
    'electrode': ['hisuian-electrode'],
    'qwilfish': ['hisuian-qwilfish'],
    'sneasel': ['hisuian-sneasel'],
    'lilligant': ['hisuian-lilligant'],
    'zorua': ['hisuian-zorua'],
    'zoroark': ['hisuian-zoroark'],
    'braviary': ['hisuian-braviary'],
    'sliggoo': ['hisuian-sliggoo'],
    'goodra': ['hisuian-goodra'],
    'avalugg': ['hisuian-avalugg'],
    'basculin': ['hisuian-basculin'],
    'decidueye': ['hisuian-decidueye'],
    'typhlosion': ['hisuian-typhlosion'],
    'samurott': ['hisuian-samurott'],
    
    // Paldean Forms (Generation 9)
    'wooper': ['paldean-wooper'],
    'tauros': ['paldean-tauros-combat', 'paldean-tauros-blaze', 'paldean-tauros-aqua']
};

// Helper function to get base Pokemon name from a regional variant
function getBasePokemonName(pokemonName) {
    // Remove regional prefixes
    const regionalPrefixes = ['alolan-', 'galarian-', 'hisuian-', 'paldean-'];
    
    for (const prefix of regionalPrefixes) {
        if (pokemonName.startsWith(prefix)) {
            let baseName = pokemonName.substring(prefix.length);
            
            // Handle special cases
            if (baseName.startsWith('tauros-')) {
                return 'tauros';
            }
            if (baseName === 'basculin') {
                return 'basculin';
            }
            
            return baseName;
        }
    }
    
    return pokemonName; // Return original if no regional prefix found
}

// Helper function to check if a Pokemon is a regional form
function isRegionalForm(pokemonName) {
    const regionalPrefixes = ['alolan-', 'galarian-', 'hisuian-', 'paldean-'];
    return regionalPrefixes.some(prefix => pokemonName.startsWith(prefix));
}

// Helper function to get all regional forms for a base Pokemon
function getRegionalForms(basePokemonName) {
    return REGIONAL_FORMS_MAPPING[basePokemonName] || [];
}

// Helper function to find Pokemon data by name across all generations
function findPokemonByName(pokemonName) {
    // Search through all generation data
    for (let gen = 1; gen <= 9; gen++) {
        const varName = `GEN${gen}_POKEMON`;
        if (typeof window[varName] !== 'undefined') {
            const pokemon = window[varName].find(p => p.name === pokemonName);
            if (pokemon) {
                return pokemon;
            }
        }
    }
    return null;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        REGIONAL_FORMS_MAPPING,
        getBasePokemonName,
        isRegionalForm,
        getRegionalForms,
        findPokemonByName
    };
}