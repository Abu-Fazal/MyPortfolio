# Grafana k6 Performance & Load Testing Suite

This directory contains automated performance, load, and stress test scenarios for MyPortfolio.

## Structure
- `config/thresholds.js`: Reusable SLO thresholds (p95 latency, error rate).
- `utils/helpers.js`: Shared request helpers, status assertions, and standard headers.
- `scenarios/`:
  - `smoke-test.js`: Minimal smoke verification (2 VUs, 10s).
  - `load-test.js`: Realistic ramping load test (up to 50 VUs).
  - `stress-test.js`: Maximum capacity stress test (up to 200 VUs).
  - `spike-test.js`: Sudden traffic spike resilience test.

## Running Tests

### Option 1: Using Local k6 CLI
```bash
# Smoke test
k6 run tests/k6/scenarios/smoke-test.js

# Load test with custom target URL
k6 run -e BASE_URL=http://localhost:5000 tests/k6/scenarios/load-test.js
```

### Option 2: Using Docker (Zero Installation)
```bash
docker compose run --rm k6 run /scripts/scenarios/smoke-test.js
```
