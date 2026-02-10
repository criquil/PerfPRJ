import pytest
from playwright.sync_api import Playwright, APIRequestContext

@pytest.fixture(scope="session")
def api_request_context(playwright: Playwright) -> APIRequestContext:
    return playwright.request.new_context(
        base_url="https://thesimpsonsapi.com/api/"
    )
