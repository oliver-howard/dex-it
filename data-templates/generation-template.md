# Generation Data Template

This template shows how to structure Pokemon data for each generation.

## File Structure
```
data/
├── gen1-pokemon.js     # Generation I (Kanto) - 151 Pokemon
├── gen2-pokemon.js     # Generation II (Johto) - 100 Pokemon  
├── gen3-pokemon.js     # Generation III (Hoenn) - 135 Pokemon
├── gen4-pokemon.js     # Generation IV (Sinnoh) - 107 Pokemon
├── gen5-pokemon.js     # Generation V (Unova) - 156 Pokemon
├── gen6-pokemon.js     # Generation VI (Kalos) - 72 Pokemon
├── gen7-pokemon.js     # Generation VII (Alola) - 88 Pokemon
├── gen8-pokemon.js     # Generation VIII (Galar) - 96 Pokemon
└── gen9-pokemon.js     # Generation IX (Paldea) - 120 Pokemon
```

## Data Format
Each generation file should export an array of Pokemon objects:

```javascript
const GEN_X_POKEMON = [
  {
    "id": 1,
    "name": "pokemon-name",
    "types": ["type1", "type2"],
    "height": 7,                    // in decimeters
    "weight": 69,                   // in hectograms  
    "base_experience": 64,
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "sp.-atk": 65,
      "sp.-def": 65,
      "speed": 45
    },
    "abilities": [
      {
        "name": "ability-name",
        "is_hidden": false,
        "slot": 1
      }
    ],
    "sprites": {
      "front_default": "sprite_url",
      "official_artwork": "artwork_url"
    }
  }
];

// Helper functions
function getGen1PokemonById(id) {
    return GEN_X_POKEMON.find(pokemon => pokemon.id === id);
}

export { GEN_X_POKEMON, getGen1PokemonById };
```

## Integration Steps

1. **Create generation file** following the template above
2. **Import in main script**:
   ```javascript
   import { GEN_X_POKEMON } from './data/genX-pokemon.js';
   ```
3. **Update game-config.js** with accurate Pokemon ranges
4. **Test generation switching** in the UI

## Data Sources

- **PokeAPI**: https://pokeapi.co/api/v2/pokemon/{id}
- **Sprites**: 
  - Small: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`
  - Artwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`

## Current Status

- ✅ **Generation I**: Complete (pokemon-database.js)
- ⏳ **Generation II**: Template ready
- ⏳ **Generation III**: Template ready  
- ⏳ **Generation IV**: Template ready
- ⏳ **Generation V**: Template ready
- ⏳ **Generation VI**: Template ready
- ⏳ **Generation VII**: Template ready
- ⏳ **Generation VIII**: Template ready
- ⏳ **Generation IX**: Template ready

## Notes

- Each generation should maintain consistent data structure
- Sprite URLs follow PokeAPI convention
- Stats use post-Gen IV naming (sp.-atk, sp.-def)
- All data stored locally for offline functionality