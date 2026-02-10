# The Simpsons API Documentation

**Base URL**: `https://thesimpsonsapi.com/api`

This document outlines the available APIs, their usage, and related subdomains discovered at [thesimpsonsapi.com](https://thesimpsonsapi.com/).

## available Endpoints

The API is open (public) and does not require authentication. It returns data in JSON format.

### 1. Characters with pagination
Retrieves a list of characters or a specific character.

- **List Characters**: `GET /characters`
- **Specific Character**: `GET /characters/{id}`
- **Pagination**: Supports `?page={n}` query parameter. Default page size is 20.

**Example Usage:**
```bash
# Get all characters (page 1)
curl https://thesimpsonsapi.com/api/characters

# Get page 2
curl https://thesimpsonsapi.com/api/characters?page=2

# Get Homer Simpson (ID 1)
curl https://thesimpsonsapi.com/api/characters/1
```

### 2. Episodes
Retrieves a list of episodes or a specific episode.

- **List Episodes**: `GET /episodes`
- **Specific Episode**: `GET /episodes/{id}`
- **Pagination**: Supports `?page={n}` query parameter.

**Example Usage:**
```bash
# Get all episodes
curl https://thesimpsonsapi.com/api/episodes

# Get specific episode
curl https://thesimpsonsapi.com/api/episodes/1
```

### 3. Locations
Retrieves a list of locations or a specific location.

- **List Locations**: `GET /locations`
- **Specific Location**: `GET /locations/{id}`
- **Pagination**: Supports `?page={n}` query parameter.

**Example Usage:**
```bash
# Get all locations
curl https://thesimpsonsapi.com/api/locations
```

## Subdomains & Assets

### CDN (Images)
Images for characters, episodes, and locations are served from `cdn.thesimpsonsapi.com`.

- **URL Pattern**: `https://cdn.thesimpsonsapi.com/{size}/{type}/{id}.webp`
- **Sizes**: `200`, `500`, `1280`
- **Types**: `character`, `episode` (assumed based on pattern), `location` (assumed)

**Example:**
[Homer Simpson (500px)](https://cdn.thesimpsonsapi.com/500/character/1.webp)

### Status Page
Service status can be checked at: [status.thesimpsonsapi.com](https://status.thesimpsonsapi.com/)

## Additional Info
- **Tech Stack**: Hono, AWS Lambda, PostgreSQL, Next.js.
- **Source Code**: [GitHub Repository](https://github.com/Facug03/the-simpsons-api)
