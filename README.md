# Pokédex Tracker

A self-hosted web application for tracking your Pokémon collection using the PokéAPI.

## Features

- **Complete Pokédex**: Browse all 151 original Pokémon
- **Tracking System**: Mark Pokémon as caught, seen, or not seen
- **Persistent Storage**: Your progress is saved in browser localStorage
- **Search & Filter**: Find Pokémon by name, ID, type, or status
- **Responsive Design**: Works on desktop and mobile devices
- **Docker Support**: Easy deployment with Docker

## Quick Start

### Using Docker

1. Clone or download this repository
2. Make sure Docker is running on your system
3. Build and run with Docker Compose:

```bash
docker-compose up --build
```

4. Open your browser and go to `http://localhost:8080`

### Manual Build

```bash
# Build the Docker image
docker build -t pokedex-tracker .

# Run the container
docker run -p 8080:80 pokedex-tracker
```

### Local Development

Simply open `index.html` in your web browser. No server required!

## Usage

1. **Browse Pokémon**: Scroll through the grid to see all Pokémon
2. **Track Status**: Click the status buttons on each card:
   - **Caught**: You own this Pokémon
   - **Seen**: You've encountered this Pokémon
   - **Not Seen**: You haven't seen this Pokémon yet
3. **Search**: Use the search bar to find specific Pokémon by name or number
4. **Filter**: Use the dropdown filters to show only certain types or statuses
5. **View Progress**: Check your collection stats at the top of the page

## Technical Details

- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **API**: PokéAPI (https://pokeapi.co)
- **Storage**: Browser localStorage for persistence
- **Deployment**: Nginx in Docker container

## File Structure

```
pokedex-tracker/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose setup
├── .dockerignore       # Docker ignore file
└── README.md           # This file
```

## Browser Compatibility

Works with all modern browsers that support:
- ES6+ JavaScript
- CSS Grid
- Local Storage
- Fetch API

## Contributing

Feel free to submit issues and enhancement requests!