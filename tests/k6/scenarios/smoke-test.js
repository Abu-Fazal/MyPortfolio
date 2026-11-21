import http from 'k6/http';
import { sleep } from 'k6';
import { smokeThresholds } from '../config/thresholds.js';
import { BASE_URL, checkResponse, standardHeaders } from '../utils/helpers.js';

export const options = {
  vus: 2,
  duration: '10s',
  thresholds: smokeThresholds,
};

export default function () {
  // 1. Health endpoint check
  const healthRes = http.get(`${BASE_URL}/api/health`, { headers: standardHeaders });
  checkResponse(healthRes, 200, 'Health endpoint');

  // 2. Root API check
  const apiRes = http.get(`${BASE_URL}/api`, { headers: standardHeaders });
  checkResponse(apiRes, 200, 'Root API');

  sleep(1);
}
