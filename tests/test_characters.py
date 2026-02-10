import pytest
from playwright.sync_api import APIRequestContext

@pytest.mark.parametrize("page, expected_count_min", [
    (1, 100),
    (2, 20)
])
def test_get_characters_pagination(api_request_context: APIRequestContext, page: int, expected_count_min: int) -> None:
    """
    Test GET /characters with pagination.
    """
    response = api_request_context.get("characters", params={"page": page})
    assert response.ok
    
    data = response.json()
    assert "results" in data
    assert "pages" in data
    assert len(data["results"]) > 0
    if page == 1:
         assert data["count"] > expected_count_min

@pytest.mark.parametrize("char_id, expected_name", [
    (1, "Homer Simpson"),
    (2, "Marge Simpson"),
    (15, "Krusty the Clown")
])
def test_get_character_by_id(api_request_context: APIRequestContext, char_id: int, expected_name: str) -> None:
    """
    Test GET /characters/{id} for specific characters.
    """
    response = api_request_context.get(f"characters/{char_id}")
    assert response.ok
    
    data = response.json()
    assert data["id"] == char_id
    assert data["name"] == expected_name
    assert "portrait_path" in data
    assert data["gender"] in ["Male", "Female"]

@pytest.mark.parametrize("char_id", [999999, -1])
def test_get_character_not_found(api_request_context: APIRequestContext, char_id: int) -> None:
    """
    Test GET /characters/{id} with invalid IDs. 
    Note: API implementation details for errors are unknown, asserting 404 or empty/error response.
    """
    response = api_request_context.get(f"characters/{char_id}")
    # Based on standard REST conventions, but need to verify actual behavior. 
    # If API returns 200 with error, this assertion might need adjustment.
    # We will assume 404 or specific error message for now.
    assert response.status == 404 or "error" in response.text().lower()

def test_character_schema_validation(api_request_context: APIRequestContext) -> None:
    """
    Validate the schema of a character object against the spec.
    """
    response = api_request_context.get("characters/1")
    assert response.ok
    character = response.json()
    
    # Required fields
    assert isinstance(character["id"], int)
    assert isinstance(character["name"], str)
    assert isinstance(character["occupation"], str)
    assert isinstance(character["portrait_path"], str)
    assert isinstance(character["status"], str)
    
    # Nullable fields
    assert character["age"] is None or isinstance(character["age"], int)
    assert character["birthdate"] is None or isinstance(character["birthdate"], str)
    
    # URL construction check
    assert character["portrait_path"].startswith("/")
    full_image_url = f"https://cdn.thesimpsonsapi.com/500{character['portrait_path']}"
    # Verify image is reachable (HEAD request)
    img_response = api_request_context.head(full_image_url)
    assert img_response.ok

