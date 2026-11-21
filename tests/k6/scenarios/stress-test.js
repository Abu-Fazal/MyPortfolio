import http from 'k6/http';
import { sleep } from 'k6';
import { stressThresholds } from '../config/thresholds.js';
import { BASE_URL, checkResponse, standardHeaders } from '../utils/helpers.js';

export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Ramp to 50 users
    { duration: '1m', target: 100 },  // Scale up to 100 users
    { duration: '30s', target: 200 }, // Push to 200 users stress limit
    { duration: '30s', target: 0 },   // Recovery ramp down
  ],
  thresholds: stressThresholds,
};

export default function () {
  const healthRes = http.get(`${BASE_URL}/api/health`, { headers: standardHeaders });
  checkResponse(healthRes, 200, 'Health endpoint under stress');

  const apiRes = http.get(`${BASE_URL}/api`, { headers: standardHeaders });
  checkResponse(apiRes, 200, 'Root API under stress');

  sleep(0.5);
}
