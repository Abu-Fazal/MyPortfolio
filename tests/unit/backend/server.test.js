import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

describe('Backend Server Configuration Tests', () => {
  test('Backend exports valid serverless handler and express app', async () => {
    const serverModule = await import('../../../backend/src/server.js');
    assert.ok(serverModule.default, 'Default export (Express app) must exist');
    assert.strictEqual(typeof serverModule.handler, 'function', 'Serverless handler must be a function');
  });

  test('AppError class properly instantiates operational errors', async () => {
    const { AppError } = await import('../../../backend/src/app/errors/AppError.js');
    const err = new AppError('Resource not found', 404);
    assert.strictEqual(err.statusCode, 404);
    assert.strictEqual(err.status, 'fail');
    assert.strictEqual(err.isOperational, true);
  });
});
