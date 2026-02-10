# The Simpsons API Specification

**Version**: 1.0 (Derived)
**Base URL**: `https://thesimpsonsapi.com/api`

This specification is reverse-engineered for testing purposes. All endpoints return JSON and are public.

## Common Definitions

### Pagination Object
All list endpoints return a pagination wrapper.

| Field | Type | Nullable | Description |
| :--- | :--- | :--- | :--- |
| `count` | Integer | No | Total number of items available. |
| `next` | String (URL) | Yes | URL for the next page of results. |
| `prev` | String (URL) | Yes | URL for the previous page of results. |
| `pages` | Integer | No | Total number of pages. |
| `results` | Array | No | List of resource objects. |

---

## Endpoints

### 1. Characters (`/characters`)

#### GET `/characters`
list all characters with pagination.

**Query Parameters:**
- `page` (int, voluntary): Page number (default: 1).

**Response Schema (Item in `results`):**

| Field | Type | Nullable | Description |
| :--- | :--- | :--- | :--- |
| `id` | Integer | No | Unique identifier. |
| `age` | Integer | **Yes** | Age of the character. Can be null (e.g., Abe Simpson). |
| `birthdate` | String | **Yes** | Format: `YYYY-MM-DD`. Can be null. |
| `gender` | String | No | e.g., "Male", "Female". |
| `name` | String | No | Full name of the character. |
| `occupation` | String | No | Character's job/role. |
| `portrait_path` | String | No | Relative path. Prepend `https://cdn.thesimpsonsapi.com/500` to view. |
| `phrases` | Array<String> | No | List of catchphrases. Can be empty. |
| `status` | String | No | Living status (e.g., "Alive", "Deceased"). |

**Example JSON Object:**
```json
{
  "id": 1,
  "age": 39,
  "birthdate": "1956-05-12",
  "gender": "Male",
  "name": "Homer Simpson",
  "occupation": "Safety Inspector",
  "portrait_path": "/character/1.webp",
  "phrases": ["Doh!", "Woo-hoo!"],
  "status": "Alive"
}
```

---

### 2. Episodes (`/episodes`)

#### GET `/episodes`
List all episodes with pagination.

**Query Parameters:**
- `page` (int, voluntary): Page number.

**Response Schema (Item in `results`):**

| Field | Type | Nullable | Description |
| :--- | :--- | :--- | :--- |
| `id` | Integer | No | Unique identifier. |
| `airdate` | String | No | Format: `YYYY-MM-DD`. **Note**: Can be an empty string `""` if unknown. |
| `episode_number` | Integer | No | Episode number within the season (or absolute, check context). |
| `image_path` | String | No | Relative path to episode thumbnail. |
| `name` | String | No | Title of the episode. |
| `season` | Integer | No | Season number. |
| `synopsis` | String | No | Description of the plot. |

**Example JSON Object:**
```json
{
  "id": 1,
  "airdate": "1989-12-17",
  "episode_number": 1,
  "image_path": "/episode/1.webp",
  "name": "Simpsons Roasting on an Open Fire",
  "season": 1,
  "synopsis": "When Mr. Burns announces..."
}
```

---

### 3. Locations (`/locations`)

#### GET `/locations`
List all locations.

**Query Parameters:**
- `page` (int, voluntary): Page number.

**Response Schema (Item in `results`):**

| Field | Type | Nullable | Description |
| :--- | :--- | :--- | :--- |
| `id` | Integer | No | Unique identifier. |
| `name` | String | No | Name of the location. |
| `image_path` | String | No | Relative path to location image. |
| `town` | String | No | Town name (e.g., "Springfield"). Can be empty. |
| `use` | String | No | Usage (e.g., "Education", "Bar"). |

**Example JSON Object:**
```json
{
  "id": 4,
  "name": "Kwik-E-Mart",
  "image_path": "/location/4.webp",
  "town": "Springfield",
  "use": "Convenience Store"
}
```

## Image Assets Construction
Images are not provided as full URLs in the API. They must be constructed using the CDN.

**Template:** `https://cdn.thesimpsonsapi.com/{size}{path}`

- **Sizes**: `200`, `500`, `1280` (pixels width)
- **Path**: The value from `portrait_path`, `image_path`.

**Example:**
- API path: `/character/1.webp`
- Full URL: `https://cdn.thesimpsonsapi.com/500/character/1.webp`
