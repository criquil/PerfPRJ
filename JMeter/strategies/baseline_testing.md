# Baseline Performance Testing Guide

## Overview
This document provides a standardized approach to establish performance baselines for The Simpsons API. Baselines serve as reference points for future performance comparisons and regression detection.

---

## Why Baseline Testing?

**Purpose**:
- Establish current performance characteristics
- Create benchmarks for future comparisons
- Detect performance regressions early
- Set realistic performance targets
- Track performance trends over time

**When to Run Baseline Tests**:
- Initial deployment
- After major infrastructure changes
- Before/after code optimizations
- Quarterly performance reviews
- After scaling events

---

## Baseline Test Configuration

### Standard Baseline Test Parameters
- **Users**: 10 concurrent users (low, controlled load)
- **Duration**: 30 minutes
- **Ramp-up**: 2 minutes
- **Think Time**: 3 seconds
- **Iterations**: Minimum 1000 requests per endpoint
- **Environment**: Production-like (same infrastructure)
- **Time**: Off-peak hours (to minimize external variables)

### Advanced Multi-Condition Strategy (NEW)
Para una baseline más robusta, se recomienda ejecutar la matriz de condiciones:
- **Iteraciones**: 3 ejecuciones por escenario para consistencia estadística.
- **Variaciones**:
  - Usuarios: 10, 50, 100.
  - Ramp-up: 10s, 30s, 60s.
- **Objetivo**: Obtener promedios ponderados y rangos de tolerancia dinámicos.


### Prerequisites
- ✅ Stable environment (no deployments during test)
- ✅ Normal system load (no other heavy processes)
- ✅ Consistent network conditions
- ✅ Database in normal state (not during backups)
- ✅ Cache warmed up (run warm-up requests first)

---

## Baseline Tests by API

### 1. Characters API Baseline

#### Test Scenarios
| Scenario | Percentage | Description |
|----------|-----------|-------------|
| GET /characters?page=1 | 40% | First page (most common) |
| GET /characters?page={2-10} | 30% | Random pagination |
| GET /characters/{1-100} | 30% | Individual character lookup |

#### JMeter Configuration
```xml
<ThreadGroup>
  <stringProp name="ThreadGroup.num_threads">10</stringProp>
  <stringProp name="ThreadGroup.ramp_time">120</stringProp>
  <stringProp name="ThreadGroup.duration">1800</stringProp>
  <stringProp name="TestPlan.comments">Baseline - Characters API</stringProp>
</ThreadGroup>
```

#### Expected Baseline Metrics
| Metric | Target Range | Notes |
|--------|--------------|-------|
| Avg Response Time | 200-800ms | Depends on payload size |
| 95th Percentile | < 1500ms | Acceptable upper bound |
| Throughput | 10-15 req/s | With 10 users |
| Error Rate | 0% | Should be zero in baseline |
| Min Response Time | 100-300ms | Network + processing |

#### Baseline Report Template
```
=== CHARACTERS API BASELINE ===
Date: YYYY-MM-DD HH:MM
Duration: 30 minutes
Total Requests: XXXX

Response Times:
- Min: XXX ms
- Avg: XXX ms
- Median: XXX ms
- 90th: XXX ms
- 95th: XXX ms
- 99th: XXX ms
- Max: XXX ms

Throughput: XX.X req/s
Error Rate: 0.00%

Requests by Endpoint:
- /characters?page=1: XXXX (XX%)
- /characters?page=X: XXXX (XX%)
- /characters/{id}: XXXX (XX%)
```

---

### 2. Episodes API Baseline

#### Test Scenarios
| Scenario | Percentage | Description |
|----------|-----------|-------------|
| GET /episodes?page=1 | 35% | First page |
| GET /episodes?page={2-20} | 35% | Mid-range pages |
| GET /episodes/{1-100} | 30% | Episode details |

