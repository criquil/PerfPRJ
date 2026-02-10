# Performance Test Strategy - Episodes API

## API Overview
- **Endpoint**: `/api/episodes`
- **Methods**: GET (list with pagination), GET by ID
- **Base URL**: `https://thesimpsonsapi.com/api`
- **Response Format**: JSON
- **Total Episodes**: 768 (39 pages)

---

## Performance Test Strategies

### 0. Baseline Testing
**Objective**: Establish a baseline for response times and payload handling for episode data.

**Test Configuration**:
- **Users**: 10 concurrent users
- **Duration**: 30 minutes
- **Ramp-up**: 2 minutes
- **Think Time**: 3 seconds

**Test Scenarios**:
- Mixed requests: 35% Page 1, 35% Mid-range pages, 30% Episode details.

**Rationale**: Since episodes have larger payloads (synopses), establishing a baseline is critical to differentiate between network latency and data processing overhead.

**JMX File**: `baseline_episodes.jmx`

### 1. Load Testing
**Objective**: Validate performance under expected user load.

**Test Configuration**:
- **Users**: 40 concurrent users
- **Duration**: 15 minutes
- **Ramp-up**: 3 minutes
- **Think Time**: 3-6 seconds

**Test Scenarios**:
- 60% GET `/episodes?page={random}` (pages 1-39)
- 30% GET `/episodes/{id}` (IDs 1-100)
- 10% GET `/episodes` (first page)

**Success Criteria**:
- Response time < 1.5 seconds (95th percentile)
- Error rate < 1%
- Throughput ≥ 80 requests/second

**Rationale**: Episodes endpoint likely has larger response payloads due to synopsis field, requiring slightly relaxed response time targets.

---

### 2. Stress Testing
**Objective**: Determine maximum capacity and failure modes.

**Test Configuration**:
- **Users**: Incremental from 50 to 400
- **Increment**: 50 users every 3 minutes
- **Duration**: Until failure or 30 minutes
- **Think Time**: 0.5 seconds

**Test Scenarios**:
- 70% GET `/episodes?page=1` (first page - likely cached)
- 30% GET `/episodes/{random_id}` (IDs 1-768)

**Success Criteria**:
- Identify breaking point (users/throughput)
- Graceful degradation (no crashes)
- Recovery within 2 minutes after load reduction

**Key Metrics**:
- Maximum concurrent users sustained
- Response time at breaking point
- Error types at failure

---

### 3. Endurance/Soak Testing
**Objective**: Detect memory leaks and long-term stability issues.

**Test Configuration**:
- **Users**: 25 concurrent users
- **Duration**: 6 hours
- **Ramp-up**: 5 minutes
- **Think Time**: 5-10 seconds

**Test Scenarios**:
- 40% GET `/episodes?page={random}` (pages 1-39)
- 40% GET `/episodes/{random_id}` (IDs 1-768)
- 20% GET `/episodes?page=1`

**Success Criteria**:
- Response time variance < 10% over 6 hours
- No memory leaks (stable performance)
- Error rate < 0.3%

**Monitoring Focus**:
- Response time trend analysis
- Database connection pool stability
- Cache hit/miss ratio (if observable)

---

### 4. Spike Testing
**Objective**: Test resilience to sudden traffic spikes (e.g., new season release).

**Test Configuration**:
- **Baseline**: 15 users
- **Spike**: 250 users (instant)
- **Spike Duration**: 3 minutes
- **Recovery**: Back to 15 users
- **Cycles**: 4 spikes with 5-minute intervals

**Test Scenarios**:
- During spike: 90% GET `/episodes?page=1` (simulating homepage traffic)
- During spike: 10% GET `/episodes/{latest_id}` (new episode)

**Success Criteria**:
- No service downtime during spike
- Response time < 5 seconds during spike
- Recovery to baseline within 90 seconds

**Rationale**: Episodes API may experience spikes when new episodes air or during binge-watching events.

---

### 5. Scalability Testing
**Objective**: Evaluate horizontal/vertical scaling effectiveness.

