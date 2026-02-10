# Performance Test Strategy - Characters API

## API Overview
- **Endpoint**: `/api/characters`
- **Methods**: GET (list with pagination), GET by ID
- **Base URL**: `https://thesimpsonsapi.com/api`
- **Response Format**: JSON
- **Authentication**: None (public API)

---

## Performance Test Strategies

### 0. Baseline Testing
**Objective**: Establish a performance benchmark under low load to compare against future runs.

**Test Configuration**:
- **Users**: 10 concurrent users
- **Duration**: 30 minutes
- **Ramp-up**: 2 minutes
- **Think Time**: 3 seconds (Constant)

**Test Scenarios**:
- Mixed requests: 40% Page 1, 30% Random Page, 30% Random ID.

**Rationale**: Provides the "normal" state of the API. Any future degradation will be measured against these specific results.

**JMX File**: `baseline_characters.jmx`

### 1. Load Testing
**Objective**: Determine system behavior under expected normal load.

**Test Configuration**:
- **Users**: 50 concurrent users
- **Duration**: 10 minutes
- **Ramp-up**: 2 minutes
- **Think Time**: 2-5 seconds between requests

**Test Scenarios**:
- 70% GET `/characters?page=1`
- 20% GET `/characters/{random_id}` (IDs 1-100)
- 10% GET `/characters?page={random}` (pages 1-10)

**Success Criteria**:
- Response time < 2 seconds (95th percentile)
- Error rate < 1%
- Throughput ≥ 100 requests/second

**Metrics to Collect**:
- Average response time
- 90th, 95th, 99th percentile response times
- Throughput (requests/second)
- Error rate
- Network latency

---

### 2. Stress Testing
**Objective**: Identify breaking point and system behavior under extreme load.

**Test Configuration**:
- **Users**: Start at 100, increase by 50 every 5 minutes until failure
- **Duration**: Until system fails or reaches 500 users
- **Ramp-up**: Progressive (50 users/5 min)
- **Think Time**: 1 second

**Test Scenarios**:
- 80% GET `/characters?page=1`
- 20% GET `/characters/{random_id}`

**Success Criteria**:
- Identify maximum concurrent users before degradation
- System recovers gracefully after load reduction
- No data corruption

**Expected Observations**:
- Response time degradation point
- Error rate increase threshold
- Server resource saturation (if accessible)

---

### 3. Endurance/Soak Testing
**Objective**: Verify system stability over extended periods.

**Test Configuration**:
- **Users**: 30 concurrent users (moderate load)
- **Duration**: 4 hours
- **Ramp-up**: 5 minutes
- **Think Time**: 3-7 seconds

**Test Scenarios**:
- 60% GET `/characters?page={random}` (pages 1-60)
- 30% GET `/characters/{random_id}` (IDs 1-1000)
- 10% GET `/characters` (no pagination)

**Success Criteria**:
- No memory leaks (stable response times)
- Error rate < 0.5%
- No performance degradation over time

**Metrics to Monitor**:
- Response time trend over 4 hours
- Memory usage pattern (if accessible)
- Connection pool stability

---

### 4. Spike Testing
**Objective**: Test system resilience to sudden traffic surges.

**Test Configuration**:
- **Baseline**: 10 users for 5 minutes
- **Spike**: Jump to 200 users instantly
- **Spike Duration**: 2 minutes
- **Recovery**: Drop back to 10 users
- **Cycles**: 3 spike cycles

**Test Scenarios**:
- During spike: 100% GET `/characters?page=1` (cache hit scenario)

**Success Criteria**:
- System handles spike without crashes
- Response time recovers to baseline within 1 minute after spike
- No data loss or corruption

**Key Observations**:
- Time to detect spike
- Response time during spike
- Recovery time
- Error rate during spike

---

### 5. Scalability Testing
**Objective**: Assess system's ability to scale with increased load.

**Test Configuration**:
- **Phase 1**: 25 users, 10 minutes
- **Phase 2**: 50 users, 10 minutes
- **Phase 3**: 100 users, 10 minutes
- **Phase 4**: 200 users, 10 minutes
- **Ramp-up**: 1 minute per phase

**Test Scenarios**:
- Mixed workload: 50% pagination, 30% ID lookup, 20% full list

**Success Criteria**:
- Linear or sub-linear response time increase
- Throughput increases proportionally
- Error rate remains < 1%

**Analysis**:
- Response time vs. user count graph
- Throughput vs. user count graph
- Identify scalability bottlenecks

---

## Performance Test Reports Template

### Executive Summary
- Test type executed
- Date and duration
- Pass/Fail status
- Key findings

### Test Configuration
- Number of users
- Ramp-up period
- Test duration
- Scenarios executed

### Results Summary Table
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Avg Response Time | < 1s | X ms | ✅/❌ |
| 95th Percentile | < 2s | X ms | ✅/❌ |
| Throughput | ≥ 100 req/s | X req/s | ✅/❌ |
| Error Rate | < 1% | X% | ✅/❌ |

### Response Time Distribution
- Min: X ms
- Max: X ms
- Median: X ms
- 90th percentile: X ms
- 95th percentile: X ms
- 99th percentile: X ms

### Throughput Analysis
- Average: X requests/second
- Peak: X requests/second
- Minimum: X requests/second

### Error Analysis
- Total requests: X
- Failed requests: X
- Error rate: X%
- Error types breakdown

### Graphs (to include)
1. Response time over time
2. Throughput over time
3. Active users over time
4. Error rate over time
5. Response time distribution histogram

### Bottlenecks Identified
- List any performance bottlenecks
- Resource constraints observed
- Network latency issues

### Recommendations
- Performance optimization suggestions
- Infrastructure scaling recommendations
- Configuration tuning advice

---

## JMeter Implementation Notes

### Thread Group Configuration
```
Characters Load Test:
- Number of Threads: ${USERS}
- Ramp-up Period: ${RAMP_UP}
- Loop Count: Infinite
- Duration: ${DURATION} seconds
- Scheduler: Enabled
```

### Required JMeter Plugins
- PerfMon Server Agent (for server monitoring)
- Custom Thread Groups (for spike testing)
- Throughput Shaping Timer (for gradual load increase)

### CSV Data Set for Data-Driven Tests
Create `character_ids.csv`:
```
id
1
2
15
20
100
```

Create `page_numbers.csv`:
```
page
1
2
5
10
20
```