#### JMeter Configuration
```xml
<ThreadGroup>
  <stringProp name="ThreadGroup.num_threads">10</stringProp>
  <stringProp name="ThreadGroup.ramp_time">120</stringProp>
  <stringProp name="ThreadGroup.duration">1800</stringProp>
  <stringProp name="TestPlan.comments">Baseline - Episodes API</stringProp>
</ThreadGroup>
```

#### Expected Baseline Metrics
| Metric | Target Range | Notes |
|--------|--------------|-------|
| Avg Response Time | 300-900ms | Larger payloads (synopsis) |
| 95th Percentile | < 1800ms | Acceptable upper bound |
| Throughput | 8-12 req/s | Slightly lower due to payload |
| Error Rate | 0% | Should be zero |
| Min Response Time | 150-350ms | Network + processing |

#### Baseline Report Template
```
=== EPISODES API BASELINE ===
Date: YYYY-MM-DD HH:MM
Duration: 30 minutes
Total Requests: XXXX

Response Times:
- Min: XXX ms
- Avg: XXX ms
- Median: XXX ms
- 90th: XXX ms
- 95th: XXX ms
- 99th: XXX ms
- Max: XXX ms

Throughput: XX.X req/s
Error Rate: 0.00%

Payload Size:
- Avg: XX KB
- Max: XX KB
```

---

### 3. Locations API Baseline

#### Test Scenarios
| Scenario | Percentage | Description |
|----------|-----------|-------------|
| GET /locations?page=1 | 45% | First page (most popular) |
| GET /locations?page={2-10} | 30% | Random pages |
| GET /locations/{1-50} | 25% | Location details |

#### JMeter Configuration
```xml
<ThreadGroup>
  <stringProp name="ThreadGroup.num_threads">10</stringProp>
  <stringProp name="ThreadGroup.ramp_time">120</stringProp>
  <stringProp name="ThreadGroup.duration">1800</stringProp>
  <stringProp name="TestPlan.comments">Baseline - Locations API</stringProp>
</ThreadGroup>
```

#### Expected Baseline Metrics
| Metric | Target Range | Notes |
|--------|--------------|-------|
| Avg Response Time | 150-600ms | Smaller dataset |
| 95th Percentile | < 1200ms | Fastest of the three APIs |
| Throughput | 12-18 req/s | Higher due to smaller payload |
| Error Rate | 0% | Should be zero |
| Min Response Time | 80-250ms | Network + processing |

#### Baseline Report Template
```
=== LOCATIONS API BASELINE ===
Date: YYYY-MM-DD HH:MM
Duration: 30 minutes
Total Requests: XXXX

Response Times:
- Min: XXX ms
- Avg: XXX ms
- Median: XXX ms
- 90th: XXX ms
- 95th: XXX ms
- 99th: XXX ms
- Max: XXX ms

Throughput: XX.X req/s
Error Rate: 0.00%

Cache Hit Ratio: XX% (if observable)
```

---

## Baseline Execution Procedure

### Step 1: Pre-Test Checklist
- [ ] Verify environment stability
- [ ] Check system resources (CPU, Memory, Disk)
- [ ] Confirm no deployments scheduled
- [ ] Clear old test data
- [ ] Warm up cache (run 100 requests)

### Step 2: Run Baseline Test
```bash
# Characters API
jmeter -n -t baseline_characters.jmx -l results/baseline_characters.jtl -e -o results/baseline_characters_report/

# Episodes API
jmeter -n -t baseline_episodes.jmx -l results/baseline_episodes.jtl -e -o results/baseline_episodes_report/

# Locations API
jmeter -n -t baseline_locations.jmx -l results/baseline_locations.jtl -e -o results/baseline_locations_report/
```

### Step 3: Collect Baseline Data
Extract key metrics from JMeter reports:
- Response time percentiles (50th, 90th, 95th, 99th)
- Throughput (requests/second)
- Error rate
- Min/Max response times
- Standard deviation

### Step 4: Document Baseline
Save results in `JMeter/baselines/baseline_YYYY-MM-DD.md`:

