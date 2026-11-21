import http from 'k6/http';
import { sleep } from 'k6';
import { loadThresholds } from '../config/thresholds.js';
import { BASE_URL, checkResponse, standardHeaders } from '../utils/helpers.js';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp-up to 20 users over 30s
    { duration: '1m', target: 50 },  // Steady state at 50 users for 1m
    { duration: '30s', target: 0 },  // Ramp-down to 0 users over 30s
  ],
  thresholds: loadThresholds,
};

export default function () {
  const healthRes = http.get(`${BASE_URL}/api/health`, { headers: standardHeaders });
  checkResponse(healthRes, 200, 'Health endpoint under load');

  const apiRes = http.get(`${BASE_URL}/api`, { headers: standardHeaders });
  checkResponse(apiRes, 200, 'Root API under load');

  sleep(1);
}
