// Comprehensive Pokemon Database - First 151 Pokemon
// Generated from PokeAPI data to enable offline functionality
// Contains all necessary data for the Pokedex application

const POKEMON_DATABASE = [
  {
    "id": 1,
    "name": "bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "height": 7,
    "weight": 69,
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
        "name": "overgrow",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    }
  },
  {
    "id": 2,
    "name": "ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "height": 10,
    "weight": 130,
    "base_experience": 142,
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "sp.-atk": 80,
      "sp.-def": 80,
      "speed": 60
    },
    "abilities": [
      {
        "name": "overgrow",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    }
  },
  {
    "id": 3,
    "name": "venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "height": 20,
    "weight": 1000,
    "base_experience": 236,
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "sp.-atk": 100,
      "sp.-def": 100,
      "speed": 80
    },
    "abilities": [
      {
        "name": "overgrow",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    }
  },
  {
    "id": 4,
    "name": "charmander",
    "types": [
      "fire"
    ],
    "height": 6,
    "weight": 85,
    "base_experience": 62,
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "sp.-atk": 60,
      "sp.-def": 50,
      "speed": 65
    },
    "abilities": [
      {
        "name": "blaze",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    }
  },
  {
    "id": 5,
    "name": "charmeleon",
    "types": [
      "fire"
    ],
    "height": 11,
    "weight": 190,
    "base_experience": 142,
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "sp.-atk": 80,
      "sp.-def": 65,
      "speed": 80
    },
    "abilities": [
      {
        "name": "blaze",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    }
  },
  {
    "id": 6,
    "name": "charizard",
    "types": [
      "fire",
      "flying"
    ],
    "height": 17,
    "weight": 905,
    "base_experience": 240,
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "sp.-atk": 109,
      "sp.-def": 85,
      "speed": 100
    },
    "abilities": [
      {
        "name": "blaze",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    }
  },
  {
    "id": 7,
    "name": "squirtle",
    "types": [
      "water"
    ],
    "height": 5,
    "weight": 90,
    "base_experience": 63,
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "sp.-atk": 50,
      "sp.-def": 64,
      "speed": 43
    },
    "abilities": [
      {
        "name": "torrent",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    }
  },
  {
    "id": 8,
    "name": "wartortle",
    "types": [
      "water"
    ],
    "height": 10,
    "weight": 225,
    "base_experience": 142,
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "sp.-atk": 65,
      "sp.-def": 80,
      "speed": 58
    },
    "abilities": [
      {
        "name": "torrent",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
    }
  },
  {
    "id": 9,
    "name": "blastoise",
    "types": [
      "water"
    ],
    "height": 16,
    "weight": 855,
    "base_experience": 239,
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "sp.-atk": 85,
      "sp.-def": 105,
      "speed": 78
    },
    "abilities": [
      {
        "name": "torrent",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    }
  },
  {
    "id": 10,
    "name": "caterpie",
    "types": [
      "bug"
    ],
    "height": 3,
    "weight": 29,
    "base_experience": 39,
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "sp.-atk": 20,
      "sp.-def": 20,
      "speed": 45
    },
    "abilities": [
      {
        "name": "shield-dust",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    }
  },
  {
    "id": 11,
    "name": "metapod",
    "types": [
      "bug"
    ],
    "height": 7,
    "weight": 99,
    "base_experience": 72,
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "sp.-atk": 25,
      "sp.-def": 25,
      "speed": 30
    },
    "abilities": [
      {
        "name": "shed-skin",
        "is_hidden": false,
        "slot": 1
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
    }
  },
  {
    "id": 12,
    "name": "butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "height": 11,
    "weight": 320,
    "base_experience": 178,
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "sp.-atk": 90,
      "sp.-def": 80,
      "speed": 70
    },
    "abilities": [
      {
        "name": "compound-eyes",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
    }
  },
  {
    "id": 13,
    "name": "weedle",
    "types": [
      "bug",
      "poison"
    ],
    "height": 3,
    "weight": 32,
    "base_experience": 39,
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "sp.-atk": 20,
      "sp.-def": 20,
      "speed": 50
    },
    "abilities": [
      {
        "name": "shield-dust",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
    }
  },
  {
    "id": 14,
    "name": "kakuna",
    "types": [
      "bug",
      "poison"
    ],
    "height": 6,
    "weight": 100,
    "base_experience": 72,
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "sp.-atk": 25,
      "sp.-def": 25,
      "speed": 35
    },
    "abilities": [
      {
        "name": "shed-skin",
        "is_hidden": false,
        "slot": 1
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
    }
  },
  {
    "id": 15,
    "name": "beedrill",
    "types": [
      "bug",
      "poison"
    ],
    "height": 10,
    "weight": 295,
    "base_experience": 178,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "sp.-atk": 45,
      "sp.-def": 80,
      "speed": 75
    },
    "abilities": [
      {
        "name": "swarm",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
    }
  },
  {
    "id": 16,
    "name": "pidgey",
    "types": [
      "normal",
      "flying"
    ],
    "height": 3,
    "weight": 18,
    "base_experience": 50,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "sp.-atk": 35,
      "sp.-def": 35,
      "speed": 56
    },
    "abilities": [
      {
        "name": "keen-eye",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
    }
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "types": [
      "normal",
      "flying"
    ],
    "height": 11,
    "weight": 300,
    "base_experience": 122,
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "sp.-atk": 50,
      "sp.-def": 50,
      "speed": 71
    },
    "abilities": [
      {
        "name": "keen-eye",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
    }
  },
  {
    "id": 18,
    "name": "pidgeot",
    "types": [
      "normal",
      "flying"
    ],
    "height": 15,
    "weight": 395,
    "base_experience": 216,
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "sp.-atk": 70,
      "sp.-def": 70,
      "speed": 101
    },
    "abilities": [
      {
        "name": "keen-eye",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
    }
  },
  {
    "id": 19,
    "name": "rattata",
    "types": [
      "normal"
    ],
    "height": 3,
    "weight": 35,
    "base_experience": 51,
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "sp.-atk": 25,
      "sp.-def": 35,
      "speed": 72
    },
    "abilities": [
      {
        "name": "run-away",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
    }
  },
  {
    "id": 20,
    "name": "raticate",
    "types": [
      "normal"
    ],
    "height": 7,
    "weight": 185,
    "base_experience": 145,
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "sp.-atk": 50,
      "sp.-def": 70,
      "speed": 97
    },
    "abilities": [
      {
        "name": "run-away",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
    }
  },
  {
    "id": 21,
    "name": "spearow",
    "types": [
      "normal",
      "flying"
    ],
    "height": 3,
    "weight": 20,
    "base_experience": 52,
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "sp.-atk": 31,
      "sp.-def": 31,
      "speed": 70
    },
    "abilities": [
      {
        "name": "keen-eye",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
    }
  },
  {
    "id": 22,
    "name": "fearow",
    "types": [
      "normal",
      "flying"
    ],
    "height": 12,
    "weight": 380,
    "base_experience": 155,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "sp.-atk": 61,
      "sp.-def": 61,
      "speed": 100
    },
    "abilities": [
      {
        "name": "keen-eye",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
    }
  },
  {
    "id": 23,
    "name": "ekans",
    "types": [
      "poison"
    ],
    "height": 20,
    "weight": 69,
    "base_experience": 58,
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "sp.-atk": 40,
      "sp.-def": 54,
      "speed": 55
    },
    "abilities": [
      {
        "name": "intimidate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
    }
  },
  {
    "id": 24,
    "name": "arbok",
    "types": [
      "poison"
    ],
    "height": 35,
    "weight": 650,
    "base_experience": 157,
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "sp.-atk": 65,
      "sp.-def": 79,
      "speed": 80
    },
    "abilities": [
      {
        "name": "intimidate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
    }
  },
  {
    "id": 25,
    "name": "pikachu",
    "types": [
      "electric"
    ],
    "height": 4,
    "weight": 60,
    "base_experience": 112,
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "sp.-atk": 50,
      "sp.-def": 50,
      "speed": 90
    },
    "abilities": [
      {
        "name": "static",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    }
  },
  {
    "id": 26,
    "name": "raichu",
    "types": [
      "electric"
    ],
    "height": 8,
    "weight": 300,
    "base_experience": 218,
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "sp.-atk": 90,
      "sp.-def": 80,
      "speed": 110
    },
    "abilities": [
      {
        "name": "static",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
    }
  },
  {
    "id": 27,
    "name": "sandshrew",
    "types": [
      "ground"
    ],
    "height": 6,
    "weight": 120,
    "base_experience": 60,
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "sp.-atk": 20,
      "sp.-def": 30,
      "speed": 40
    },
    "abilities": [
      {
        "name": "sand-veil",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sand-rush",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
    }
  },
  {
    "id": 28,
    "name": "sandslash",
    "types": [
      "ground"
    ],
    "height": 10,
    "weight": 295,
    "base_experience": 158,
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "sp.-atk": 45,
      "sp.-def": 55,
      "speed": 65
    },
    "abilities": [
      {
        "name": "sand-veil",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sand-rush",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
    }
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "types": [
      "poison"
    ],
    "height": 4,
    "weight": 70,
    "base_experience": 55,
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "sp.-atk": 40,
      "sp.-def": 40,
      "speed": 41
    },
    "abilities": [
      {
        "name": "poison-point",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
    }
  },
  {
    "id": 30,
    "name": "nidorina",
    "types": [
      "poison"
    ],
    "height": 8,
    "weight": 200,
    "base_experience": 128,
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "sp.-atk": 55,
      "sp.-def": 55,
      "speed": 56
    },
    "abilities": [
      {
        "name": "poison-point",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
    }
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "types": [
      "poison",
      "ground"
    ],
    "height": 13,
    "weight": 600,
    "base_experience": 227,
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "sp.-atk": 75,
      "sp.-def": 85,
      "speed": 76
    },
    "abilities": [
      {
        "name": "poison-point",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
    }
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "types": [
      "poison"
    ],
    "height": 5,
    "weight": 90,
    "base_experience": 55,
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "sp.-atk": 40,
      "sp.-def": 40,
      "speed": 50
    },
    "abilities": [
      {
        "name": "poison-point",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
    }
  },
  {
    "id": 33,
    "name": "nidorino",
    "types": [
      "poison"
    ],
    "height": 9,
    "weight": 195,
    "base_experience": 128,
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "sp.-atk": 55,
      "sp.-def": 55,
      "speed": 65
    },
    "abilities": [
      {
        "name": "poison-point",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
    }
  },
  {
    "id": 34,
    "name": "nidoking",
    "types": [
      "poison",
      "ground"
    ],
    "height": 14,
    "weight": 620,
    "base_experience": 227,
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "sp.-atk": 85,
      "sp.-def": 75,
      "speed": 85
    },
    "abilities": [
      {
        "name": "poison-point",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
    }
  },
  {
    "id": 35,
    "name": "clefairy",
    "types": [
      "fairy"
    ],
    "height": 6,
    "weight": 75,
    "base_experience": 113,
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "sp.-atk": 60,
      "sp.-def": 65,
      "speed": 35
    },
    "abilities": [
      {
        "name": "cute-charm",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
    }
  },
  {
    "id": 36,
    "name": "clefable",
    "types": [
      "fairy"
    ],
    "height": 13,
    "weight": 400,
    "base_experience": 217,
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "sp.-atk": 95,
      "sp.-def": 90,
      "speed": 60
    },
    "abilities": [
      {
        "name": "cute-charm",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "unaware",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
    }
  },
  {
    "id": 37,
    "name": "vulpix",
    "types": [
      "fire"
    ],
    "height": 6,
    "weight": 99,
    "base_experience": 60,
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "sp.-atk": 50,
      "sp.-def": 65,
      "speed": 65
    },
    "abilities": [
      {
        "name": "flash-fire",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "drought",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
    }
  },
  {
    "id": 38,
    "name": "ninetales",
    "types": [
      "fire"
    ],
    "height": 11,
    "weight": 199,
    "base_experience": 177,
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "sp.-atk": 81,
      "sp.-def": 100,
      "speed": 100
    },
    "abilities": [
      {
        "name": "flash-fire",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "drought",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
    }
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "types": [
      "normal",
      "fairy"
    ],
    "height": 5,
    "weight": 55,
    "base_experience": 95,
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "sp.-atk": 45,
      "sp.-def": 25,
      "speed": 20
    },
    "abilities": [
      {
        "name": "cute-charm",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    }
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "types": [
      "normal",
      "fairy"
    ],
    "height": 10,
    "weight": 120,
    "base_experience": 196,
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "sp.-atk": 85,
      "sp.-def": 50,
      "speed": 45
    },
    "abilities": [
      {
        "name": "cute-charm",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "frisk",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
    }
  },
  {
    "id": 41,
    "name": "zubat",
    "types": [
      "poison",
      "flying"
    ],
    "height": 8,
    "weight": 75,
    "base_experience": 49,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "sp.-atk": 30,
      "sp.-def": 40,
      "speed": 55
    },
    "abilities": [
      {
        "name": "inner-focus",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
    }
  },
  {
    "id": 42,
    "name": "golbat",
    "types": [
      "poison",
      "flying"
    ],
    "height": 16,
    "weight": 550,
    "base_experience": 159,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "sp.-atk": 65,
      "sp.-def": 75,
      "speed": 90
    },
    "abilities": [
      {
        "name": "inner-focus",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
    }
  },
  {
    "id": 43,
    "name": "oddish",
    "types": [
      "grass",
      "poison"
    ],
    "height": 5,
    "weight": 54,
    "base_experience": 64,
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "sp.-atk": 75,
      "sp.-def": 65,
      "speed": 30
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
    }
  },
  {
    "id": 44,
    "name": "gloom",
    "types": [
      "grass",
      "poison"
    ],
    "height": 8,
    "weight": 86,
    "base_experience": 138,
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "sp.-atk": 85,
      "sp.-def": 75,
      "speed": 40
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "stench",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
    }
  },
  {
    "id": 45,
    "name": "vileplume",
    "types": [
      "grass",
      "poison"
    ],
    "height": 12,
    "weight": 186,
    "base_experience": 221,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "sp.-atk": 110,
      "sp.-def": 90,
      "speed": 50
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "effect-spore",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
    }
  },
  {
    "id": 46,
    "name": "paras",
    "types": [
      "bug",
      "grass"
    ],
    "height": 3,
    "weight": 54,
    "base_experience": 57,
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "sp.-atk": 45,
      "sp.-def": 55,
      "speed": 25
    },
    "abilities": [
      {
        "name": "effect-spore",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "dry-skin",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
    }
  },
  {
    "id": 47,
    "name": "parasect",
    "types": [
      "bug",
      "grass"
    ],
    "height": 10,
    "weight": 295,
    "base_experience": 142,
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "sp.-atk": 60,
      "sp.-def": 80,
      "speed": 30
    },
    "abilities": [
      {
        "name": "effect-spore",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "dry-skin",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
    }
  },
  {
    "id": 48,
    "name": "venonat",
    "types": [
      "bug",
      "poison"
    ],
    "height": 10,
    "weight": 300,
    "base_experience": 61,
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "sp.-atk": 40,
      "sp.-def": 55,
      "speed": 45
    },
    "abilities": [
      {
        "name": "compound-eyes",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "run-away",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
    }
  },
  {
    "id": 49,
    "name": "venomoth",
    "types": [
      "bug",
      "poison"
    ],
    "height": 15,
    "weight": 125,
    "base_experience": 158,
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "sp.-atk": 90,
      "sp.-def": 75,
      "speed": 90
    },
    "abilities": [
      {
        "name": "shield-dust",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "wonder-skin",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
    }
  },
  {
    "id": 50,
    "name": "diglett",
    "types": [
      "ground"
    ],
    "height": 2,
    "weight": 8,
    "base_experience": 53,
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "sp.-atk": 35,
      "sp.-def": 45,
      "speed": 95
    },
    "abilities": [
      {
        "name": "sand-veil",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "arena-trap",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
    }
  },
  {
    "id": 51,
    "name": "dugtrio",
    "types": [
      "ground"
    ],
    "height": 7,
    "weight": 333,
    "base_experience": 149,
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "sp.-atk": 50,
      "sp.-def": 70,
      "speed": 120
    },
    "abilities": [
      {
        "name": "sand-veil",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "arena-trap",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
    }
  },
  {
    "id": 52,
    "name": "meowth",
    "types": [
      "normal"
    ],
    "height": 4,
    "weight": 42,
    "base_experience": 58,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "sp.-atk": 40,
      "sp.-def": 40,
      "speed": 90
    },
    "abilities": [
      {
        "name": "pickup",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
    }
  },
  {
    "id": 53,
    "name": "persian",
    "types": [
      "normal"
    ],
    "height": 10,
    "weight": 320,
    "base_experience": 154,
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "sp.-atk": 65,
      "sp.-def": 65,
      "speed": 115
    },
    "abilities": [
      {
        "name": "limber",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
    }
  },
  {
    "id": 54,
    "name": "psyduck",
    "types": [
      "water"
    ],
    "height": 8,
    "weight": 196,
    "base_experience": 64,
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "sp.-atk": 65,
      "sp.-def": 50,
      "speed": 55
    },
    "abilities": [
      {
        "name": "damp",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "cloud-nine",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
    }
  },
  {
    "id": 55,
    "name": "golduck",
    "types": [
      "water"
    ],
    "height": 17,
    "weight": 766,
    "base_experience": 175,
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "sp.-atk": 95,
      "sp.-def": 80,
      "speed": 85
    },
    "abilities": [
      {
        "name": "damp",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "cloud-nine",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
    }
  },
  {
    "id": 56,
    "name": "mankey",
    "types": [
      "fighting"
    ],
    "height": 5,
    "weight": 280,
    "base_experience": 61,
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "sp.-atk": 35,
      "sp.-def": 45,
      "speed": 70
    },
    "abilities": [
      {
        "name": "vital-spirit",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
    }
  },
  {
    "id": 57,
    "name": "primeape",
    "types": [
      "fighting"
    ],
    "height": 10,
    "weight": 320,
    "base_experience": 159,
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "sp.-atk": 60,
      "sp.-def": 70,
      "speed": 95
    },
    "abilities": [
      {
        "name": "vital-spirit",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
    }
  },
  {
    "id": 58,
    "name": "growlithe",
    "types": [
      "fire"
    ],
    "height": 7,
    "weight": 190,
    "base_experience": 70,
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "sp.-atk": 70,
      "sp.-def": 50,
      "speed": 60
    },
    "abilities": [
      {
        "name": "intimidate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "justified",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
    }
  },
  {
    "id": 59,
    "name": "arcanine",
    "types": [
      "fire"
    ],
    "height": 19,
    "weight": 1550,
    "base_experience": 194,
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "sp.-atk": 100,
      "sp.-def": 80,
      "speed": 95
    },
    "abilities": [
      {
        "name": "intimidate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "justified",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
    }
  },
  {
    "id": 60,
    "name": "poliwag",
    "types": [
      "water"
    ],
    "height": 6,
    "weight": 124,
    "base_experience": 60,
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "sp.-atk": 40,
      "sp.-def": 40,
      "speed": 90
    },
    "abilities": [
      {
        "name": "water-absorb",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
    }
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "types": [
      "water"
    ],
    "height": 10,
    "weight": 200,
    "base_experience": 135,
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "sp.-atk": 50,
      "sp.-def": 50,
      "speed": 90
    },
    "abilities": [
      {
        "name": "water-absorb",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
    }
  },
  {
    "id": 62,
    "name": "poliwrath",
    "types": [
      "water",
      "fighting"
    ],
    "height": 13,
    "weight": 540,
    "base_experience": 230,
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "sp.-atk": 70,
      "sp.-def": 90,
      "speed": 70
    },
    "abilities": [
      {
        "name": "water-absorb",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
    }
  },
  {
    "id": 63,
    "name": "abra",
    "types": [
      "psychic"
    ],
    "height": 9,
    "weight": 195,
    "base_experience": 62,
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "sp.-atk": 105,
      "sp.-def": 55,
      "speed": 90
    },
    "abilities": [
      {
        "name": "synchronize",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "magic-guard",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
    }
  },
  {
    "id": 64,
    "name": "kadabra",
    "types": [
      "psychic"
    ],
    "height": 13,
    "weight": 565,
    "base_experience": 140,
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "sp.-atk": 120,
      "sp.-def": 70,
      "speed": 105
    },
    "abilities": [
      {
        "name": "synchronize",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "magic-guard",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
    }
  },
  {
    "id": 65,
    "name": "alakazam",
    "types": [
      "psychic"
    ],
    "height": 15,
    "weight": 480,
    "base_experience": 225,
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "sp.-atk": 135,
      "sp.-def": 95,
      "speed": 120
    },
    "abilities": [
      {
        "name": "synchronize",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "magic-guard",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
    }
  },
  {
    "id": 66,
    "name": "machop",
    "types": [
      "fighting"
    ],
    "height": 8,
    "weight": 195,
    "base_experience": 61,
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "sp.-atk": 35,
      "sp.-def": 35,
      "speed": 35
    },
    "abilities": [
      {
        "name": "guts",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "no-guard",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
    }
  },
  {
    "id": 67,
    "name": "machoke",
    "types": [
      "fighting"
    ],
    "height": 15,
    "weight": 705,
    "base_experience": 142,
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "sp.-atk": 50,
      "sp.-def": 60,
      "speed": 45
    },
    "abilities": [
      {
        "name": "guts",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "no-guard",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
    }
  },
  {
    "id": 68,
    "name": "machamp",
    "types": [
      "fighting"
    ],
    "height": 16,
    "weight": 1300,
    "base_experience": 227,
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "sp.-atk": 65,
      "sp.-def": 85,
      "speed": 55
    },
    "abilities": [
      {
        "name": "guts",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "no-guard",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
    }
  },
  {
    "id": 69,
    "name": "bellsprout",
    "types": [
      "grass",
      "poison"
    ],
    "height": 7,
    "weight": 40,
    "base_experience": 60,
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "sp.-atk": 70,
      "sp.-def": 30,
      "speed": 40
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
    }
  },
  {
    "id": 70,
    "name": "weepinbell",
    "types": [
      "grass",
      "poison"
    ],
    "height": 10,
    "weight": 64,
    "base_experience": 137,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "sp.-atk": 85,
      "sp.-def": 45,
      "speed": 55
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
    }
  },
  {
    "id": 71,
    "name": "victreebel",
    "types": [
      "grass",
      "poison"
    ],
    "height": 17,
    "weight": 155,
    "base_experience": 221,
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "sp.-atk": 100,
      "sp.-def": 70,
      "speed": 70
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
    }
  },
  {
    "id": 72,
    "name": "tentacool",
    "types": [
      "water",
      "poison"
    ],
    "height": 9,
    "weight": 455,
    "base_experience": 67,
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "sp.-atk": 50,
      "sp.-def": 100,
      "speed": 70
    },
    "abilities": [
      {
        "name": "clear-body",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "liquid-ooze",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "rain-dish",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
    }
  },
  {
    "id": 73,
    "name": "tentacruel",
    "types": [
      "water",
      "poison"
    ],
    "height": 16,
    "weight": 550,
    "base_experience": 180,
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "sp.-atk": 80,
      "sp.-def": 120,
      "speed": 100
    },
    "abilities": [
      {
        "name": "clear-body",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "liquid-ooze",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "rain-dish",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
    }
  },
  {
    "id": 74,
    "name": "geodude",
    "types": [
      "rock",
      "ground"
    ],
    "height": 4,
    "weight": 200,
    "base_experience": 60,
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "sp.-atk": 30,
      "sp.-def": 30,
      "speed": 20
    },
    "abilities": [
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
    }
  },
  {
    "id": 75,
    "name": "graveler",
    "types": [
      "rock",
      "ground"
    ],
    "height": 10,
    "weight": 1050,
    "base_experience": 137,
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "sp.-atk": 45,
      "sp.-def": 45,
      "speed": 35
    },
    "abilities": [
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
    }
  },
  {
    "id": 76,
    "name": "golem",
    "types": [
      "rock",
      "ground"
    ],
    "height": 14,
    "weight": 3000,
    "base_experience": 223,
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "sp.-atk": 55,
      "sp.-def": 65,
      "speed": 45
    },
    "abilities": [
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
    }
  },
  {
    "id": 77,
    "name": "ponyta",
    "types": [
      "fire"
    ],
    "height": 10,
    "weight": 300,
    "base_experience": 82,
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "sp.-atk": 65,
      "sp.-def": 65,
      "speed": 90
    },
    "abilities": [
      {
        "name": "run-away",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "flame-body",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
    }
  },
  {
    "id": 78,
    "name": "rapidash",
    "types": [
      "fire"
    ],
    "height": 17,
    "weight": 950,
    "base_experience": 175,
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "sp.-atk": 80,
      "sp.-def": 80,
      "speed": 105
    },
    "abilities": [
      {
        "name": "run-away",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "flame-body",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
    }
  },
  {
    "id": 79,
    "name": "slowpoke",
    "types": [
      "water",
      "psychic"
    ],
    "height": 12,
    "weight": 360,
    "base_experience": 63,
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "sp.-atk": 40,
      "sp.-def": 40,
      "speed": 15
    },
    "abilities": [
      {
        "name": "oblivious",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
    }
  },
  {
    "id": 80,
    "name": "slowbro",
    "types": [
      "water",
      "psychic"
    ],
    "height": 16,
    "weight": 785,
    "base_experience": 172,
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "sp.-atk": 100,
      "sp.-def": 80,
      "speed": 30
    },
    "abilities": [
      {
        "name": "oblivious",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
    }
  },
  {
    "id": 81,
    "name": "magnemite",
    "types": [
      "electric",
      "steel"
    ],
    "height": 3,
    "weight": 60,
    "base_experience": 65,
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "sp.-atk": 95,
      "sp.-def": 55,
      "speed": 45
    },
    "abilities": [
      {
        "name": "magnet-pull",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
    }
  },
  {
    "id": 82,
    "name": "magneton",
    "types": [
      "electric",
      "steel"
    ],
    "height": 10,
    "weight": 600,
    "base_experience": 163,
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "sp.-atk": 120,
      "sp.-def": 70,
      "speed": 70
    },
    "abilities": [
      {
        "name": "magnet-pull",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
    }
  },
  {
    "id": 83,
    "name": "farfetchd",
    "types": [
      "normal",
      "flying"
    ],
    "height": 8,
    "weight": 150,
    "base_experience": 132,
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "sp.-atk": 58,
      "sp.-def": 62,
      "speed": 60
    },
    "abilities": [
      {
        "name": "keen-eye",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
    }
  },
  {
    "id": 84,
    "name": "doduo",
    "types": [
      "normal",
      "flying"
    ],
    "height": 14,
    "weight": 392,
    "base_experience": 62,
    "stats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "sp.-atk": 35,
      "sp.-def": 35,
      "speed": 75
    },
    "abilities": [
      {
        "name": "run-away",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "tangled-feet",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
    }
  },
  {
    "id": 85,
    "name": "dodrio",
    "types": [
      "normal",
      "flying"
    ],
    "height": 18,
    "weight": 852,
    "base_experience": 165,
    "stats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "sp.-atk": 60,
      "sp.-def": 60,
      "speed": 110
    },
    "abilities": [
      {
        "name": "run-away",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "tangled-feet",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
    }
  },
  {
    "id": 86,
    "name": "seel",
    "types": [
      "water"
    ],
    "height": 11,
    "weight": 900,
    "base_experience": 65,
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "sp.-atk": 45,
      "sp.-def": 70,
      "speed": 45
    },
    "abilities": [
      {
        "name": "thick-fat",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "ice-body",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
    }
  },
  {
    "id": 87,
    "name": "dewgong",
    "types": [
      "water",
      "ice"
    ],
    "height": 17,
    "weight": 1200,
    "base_experience": 166,
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "sp.-atk": 70,
      "sp.-def": 95,
      "speed": 70
    },
    "abilities": [
      {
        "name": "thick-fat",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "ice-body",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
    }
  },
  {
    "id": 88,
    "name": "grimer",
    "types": [
      "poison"
    ],
    "height": 9,
    "weight": 300,
    "base_experience": 65,
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "sp.-atk": 40,
      "sp.-def": 50,
      "speed": 25
    },
    "abilities": [
      {
        "name": "stench",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sticky-hold",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "poison-touch",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
    }
  },
  {
    "id": 89,
    "name": "muk",
    "types": [
      "poison"
    ],
    "height": 12,
    "weight": 300,
    "base_experience": 175,
    "stats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "sp.-atk": 65,
      "sp.-def": 100,
      "speed": 50
    },
    "abilities": [
      {
        "name": "stench",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sticky-hold",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "poison-touch",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
    }
  },
  {
    "id": 90,
    "name": "shellder",
    "types": [
      "water"
    ],
    "height": 3,
    "weight": 40,
    "base_experience": 61,
    "stats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "sp.-atk": 45,
      "sp.-def": 25,
      "speed": 40
    },
    "abilities": [
      {
        "name": "shell-armor",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "skill-link",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
    }
  },
  {
    "id": 91,
    "name": "cloyster",
    "types": [
      "water",
      "ice"
    ],
    "height": 15,
    "weight": 1325,
    "base_experience": 184,
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "sp.-atk": 85,
      "sp.-def": 45,
      "speed": 70
    },
    "abilities": [
      {
        "name": "shell-armor",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "skill-link",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
    }
  },
  {
    "id": 92,
    "name": "gastly",
    "types": [
      "ghost",
      "poison"
    ],
    "height": 13,
    "weight": 1,
    "base_experience": 62,
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "sp.-atk": 100,
      "sp.-def": 35,
      "speed": 80
    },
    "abilities": [
      {
        "name": "levitate",
        "is_hidden": false,
        "slot": 1
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
    }
  },
  {
    "id": 93,
    "name": "haunter",
    "types": [
      "ghost",
      "poison"
    ],
    "height": 16,
    "weight": 1,
    "base_experience": 142,
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "sp.-atk": 115,
      "sp.-def": 55,
      "speed": 95
    },
    "abilities": [
      {
        "name": "levitate",
        "is_hidden": false,
        "slot": 1
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
    }
  },
  {
    "id": 94,
    "name": "gengar",
    "types": [
      "ghost",
      "poison"
    ],
    "height": 15,
    "weight": 405,
    "base_experience": 225,
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "sp.-atk": 130,
      "sp.-def": 75,
      "speed": 110
    },
    "abilities": [
      {
        "name": "cursed-body",
        "is_hidden": false,
        "slot": 1
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
    }
  },
  {
    "id": 95,
    "name": "onix",
    "types": [
      "rock",
      "ground"
    ],
    "height": 88,
    "weight": 2100,
    "base_experience": 77,
    "stats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "sp.-atk": 30,
      "sp.-def": 45,
      "speed": 70
    },
    "abilities": [
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
    }
  },
  {
    "id": 96,
    "name": "drowzee",
    "types": [
      "psychic"
    ],
    "height": 10,
    "weight": 324,
    "base_experience": 66,
    "stats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "sp.-atk": 43,
      "sp.-def": 90,
      "speed": 42
    },
    "abilities": [
      {
        "name": "insomnia",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "forewarn",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
    }
  },
  {
    "id": 97,
    "name": "hypno",
    "types": [
      "psychic"
    ],
    "height": 16,
    "weight": 756,
    "base_experience": 169,
    "stats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "sp.-atk": 73,
      "sp.-def": 115,
      "speed": 67
    },
    "abilities": [
      {
        "name": "insomnia",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "forewarn",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
    }
  },
  {
    "id": 98,
    "name": "krabby",
    "types": [
      "water"
    ],
    "height": 4,
    "weight": 65,
    "base_experience": 65,
    "stats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "sp.-atk": 25,
      "sp.-def": 25,
      "speed": 50
    },
    "abilities": [
      {
        "name": "hyper-cutter",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
    }
  },
  {
    "id": 99,
    "name": "kingler",
    "types": [
      "water"
    ],
    "height": 13,
    "weight": 600,
    "base_experience": 166,
    "stats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "sp.-atk": 50,
      "sp.-def": 50,
      "speed": 75
    },
    "abilities": [
      {
        "name": "hyper-cutter",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
    }
  },
  {
    "id": 100,
    "name": "voltorb",
    "types": [
      "electric"
    ],
    "height": 5,
    "weight": 104,
    "base_experience": 66,
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "sp.-atk": 55,
      "sp.-def": 55,
      "speed": 100
    },
    "abilities": [
      {
        "name": "soundproof",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
    }
  },
  {
    "id": 101,
    "name": "electrode",
    "types": [
      "electric"
    ],
    "height": 12,
    "weight": 666,
    "base_experience": 172,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "sp.-atk": 80,
      "sp.-def": 80,
      "speed": 150
    },
    "abilities": [
      {
        "name": "soundproof",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
    }
  },
  {
    "id": 102,
    "name": "exeggcute",
    "types": [
      "grass",
      "psychic"
    ],
    "height": 4,
    "weight": 25,
    "base_experience": 65,
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "sp.-atk": 60,
      "sp.-def": 45,
      "speed": 40
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "harvest",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
    }
  },
  {
    "id": 103,
    "name": "exeggutor",
    "types": [
      "grass",
      "psychic"
    ],
    "height": 20,
    "weight": 1200,
    "base_experience": 186,
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "sp.-atk": 125,
      "sp.-def": 75,
      "speed": 55
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "harvest",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
    }
  },
  {
    "id": 104,
    "name": "cubone",
    "types": [
      "ground"
    ],
    "height": 4,
    "weight": 65,
    "base_experience": 64,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "sp.-atk": 40,
      "sp.-def": 50,
      "speed": 35
    },
    "abilities": [
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "battle-armor",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
    }
  },
  {
    "id": 105,
    "name": "marowak",
    "types": [
      "ground"
    ],
    "height": 10,
    "weight": 450,
    "base_experience": 149,
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "sp.-atk": 50,
      "sp.-def": 80,
      "speed": 45
    },
    "abilities": [
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "battle-armor",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
    }
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "types": [
      "fighting"
    ],
    "height": 15,
    "weight": 498,
    "base_experience": 159,
    "stats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "sp.-atk": 35,
      "sp.-def": 110,
      "speed": 87
    },
    "abilities": [
      {
        "name": "limber",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "reckless",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "unburden",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
    }
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "types": [
      "fighting"
    ],
    "height": 14,
    "weight": 502,
    "base_experience": 159,
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "sp.-atk": 35,
      "sp.-def": 110,
      "speed": 76
    },
    "abilities": [
      {
        "name": "keen-eye",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "iron-fist",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
    }
  },
  {
    "id": 108,
    "name": "lickitung",
    "types": [
      "normal"
    ],
    "height": 12,
    "weight": 655,
    "base_experience": 77,
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "sp.-atk": 60,
      "sp.-def": 75,
      "speed": 30
    },
    "abilities": [
      {
        "name": "own-tempo",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "cloud-nine",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
    }
  },
  {
    "id": 109,
    "name": "koffing",
    "types": [
      "poison"
    ],
    "height": 6,
    "weight": 10,
    "base_experience": 68,
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "sp.-atk": 60,
      "sp.-def": 45,
      "speed": 35
    },
    "abilities": [
      {
        "name": "levitate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "neutralizing-gas",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "stench",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
    }
  },
  {
    "id": 110,
    "name": "weezing",
    "types": [
      "poison"
    ],
    "height": 12,
    "weight": 95,
    "base_experience": 172,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "sp.-atk": 85,
      "sp.-def": 70,
      "speed": 60
    },
    "abilities": [
      {
        "name": "levitate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "neutralizing-gas",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "stench",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
    }
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "types": [
      "ground",
      "rock"
    ],
    "height": 10,
    "weight": 1150,
    "base_experience": 69,
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "sp.-atk": 30,
      "sp.-def": 30,
      "speed": 25
    },
    "abilities": [
      {
        "name": "lightning-rod",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "reckless",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
    }
  },
  {
    "id": 112,
    "name": "rhydon",
    "types": [
      "ground",
      "rock"
    ],
    "height": 19,
    "weight": 1200,
    "base_experience": 170,
    "stats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "sp.-atk": 45,
      "sp.-def": 45,
      "speed": 40
    },
    "abilities": [
      {
        "name": "lightning-rod",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "reckless",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
    }
  },
  {
    "id": 113,
    "name": "chansey",
    "types": [
      "normal"
    ],
    "height": 11,
    "weight": 346,
    "base_experience": 395,
    "stats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "sp.-atk": 35,
      "sp.-def": 105,
      "speed": 50
    },
    "abilities": [
      {
        "name": "natural-cure",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "serene-grace",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "healer",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
    }
  },
  {
    "id": 114,
    "name": "tangela",
    "types": [
      "grass"
    ],
    "height": 10,
    "weight": 350,
    "base_experience": 87,
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "sp.-atk": 100,
      "sp.-def": 40,
      "speed": 60
    },
    "abilities": [
      {
        "name": "chlorophyll",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
    }
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "types": [
      "normal"
    ],
    "height": 22,
    "weight": 800,
    "base_experience": 172,
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "sp.-atk": 40,
      "sp.-def": 80,
      "speed": 90
    },
    "abilities": [
      {
        "name": "early-bird",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
    }
  },
  {
    "id": 116,
    "name": "horsea",
    "types": [
      "water"
    ],
    "height": 4,
    "weight": 80,
    "base_experience": 59,
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "sp.-atk": 70,
      "sp.-def": 25,
      "speed": 60
    },
    "abilities": [
      {
        "name": "swift-swim",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
    }
  },
  {
    "id": 117,
    "name": "seadra",
    "types": [
      "water"
    ],
    "height": 12,
    "weight": 250,
    "base_experience": 154,
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "sp.-atk": 95,
      "sp.-def": 45,
      "speed": 85
    },
    "abilities": [
      {
        "name": "poison-point",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
    }
  },
  {
    "id": 118,
    "name": "goldeen",
    "types": [
      "water"
    ],
    "height": 6,
    "weight": 150,
    "base_experience": 64,
    "stats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "sp.-atk": 35,
      "sp.-def": 50,
      "speed": 63
    },
    "abilities": [
      {
        "name": "swift-swim",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "water-veil",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "lightning-rod",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
    }
  },
  {
    "id": 119,
    "name": "seaking",
    "types": [
      "water"
    ],
    "height": 13,
    "weight": 390,
    "base_experience": 158,
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "sp.-atk": 65,
      "sp.-def": 80,
      "speed": 68
    },
    "abilities": [
      {
        "name": "swift-swim",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "water-veil",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "lightning-rod",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
    }
  },
  {
    "id": 120,
    "name": "staryu",
    "types": [
      "water"
    ],
    "height": 8,
    "weight": 345,
    "base_experience": 68,
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "sp.-atk": 70,
      "sp.-def": 55,
      "speed": 85
    },
    "abilities": [
      {
        "name": "illuminate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "natural-cure",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
    }
  },
  {
    "id": 121,
    "name": "starmie",
    "types": [
      "water",
      "psychic"
    ],
    "height": 11,
    "weight": 800,
    "base_experience": 182,
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "sp.-atk": 100,
      "sp.-def": 85,
      "speed": 115
    },
    "abilities": [
      {
        "name": "illuminate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "natural-cure",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
    }
  },
  {
    "id": 122,
    "name": "mr-mime",
    "types": [
      "psychic",
      "fairy"
    ],
    "height": 13,
    "weight": 545,
    "base_experience": 161,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "sp.-atk": 100,
      "sp.-def": 120,
      "speed": 90
    },
    "abilities": [
      {
        "name": "soundproof",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "filter",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
    }
  },
  {
    "id": 123,
    "name": "scyther",
    "types": [
      "bug",
      "flying"
    ],
    "height": 15,
    "weight": 560,
    "base_experience": 100,
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "sp.-atk": 55,
      "sp.-def": 80,
      "speed": 105
    },
    "abilities": [
      {
        "name": "swarm",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
    }
  },
  {
    "id": 124,
    "name": "jynx",
    "types": [
      "ice",
      "psychic"
    ],
    "height": 14,
    "weight": 406,
    "base_experience": 159,
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "sp.-atk": 115,
      "sp.-def": 95,
      "speed": 95
    },
    "abilities": [
      {
        "name": "oblivious",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "forewarn",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "dry-skin",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
    }
  },
  {
    "id": 125,
    "name": "electabuzz",
    "types": [
      "electric"
    ],
    "height": 11,
    "weight": 300,
    "base_experience": 172,
    "stats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "sp.-atk": 95,
      "sp.-def": 85,
      "speed": 105
    },
    "abilities": [
      {
        "name": "static",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
    }
  },
  {
    "id": 126,
    "name": "magmar",
    "types": [
      "fire"
    ],
    "height": 13,
    "weight": 445,
    "base_experience": 173,
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "sp.-atk": 100,
      "sp.-def": 85,
      "speed": 93
    },
    "abilities": [
      {
        "name": "flame-body",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
    }
  },
  {
    "id": 127,
    "name": "pinsir",
    "types": [
      "bug"
    ],
    "height": 15,
    "weight": 550,
    "base_experience": 175,
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "sp.-atk": 55,
      "sp.-def": 70,
      "speed": 85
    },
    "abilities": [
      {
        "name": "hyper-cutter",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "mold-breaker",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "moxie",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
    }
  },
  {
    "id": 128,
    "name": "tauros",
    "types": [
      "normal"
    ],
    "height": 14,
    "weight": 884,
    "base_experience": 172,
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "sp.-atk": 40,
      "sp.-def": 70,
      "speed": 110
    },
    "abilities": [
      {
        "name": "intimidate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
    }
  },
  {
    "id": 129,
    "name": "magikarp",
    "types": [
      "water"
    ],
    "height": 9,
    "weight": 100,
    "base_experience": 40,
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "sp.-atk": 15,
      "sp.-def": 20,
      "speed": 80
    },
    "abilities": [
      {
        "name": "swift-swim",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "rattled",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
    }
  },
  {
    "id": 130,
    "name": "gyarados",
    "types": [
      "water",
      "flying"
    ],
    "height": 65,
    "weight": 2350,
    "base_experience": 189,
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "sp.-atk": 60,
      "sp.-def": 100,
      "speed": 81
    },
    "abilities": [
      {
        "name": "intimidate",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
    }
  },
  {
    "id": 131,
    "name": "lapras",
    "types": [
      "water",
      "ice"
    ],
    "height": 25,
    "weight": 2200,
    "base_experience": 187,
    "stats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "sp.-atk": 85,
      "sp.-def": 95,
      "speed": 60
    },
    "abilities": [
      {
        "name": "water-absorb",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "hydration",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
    }
  },
  {
    "id": 132,
    "name": "ditto",
    "types": [
      "normal"
    ],
    "height": 3,
    "weight": 40,
    "base_experience": 101,
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "sp.-atk": 48,
      "sp.-def": 48,
      "speed": 48
    },
    "abilities": [
      {
        "name": "limber",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "imposter",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    }
  },
  {
    "id": 133,
    "name": "eevee",
    "types": [
      "normal"
    ],
    "height": 3,
    "weight": 65,
    "base_experience": 65,
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "sp.-atk": 45,
      "sp.-def": 65,
      "speed": 55
    },
    "abilities": [
      {
        "name": "run-away",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "anticipation",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
    }
  },
  {
    "id": 134,
    "name": "vaporeon",
    "types": [
      "water"
    ],
    "height": 10,
    "weight": 290,
    "base_experience": 184,
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "sp.-atk": 110,
      "sp.-def": 95,
      "speed": 65
    },
    "abilities": [
      {
        "name": "water-absorb",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
    }
  },
  {
    "id": 135,
    "name": "jolteon",
    "types": [
      "electric"
    ],
    "height": 8,
    "weight": 245,
    "base_experience": 184,
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "sp.-atk": 110,
      "sp.-def": 95,
      "speed": 130
    },
    "abilities": [
      {
        "name": "volt-absorb",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "quick-feet",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
    }
  },
  {
    "id": 136,
    "name": "flareon",
    "types": [
      "fire"
    ],
    "height": 9,
    "weight": 250,
    "base_experience": 184,
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "sp.-atk": 95,
      "sp.-def": 110,
      "speed": 65
    },
    "abilities": [
      {
        "name": "flash-fire",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
    }
  },
  {
    "id": 137,
    "name": "porygon",
    "types": [
      "normal"
    ],
    "height": 8,
    "weight": 365,
    "base_experience": 79,
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "sp.-atk": 85,
      "sp.-def": 75,
      "speed": 40
    },
    "abilities": [
      {
        "name": "trace",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "download",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
    }
  },
  {
    "id": 138,
    "name": "omanyte",
    "types": [
      "rock",
      "water"
    ],
    "height": 4,
    "weight": 75,
    "base_experience": 71,
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "sp.-atk": 90,
      "sp.-def": 55,
      "speed": 35
    },
    "abilities": [
      {
        "name": "swift-swim",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
    }
  },
  {
    "id": 139,
    "name": "omastar",
    "types": [
      "rock",
      "water"
    ],
    "height": 10,
    "weight": 350,
    "base_experience": 173,
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "sp.-atk": 115,
      "sp.-def": 70,
      "speed": 55
    },
    "abilities": [
      {
        "name": "swift-swim",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
    }
  },
  {
    "id": 140,
    "name": "kabuto",
    "types": [
      "rock",
      "water"
    ],
    "height": 5,
    "weight": 115,
    "base_experience": 71,
    "stats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "sp.-atk": 55,
      "sp.-def": 45,
      "speed": 55
    },
    "abilities": [
      {
        "name": "swift-swim",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "battle-armor",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
    }
  },
  {
    "id": 141,
    "name": "kabutops",
    "types": [
      "rock",
      "water"
    ],
    "height": 13,
    "weight": 405,
    "base_experience": 173,
    "stats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "sp.-atk": 65,
      "sp.-def": 70,
      "speed": 80
    },
    "abilities": [
      {
        "name": "swift-swim",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "battle-armor",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
    }
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "types": [
      "rock",
      "flying"
    ],
    "height": 18,
    "weight": 590,
    "base_experience": 180,
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "sp.-atk": 60,
      "sp.-def": 75,
      "speed": 130
    },
    "abilities": [
      {
        "name": "rock-head",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "pressure",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
    }
  },
  {
    "id": 143,
    "name": "snorlax",
    "types": [
      "normal"
    ],
    "height": 21,
    "weight": 4600,
    "base_experience": 189,
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "sp.-atk": 65,
      "sp.-def": 110,
      "speed": 30
    },
    "abilities": [
      {
        "name": "immunity",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "thick-fat",
        "is_hidden": false,
        "slot": 2
      },
      {
        "name": "gluttony",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    }
  },
  {
    "id": 144,
    "name": "articuno",
    "types": [
      "ice",
      "flying"
    ],
    "height": 17,
    "weight": 554,
    "base_experience": 261,
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "sp.-atk": 95,
      "sp.-def": 125,
      "speed": 85
    },
    "abilities": [
      {
        "name": "pressure",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "snow-cloak",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
    }
  },
  {
    "id": 145,
    "name": "zapdos",
    "types": [
      "electric",
      "flying"
    ],
    "height": 16,
    "weight": 526,
    "base_experience": 261,
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "sp.-atk": 125,
      "sp.-def": 90,
      "speed": 100
    },
    "abilities": [
      {
        "name": "pressure",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
    }
  },
  {
    "id": 146,
    "name": "moltres",
    "types": [
      "fire",
      "flying"
    ],
    "height": 20,
    "weight": 600,
    "base_experience": 261,
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "sp.-atk": 125,
      "sp.-def": 85,
      "speed": 90
    },
    "abilities": [
      {
        "name": "pressure",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
    }
  },
  {
    "id": 147,
    "name": "dratini",
    "types": [
      "dragon"
    ],
    "height": 18,
    "weight": 33,
    "base_experience": 60,
    "stats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "sp.-atk": 50,
      "sp.-def": 50,
      "speed": 50
    },
    "abilities": [
      {
        "name": "shed-skin",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "marvel-scale",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
    }
  },
  {
    "id": 148,
    "name": "dragonair",
    "types": [
      "dragon"
    ],
    "height": 40,
    "weight": 165,
    "base_experience": 147,
    "stats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "sp.-atk": 70,
      "sp.-def": 70,
      "speed": 70
    },
    "abilities": [
      {
        "name": "shed-skin",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "marvel-scale",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
    }
  },
  {
    "id": 149,
    "name": "dragonite",
    "types": [
      "dragon",
      "flying"
    ],
    "height": 22,
    "weight": 2100,
    "base_experience": 270,
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "sp.-atk": 100,
      "sp.-def": 100,
      "speed": 80
    },
    "abilities": [
      {
        "name": "inner-focus",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "multiscale",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
    }
  },
  {
    "id": 150,
    "name": "mewtwo",
    "types": [
      "psychic"
    ],
    "height": 20,
    "weight": 1220,
    "base_experience": 306,
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "sp.-atk": 154,
      "sp.-def": 90,
      "speed": 130
    },
    "abilities": [
      {
        "name": "pressure",
        "is_hidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    }
  },
  {
    "id": 151,
    "name": "mew",
    "types": [
      "psychic"
    ],
    "height": 4,
    "weight": 40,
    "base_experience": 270,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "sp.-atk": 100,
      "sp.-def": 100,
      "speed": 100
    },
    "abilities": [
      {
        "name": "synchronize",
        "is_hidden": false,
        "slot": 1
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
    }
  }
];

// Helper function to get Pokemon by ID
function getPokemonById(id) {
    return POKEMON_DATABASE.find(pokemon => pokemon.id === id);
}

// Helper function to get Pokemon by name
function getPokemonByName(name) {
    return POKEMON_DATABASE.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
}

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { POKEMON_DATABASE, getPokemonById, getPokemonByName };
}