```markdown
# Baseline Performance - YYYY-MM-DD

## Environment
- Infrastructure: [AWS/Azure/GCP/On-prem]
- Instance Type: [e.g., t3.medium]
- Database: [PostgreSQL version]
- Cache: [Redis/None]

## Characters API
| Metric | Value |
|--------|-------|
| Avg RT | XXX ms |
| 95th RT | XXX ms |
| Throughput | XX req/s |
| Error Rate | 0% |

## Episodes API
| Metric | Value |
|--------|-------|
| Avg RT | XXX ms |
| 95th RT | XXX ms |
| Throughput | XX req/s |
| Error Rate | 0% |

## Locations API
| Metric | Value |
|--------|-------|
| Avg RT | XXX ms |
| 95th RT | XXX ms |
| Throughput | XX req/s |
| Error Rate | 0% |
```

---

## Baseline Comparison Methodology

### Comparing Against Baseline

**Acceptable Variance**:
- Response Time: ±15%
- Throughput: ±10%
- Error Rate: 0% (any errors = regression)

**Regression Indicators**:
- ❌ Response time increased > 20%
- ❌ Throughput decreased > 15%
- ❌ Error rate > 0.5%
- ❌ 95th percentile > 2x baseline

**Improvement Indicators**:
- ✅ Response time decreased > 10%
- ✅ Throughput increased > 10%
- ✅ 95th percentile improved

### Comparison Report Template

```markdown
# Performance Comparison Report

## Test Details
- Baseline Date: YYYY-MM-DD
- Current Test Date: YYYY-MM-DD
- Change: [Code deployment/Infrastructure change/etc.]

## Characters API Comparison
| Metric | Baseline | Current | Δ | Status |
|--------|----------|---------|---|--------|
| Avg RT | XXX ms | XXX ms | +X% | ✅/❌ |
| 95th RT | XXX ms | XXX ms | +X% | ✅/❌ |
| Throughput | XX req/s | XX req/s | +X% | ✅/❌ |

## Episodes API Comparison
| Metric | Baseline | Current | Δ | Status |
|--------|----------|---------|---|--------|
| Avg RT | XXX ms | XXX ms | +X% | ✅/❌ |
| 95th RT | XXX ms | XXX ms | +X% | ✅/❌ |
| Throughput | XX req/s | XX req/s | +X% | ✅/❌ |

## Locations API Comparison
| Metric | Baseline | Current | Δ | Status |
|--------|----------|---------|---|--------|
| Avg RT | XXX ms | XXX ms | +X% | ✅/❌ |
| 95th RT | XXX ms | XXX ms | +X% | ✅/❌ |
| Throughput | XX req/s | XX req/s | +X% | ✅/❌ |

## Analysis
[Explain any significant changes, regressions, or improvements]

## Recommendations
[Actions to take based on comparison results]
```

---

## Baseline Maintenance

### Update Baseline When:
1. **Major infrastructure changes** (new servers, database upgrades)
2. **Significant code optimizations** (if improvements are sustained)
3. **API changes** (new fields, different response structure)
4. **Quarterly reviews** (to track long-term trends)

### Baseline History Tracking
Maintain a baseline history file: `JMeter/baselines/baseline_history.csv`

```csv
Date,API,Avg_RT,P95_RT,Throughput,Error_Rate,Notes
2026-01-26,Characters,450,1200,12.5,0.0,Initial baseline
2026-01-26,Episodes,550,1500,10.2,0.0,Initial baseline
2026-01-26,Locations,350,900,15.8,0.0,Initial baseline
```

---

## JMeter Baseline Test Plans

### Create Baseline Test Plans
Save as `baseline_characters.jmx`, `baseline_episodes.jmx`, `baseline_locations.jmx`

**Key Differences from Performance Tests**:
- Lower user count (10 vs 50+)
- Longer duration (30 min for stability)
- Consistent think time (3 seconds)
- No ramp-up variations
- Detailed listeners enabled

