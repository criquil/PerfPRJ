import pytest
from playwright.sync_api import APIRequestContext

@pytest.mark.parametrize("page", [1, 2])
def test_get_locations_pagination(api_request_context: APIRequestContext, page: int) -> None:
    """
    Test GET /locations with pagination.
    """
    response = api_request_context.get("locations", params={"page": page})
    assert response.ok
    
    data = response.json()
    assert len(data["results"]) > 0

@pytest.mark.parametrize("loc_id, expected_name", [
    (1, "742 Evergreen Terrace"),
    (4, "Kwik-E-Mart"),
    (5, "Moe's Tavern")
])
def test_get_location_by_id(api_request_context: APIRequestContext, loc_id: int, expected_name: str) -> None:
    """
    Test GET /locations/{id}.
    """
    response = api_request_context.get(f"locations/{loc_id}")
    assert response.ok
    
    data = response.json()
    assert data["id"] == loc_id
    assert data["name"] == expected_name
    assert "town" in data
    assert "use" in data

def test_location_schema_validation(api_request_context: APIRequestContext) -> None:
    """
    Validate the schema of a location object.
    """
    response = api_request_context.get("locations/1")
    assert response.ok
    location = response.json()
    
    assert isinstance(location["id"], int)
    assert isinstance(location["name"], str)
    assert isinstance(location["town"], str)
    assert isinstance(location["use"], str)
    assert isinstance(location["image_path"], str)
