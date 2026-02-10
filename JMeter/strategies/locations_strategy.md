# Performance Test Strategy - Locations API

## API Overview
- **Endpoint**: `/api/locations`
- **Methods**: GET (list with pagination), GET by ID
- **Base URL**: `https://thesimpsonsapi.com/api`
- **Response Format**: JSON
- **Total Locations**: 477 (24 pages)

---

## Performance Test Strategies

### 0. Baseline Testing
**Objective**: Establish the fastest possible response benchmarks for this lightweight endpoint.

**Test Configuration**:
- **Users**: 10 concurrent users
- **Duration**: 30 minutes
- **Ramp-up**: 2 minutes
- **Think Time**: 3 seconds

**Test Scenarios**:
- Mixed requests: 45% Page 1, 30% Random pages, 25% Location details.

**Rationale**: Locations are the lightest resources; the baseline helps set the "speed floor" for the entire API infrastructure.

**JMX File**: `baseline_locations.jmx`

### 1. Load Testing
**Objective**: Assess performance under typical user traffic patterns.

**Test Configuration**:
- **Users**: 30 concurrent users
- **Duration**: 12 minutes
- **Ramp-up**: 2 minutes
- **Think Time**: 2-4 seconds

**Test Scenarios**:
- 50% GET `/locations?page={random}` (pages 1-24)
- 40% GET `/locations/{id}` (IDs 1-100)
- 10% GET `/locations` (first page)

**Success Criteria**:
- Response time < 1 second (95th percentile)
- Error rate < 0.5%
- Throughput ≥ 60 requests/second

**Rationale**: Locations API has smaller dataset (477 items) and simpler response structure, expecting faster response times.

---

### 2. Stress Testing
**Objective**: Identify system limits and breaking points.

**Test Configuration**:
- **Users**: Start at 50, increment by 40 every 4 minutes
- **Maximum**: 350 users or until failure
- **Duration**: Variable (until breaking point)
- **Think Time**: 1 second

**Test Scenarios**:
- 80% GET `/locations?page=1` (most requested page)
- 20% GET `/locations/{random_id}` (IDs 1-477)

**Success Criteria**:
- Identify maximum sustainable load
- System recovers within 90 seconds after load reduction
- No data corruption or service crashes

**Key Observations**:
- Response time degradation curve
- Error rate threshold
- Connection pool exhaustion point

---

### 3. Endurance/Soak Testing
**Objective**: Verify long-term stability and resource management.

**Test Configuration**:
- **Users**: 20 concurrent users (moderate sustained load)
- **Duration**: 8 hours
- **Ramp-up**: 3 minutes
- **Think Time**: 4-8 seconds

**Test Scenarios**:
- 45% GET `/locations?page={random}` (pages 1-24)
- 45% GET `/locations/{random_id}` (IDs 1-477)
- 10% GET `/locations?page=1`

**Success Criteria**:
- Response time remains stable (variance < 15%)
- No memory leaks detected
- Error rate < 0.2%
- No connection pool leaks

**Monitoring Strategy**:
- Hourly response time snapshots
- Resource utilization trends
- Connection count stability
- Cache effectiveness (if observable)

---

### 4. Spike Testing
**Objective**: Test system behavior during sudden traffic surges.

**Test Configuration**:
- **Baseline**: 10 users for 4 minutes
- **Spike**: Jump to 180 users instantly
- **Spike Duration**: 2 minutes
- **Recovery**: Drop to 10 users
- **Cycles**: 5 spike cycles with 3-minute intervals

**Test Scenarios**:
- During spike: 100% GET `/locations?page=1` (simulating viral content)
- During baseline: Mixed requests

**Success Criteria**:
- Zero downtime during spikes
- Response time < 4 seconds during spike
- Recovery to baseline performance within 60 seconds
- No cascading failures

**Real-World Scenario**: Simulates traffic from social media mentions or featured content.

---

### 5. Scalability Testing
**Objective**: Measure scaling efficiency and identify scaling limits.

**Test Configuration**:
- **Phase 1**: 15 users, 6 minutes
- **Phase 2**: 30 users, 6 minutes
- **Phase 3**: 60 users, 6 minutes
- **Phase 4**: 120 users, 6 minutes
- **Phase 5**: 240 users, 6 minutes
- **Ramp-up**: 1 minute per phase

**Test Scenarios**:
- 40% GET `/locations?page={random}`
- 40% GET `/locations/{random_id}`
- 20% GET `/locations` (no pagination)

**Success Criteria**:
- Linear scalability up to 120 users
- Response time increase < 40% when doubling users
- Throughput scales proportionally
- Error rate remains < 1%

**Deliverables**:
- Scalability curve graph
- Cost per request at different scales
- Optimal scaling threshold recommendation

---

## Performance Test Reports Template

### Test Summary
| Attribute | Value |
|-----------|-------|
| Test Type | [Load/Stress/Endurance/Spike/Scalability] |
| Test Date | YYYY-MM-DD HH:MM |
| Test Duration | X hours Y minutes |
| Total Requests | X |
| Successful Requests | X |
| Failed Requests | X |
| Overall Status | ✅ PASS / ❌ FAIL |

### Test Configuration Details
- **API Endpoint**: `/api/locations`
- **Concurrent Users**: X
- **Ramp-up Period**: X seconds
- **Test Duration**: X seconds
- **Think Time**: X-Y seconds
- **JMeter Version**: 5.6.3
- **Test Plan**: `locations_[test_type].jmx`