### Required Listeners
```xml
<!-- Summary Report -->
<ResultCollector guiclass="SummaryReport" testclass="ResultCollector">
  <stringProp name="filename">baseline_summary.csv</stringProp>
</ResultCollector>

<!-- Aggregate Report -->
<ResultCollector guiclass="StatVisualizer" testclass="ResultCollector">
  <stringProp name="filename">baseline_aggregate.csv</stringProp>
</ResultCollector>

<!-- Response Time Percentiles -->
<ResultCollector guiclass="RespTimeGraphVisualizer" testclass="ResultCollector">
  <stringProp name="filename">baseline_percentiles.csv</stringProp>
</ResultCollector>
```

---

## Automated Baseline Comparison Script

### Python Script Example
```python
import pandas as pd

def compare_baseline(baseline_file, current_file):
    baseline = pd.read_csv(baseline_file)
    current = pd.read_csv(current_file)
    
    comparison = {
        'avg_rt_delta': ((current['avg_rt'] - baseline['avg_rt']) / baseline['avg_rt']) * 100,
        'p95_rt_delta': ((current['p95_rt'] - baseline['p95_rt']) / baseline['p95_rt']) * 100,
        'throughput_delta': ((current['throughput'] - baseline['throughput']) / baseline['throughput']) * 100
    }
    
    # Check for regressions
    regressions = []
    if comparison['avg_rt_delta'] > 20:
        regressions.append(f"Avg RT increased by {comparison['avg_rt_delta']:.1f}%")
    if comparison['p95_rt_delta'] > 20:
        regressions.append(f"95th percentile increased by {comparison['p95_rt_delta']:.1f}%")
    if comparison['throughput_delta'] < -15:
        regressions.append(f"Throughput decreased by {abs(comparison['throughput_delta']):.1f}%")
    
    return comparison, regressions

# Usage
comparison, regressions = compare_baseline('baseline.csv', 'current.csv')
if regressions:
    print("⚠️ PERFORMANCE REGRESSIONS DETECTED:")
    for r in regressions:
        print(f"  - {r}")
else:
    print("✅ No performance regressions detected")
```

---

## Best Practices

1. **Consistency**: Always run baselines under identical conditions
2. **Timing**: Run during off-peak hours for consistency
3. **Warm-up**: Always warm up cache before baseline tests
4. **Documentation**: Document all environmental factors
5. **Version Control**: Store baseline results in version control
6. **Automation**: Automate baseline comparison in CI/CD
7. **Alerts**: Set up alerts for baseline deviations > 20%
8. **Regular Reviews**: Review baselines quarterly

---

## Troubleshooting Baseline Variations

### High Variance Between Runs
**Possible Causes**:
- Network instability
- Database load variations
- Cache state differences
- External traffic interference

**Solutions**:
- Run multiple baseline tests and average
- Isolate test environment
- Ensure consistent cache warming

### Baseline Drift Over Time
**Possible Causes**:
- Data growth
- Gradual code degradation
- Infrastructure aging

**Solutions**:
- Establish new baseline after major changes
- Track trends over time
- Investigate gradual degradations

---

## Current Active Baselines (Last updated: 2026-01-26)

Based on the baseline execution of 2026-01-26, the following limits have been integrated into the `the_simpsons_api.jmx` test plan as `DurationAssertions`:

| API | Baseline P95 (Avg) | Applied Limit (Assert) | Buffer/Rationale |
|-----|--------------|------------------------|-----------------|
| **Characters (ID)** | 894 ms | **1200 ms** | ~34% (Load Test) |
| **Characters (Cached)**| 33 ms | **800 ms** | Spike Protection |
| **Episodes** | 545 ms | **700 ms** | Initial Baseline |
| **Locations** | 577 ms | **750 ms** | Initial Baseline |

> [!WARNING]
> High error rates (30%+) were observed for random pagination (404 Not Found). Assertions for response code 200 remain active and will fail if these endpoints are not fixed.
