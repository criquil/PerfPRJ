import pytest
from playwright.sync_api import APIRequestContext

@pytest.mark.parametrize("page, expected_count_min", [
    (1, 20),
    (2, 20)
])
def test_get_episodes_pagination(api_request_context: APIRequestContext, page: int, expected_count_min: int) -> None:
    """
    Test GET /episodes with pagination.
    """
    response = api_request_context.get("episodes", params={"page": page})
    assert response.ok
    
    data = response.json()
    assert len(data["results"]) > 0
    if page == 1:
         assert data["count"] >= expected_count_min

@pytest.mark.parametrize("ep_id, expected_name, expected_season", [
    (1, "Simpsons Roasting on an Open Fire", 1),
    (10, "Homer's Night Out", 1),
    (12, "Krusty Gets Busted", 1)
])
def test_get_episode_by_id(api_request_context: APIRequestContext, ep_id: int, expected_name: str, expected_season: int) -> None:
    """
    Test GET /episodes/{id} for specific episodes.
    """
    response = api_request_context.get(f"episodes/{ep_id}")
    assert response.ok
    
    data = response.json()
    assert data["id"] == ep_id
    assert data["name"] == expected_name
    assert data["season"] == expected_season
    assert "synopsis" in data

def test_episode_schema_validation(api_request_context: APIRequestContext) -> None:
    """
    Validate the schema of an episode object.
    """
    response = api_request_context.get("episodes/1")
    assert response.ok
    episode = response.json()
    
    assert isinstance(episode["id"], int)
    assert isinstance(episode["name"], str)
    assert isinstance(episode["season"], int)
    assert isinstance(episode["episode_number"], int)
    assert isinstance(episode["airdate"], str)
    assert isinstance(episode["synopsis"], str)
    
    # Image check
    assert episode["image_path"].startswith("/")