### Performance Results
| Metric | Target | Actual | Status | Notes |
|--------|--------|--------|--------|-------|
| Avg Response Time | < 800ms | X ms | ✅/❌ | |
| Median Response Time | < 600ms | X ms | ✅/❌ | |
| 90th Percentile | < 1000ms | X ms | ✅/❌ | |
| 95th Percentile | < 1200ms | X ms | ✅/❌ | |
| 99th Percentile | < 2500ms | X ms | ✅/❌ | |
| Max Response Time | < 8000ms | X ms | ✅/❌ | |
| Min Response Time | - | X ms | ℹ️ | |
| Throughput | ≥ 60 req/s | X req/s | ✅/❌ | |
| Error Rate | < 0.5% | X% | ✅/❌ | |
| Std Deviation | - | X ms | ℹ️ | |

### Response Time Distribution
```
0-200ms:    ████████████ X%
200-500ms:  ████████ X%
500-1000ms: ████ X%
1000-2000ms: ██ X%
2000ms+:    █ X%
```

### Throughput Analysis
| Time Period | Avg Throughput | Peak Throughput | Min Throughput |
|-------------|----------------|-----------------|----------------|
| 0-3 min | X req/s | X req/s | X req/s |
| 3-6 min | X req/s | X req/s | X req/s |
| 6-9 min | X req/s | X req/s | X req/s |
| 9-12 min | X req/s | X req/s | X req/s |

### Error Analysis
**Total Errors**: X (X%)

| Error Type | Count | Percentage | Sample Message |
|------------|-------|------------|----------------|
| HTTP 500 | X | X% | Internal Server Error |
| HTTP 503 | X | X% | Service Unavailable |
| Timeout | X | X% | Read timeout |
| Connection Error | X | X% | Connection refused |

### Request Distribution
| Endpoint | Requests | Success | Failed | Avg RT |
|----------|----------|---------|--------|--------|
| GET /locations | X | X | X | X ms |
| GET /locations?page=X | X | X | X | X ms |
| GET /locations/{id} | X | X | X | X ms |

### Performance Trends
**Response Time Over Time**:
- Trend: ↗️ Increasing / ↘️ Decreasing / → Stable
- Pattern: [Describe any patterns observed]

**Throughput Over Time**:
- Trend: ↗️ Increasing / ↘️ Decreasing / → Stable
- Pattern: [Describe any patterns observed]

### Required Graphs
1. **Response Time Over Time** (line chart)
2. **Throughput Over Time** (line chart)
3. **Active Users Over Time** (area chart)
4. **Error Rate Over Time** (line chart)
5. **Response Time Distribution** (histogram)
6. **Response Time Percentiles** (box plot)

### Bottlenecks Identified
1. **[Bottleneck Name]**
   - **Impact**: [Description]
   - **Observed At**: X users / X req/s
   - **Recommendation**: [Solution]

2. **[Bottleneck Name]**
   - **Impact**: [Description]
   - **Observed At**: X users / X req/s
   - **Recommendation**: [Solution]

### Performance Issues
- [ ] Response time degradation
- [ ] High error rate
- [ ] Throughput plateau
- [ ] Memory leaks
- [ ] Connection pool exhaustion
- [ ] Database bottleneck
- [ ] Network latency

### Recommendations

#### Immediate Actions (Priority: High)
1. [Action item with expected impact]
2. [Action item with expected impact]

#### Short-term Improvements (Priority: Medium)
1. [Optimization suggestion]
2. [Configuration tuning]

#### Long-term Strategy (Priority: Low)
1. [Architecture changes]
2. [Infrastructure scaling]

### Conclusion
[Summary of test results, key findings, and overall assessment]

---

## JMeter Implementation Guide

### Thread Group Setup
```xml
<ThreadGroup>
  <stringProp name="ThreadGroup.num_threads">30</stringProp>
  <stringProp name="ThreadGroup.ramp_time">120</stringProp>
  <stringProp name="ThreadGroup.duration">720</stringProp>
  <boolProp name="ThreadGroup.scheduler">true</boolProp>
  <elementProp name="ThreadGroup.main_controller" elementType="LoopController">
    <boolProp name="LoopController.continue_forever">false</boolProp>
    <intProp name="LoopController.loops">-1</intProp>
  </elementProp>
</ThreadGroup>
```

### CSV Data Files

**location_ids.csv**:
```
id
1
4
5
10
50
100
200
477
```

**location_pages.csv**:
```
page
1
5
10
15
20
24
```

### Listeners to Add
- Summary Report
- View Results Tree (for debugging only)
- Aggregate Report
- Response Time Graph
- Transactions per Second

### Assertions
```xml
<ResponseAssertion>
  <collectionProp name="Asserion.test_strings">
    <stringProp>200</stringProp>
  </collectionProp>
  <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
</ResponseAssertion>

<JSONPathAssertion>
  <stringProp name="JSON_PATH">$.results</stringProp>
  <boolProp name="JSONVALIDATION">false</boolProp>
  <boolProp name="EXPECT_NULL">false</boolProp>
</JSONPathAssertion>

<DurationAssertion>
  <stringProp name="DurationAssertion.duration">3000</stringProp>
</DurationAssertion>
```

### Command Line Execution
```bash
# Load Test
jmeter -n -t locations_load.jmx -l results/load_test.jtl -e -o results/load_report/

# Stress Test
jmeter -n -t locations_stress.jmx -l results/stress_test.jtl -e -o results/stress_report/

# Endurance Test
jmeter -n -t locations_endurance.jmx -l results/endurance_test.jtl -e -o results/endurance_report/
```