**Test Configuration**:
- **Phase 1**: 20 users, 8 minutes
- **Phase 2**: 40 users, 8 minutes
- **Phase 3**: 80 users, 8 minutes
- **Phase 4**: 160 users, 8 minutes
- **Ramp-up**: 2 minutes per phase

**Test Scenarios**:
- 50% GET `/episodes?page={random}`
- 30% GET `/episodes/{random_id}`
- 20% GET `/episodes` (no params)

**Success Criteria**:
- Response time increases < 50% when users double
- Throughput doubles (or near-double) with user doubling
- Error rate remains stable

**Analysis Deliverables**:
- Scalability coefficient calculation
- Cost-benefit analysis for scaling
- Recommended scaling thresholds

---

## Performance Test Reports Template

### Executive Summary
- **Test Type**: [Load/Stress/Endurance/Spike/Scalability]
- **Execution Date**: YYYY-MM-DD
- **Duration**: X hours
- **Overall Result**: ✅ PASS / ❌ FAIL
- **Critical Findings**: [Brief summary]

### Test Environment
- **API Endpoint**: `/api/episodes`
- **JMeter Version**: 5.6.3
- **Test Machine**: [Specs]
- **Network**: [Connection details]

### Test Configuration
| Parameter | Value |
|-----------|-------|
| Concurrent Users | X |
| Ramp-up Period | X seconds |
| Test Duration | X minutes |
| Think Time | X-Y seconds |
| Total Requests | X |

### Performance Metrics
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Avg Response Time | < 1s | X ms | ✅/❌ |
| 95th Percentile | < 1.5s | X ms | ✅/❌ |
| 99th Percentile | < 3s | X ms | ✅/❌ |
| Throughput | ≥ 80 req/s | X req/s | ✅/❌ |
| Error Rate | < 1% | X% | ✅/❌ |
| Max Response Time | < 10s | X ms | ✅/❌ |

### Response Time Analysis
- **Minimum**: X ms
- **Maximum**: X ms
- **Median**: X ms
- **Standard Deviation**: X ms
- **90th Percentile**: X ms
- **95th Percentile**: X ms
- **99th Percentile**: X ms

### Throughput Breakdown
| Time Window | Requests/sec | Trend |
|-------------|--------------|-------|
| 0-5 min | X | ↗️/↘️/→ |
| 5-10 min | X | ↗️/↘️/→ |
| 10-15 min | X | ↗️/↘️/→ |

### Error Summary
- **Total Errors**: X
- **Error Rate**: X%
- **Error Types**:
  - HTTP 500: X occurrences
  - HTTP 503: X occurrences
  - Timeout: X occurrences
  - Connection refused: X occurrences

### Graphs & Visualizations
1. **Response Time Over Time**: Line graph showing RT trends
2. **Throughput Over Time**: Requests/second timeline
3. **Active Threads**: User load visualization
4. **Error Rate Over Time**: Error percentage timeline
5. **Response Time Distribution**: Histogram

### Bottlenecks & Issues
- [List identified bottlenecks]
- [Performance degradation points]
- [Resource constraints]

### Recommendations
1. **Immediate Actions**: [Critical fixes]
2. **Short-term Improvements**: [Optimization opportunities]
3. **Long-term Strategy**: [Infrastructure/architecture changes]

### Appendix
- Raw JMeter results file: `results.jtl`
- HTML report: `report/index.html`
- Test plan: `episodes_[test_type].jmx`

---

## JMeter Configuration Examples

### Load Test Thread Group
```xml
<ThreadGroup>
  <stringProp name="ThreadGroup.num_threads">40</stringProp>
  <stringProp name="ThreadGroup.ramp_time">180</stringProp>
  <stringProp name="ThreadGroup.duration">900</stringProp>
  <boolProp name="ThreadGroup.scheduler">true</boolProp>
</ThreadGroup>
```

### CSV Data Sets Required

**episode_ids.csv**:
```
id
1
12
50
100
500
768
```

**page_numbers.csv**:
```
page
1
5
10
20
35
39
```

### Assertions to Include
- Response Code: 200
- JSON Path: `$.results` exists
- Response Time: < 3000ms
- Content Type: application/json
