# JMeter Test Suite - The Simpsons API

This directory contains JMeter test plans for The Simpsons API.

## Prerequisites

- Apache JMeter 5.6+ installed
- Download from: https://jmeter.apache.org/download_jmeter.cgi

## Test Plan Overview

**File**: `the_simpsons_api.jmx`

The test plan includes three thread groups mirroring the Playwright tests:

### 1. Characters API Tests
- Get Characters - Page 1 (with pagination)
- Get Character - Homer Simpson (ID 1)
- Get Character - Marge Simpson (ID 2)

### 2. Episodes API Tests
- Get Episodes - Page 1
- Get Episode - ID 1 (with name validation)

### 3. Locations API Tests
- Get Locations - Page 1
- Get Location - Kwik-E-Mart (ID 4)

## Running the Tests

### GUI Mode (Recommended for Development)
```bash
jmeter -t the_simpsons_api.jmx
```

Then click the green "Start" button (▶) to run the tests.

### CLI Mode (For CI/CD)
```bash
jmeter -n -t the_simpsons_api.jmx -l results.jtl -e -o report/
```

This will:
- Run tests in non-GUI mode (`-n`)
- Use the test plan (`-t`)
- Save results to `results.jtl` (`-l`)
- Generate HTML report in `report/` directory (`-e -o`)

## Viewing Results

### In GUI Mode
- **View Results Tree**: See individual request/response details
- **Summary Report**: See aggregated statistics

### In CLI Mode
Open `report/index.html` in a browser to view the HTML dashboard.

## Test Assertions

Each request includes:
- **Response Code Assertion**: Validates HTTP 200 status
- **JSON Path Assertions**: Validates specific response fields (e.g., character names)

## Customization

To modify the test plan:
1. Open JMeter GUI
2. Load `the_simpsons_api.jmx`
3. Edit thread groups, samplers, or assertions
4. Save the file

## Notes

- All tests use HTTPS protocol
- Base URL is configured as a variable: `${BASE_URL}` = `thesimpsonsapi.com`
- Tests run sequentially (1 thread, 1 iteration per thread group)
