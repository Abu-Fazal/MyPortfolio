import http from 'k6/http';
import { sleep } from 'k6';
import { spikeThresholds } from '../config/thresholds.js';
import { BASE_URL, checkResponse, standardHeaders } from '../utils/helpers.js';

export const options = {
  stages: [
    { duration: '10s', target: 10 },  // Normal load
    { duration: '15s', target: 150 }, // Instant spike to 150 users
    { duration: '30s', target: 150 }, // Maintain high spike
    { duration: '15s', target: 10 },  // Drop back to baseline
    { duration: '10s', target: 0 },   // Cool down
  ],
  thresholds: spikeThresholds,
};

export default function () {
  const healthRes = http.get(`${BASE_URL}/api/health`, { headers: standardHeaders });
  checkResponse(healthRes, 200, 'Health endpoint during spike');

  sleep(1);
}
