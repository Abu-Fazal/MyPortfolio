// Reusable k6 Performance Thresholds matching TRD requirements
export const smokeThresholds = {
  http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  http_req_duration: ['p(95)<300'], // 95% of requests should be below 300ms
};

export const loadThresholds = {
  http_req_failed: ['rate<0.01'], // error rate < 1%
  http_req_duration: ['p(95)<500', 'p(99)<1000'], // 95% < 500ms, 99% < 1s
};

export const stressThresholds = {
  http_req_failed: ['rate<0.05'], // error rate < 5% under heavy stress
  http_req_duration: ['p(95)<1500'], // 95% < 1.5s under maximum load
};

export const spikeThresholds = {
  http_req_failed: ['rate<0.05'],
  http_req_duration: ['p(95)<2000'],
};
