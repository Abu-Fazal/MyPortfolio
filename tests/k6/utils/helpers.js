// k6 Reusable Helper Functions
import { check } from 'k6';

export const BASE_URL = __ENV.BASE_URL || 'http://localhost:5000';

export function checkResponse(res, expectedStatus = 200, label = 'status check') {
  return check(res, {
    [`${label} status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
  });
}

export const standardHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
