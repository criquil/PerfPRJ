# API Test Documentation

This document details the Playwright API test suite for The Simpsons API.

**Test Suite location:** `tests/`
**Run command:** `pytest`

## 1. Characters API (`test_characters.py`)

### Test Case: `test_get_characters_pagination`
- **Goal**: Verify pagination logic and data response structure.
- **Inputs**: `page=1` (min 100 items), `page=2` (exactly 20 items usually).
- **Validation**:
  - Status 200.
  - JSON contains `results`, `pages`, `count`.
  - `results` is non-empty.

### Test Case: `test_get_character_by_id`
- **Goal**: Verify retrieval of specific characters.
- **Inputs**:
  - ID 1 -> "Homer Simpson"
  - ID 2 -> "Marge Simpson"
  - ID 15 -> "Krusty the Clown"
- **Validation**:
  - Status 200.
  - ID and Name match expected values.
  - `portrait_path` exists.
  - `gender` is valid.

### Test Case: `test_get_character_not_found`
- **Goal**: Verify error handling for invalid IDs.
- **Inputs**: ID 999999, -1.
- **Validation**: Status 404 OR Error message present.

### Test Case: `test_character_schema_validation`
- **Goal**: Strict type checking against the API Spec.
- **Validation**:
  - `id` (int), `name` (str), `status` (str).
  - Nullable checks: `age`, `birthdate`.
  - Image URL construction is valid and reachable (HEAD 200).

---

## 2. Episodes API (`test_episodes.py`)

### Test Case: `test_get_episodes_pagination`
- **Goal**: Verify pagination.
- **Inputs**: Page 1, Page 2.
- **Validation**: Status 200, results exist.

### Test Case: `test_get_episode_by_id`
- **Goal**: Verify specific episode data.
- **Inputs**:
  - ID 1 -> "Simpsons Roasting on an Open Fire" (Season 1)
  - ID 10 -> "Homer's Night Out" (Season 1)
- **Validation**: Name, Season, and ID match. `synopsis` exists.

### Test Case: `test_episode_schema_validation`
- **Goal**: Strict type checking.
- **Validation**:
  - `airdate` (string), `episode_number` (int).
  - Image path format check.

---

## 3. Locations API (`test_locations.py`)

### Test Case: `test_get_locations_pagination`
- **Goal**: Verify pagination.
- **Inputs**: Page 1, Page 2.
- **Validation**: Status 200, results exist.

### Test Case: `test_get_location_by_id`
- **Goal**: Verify specific locations.
- **Inputs**:
  - ID 1 -> "742 Evergreen Terrace"
  - ID 4 -> "Kwik-E-Mart"
- **Validation**: Name, Town, Use fields match.

### Test Case: `test_location_schema_validation`
- **Goal**: Strict type checking.
- **Validation**:
  - `town` (str), `use` (str).
