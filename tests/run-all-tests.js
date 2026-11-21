#!/usr/bin/env node
/**
 * Unified Test Execution Engine
 * Uses Node 20's native test runner to execute unit and integration suites without heavy third-party runners.
 */
process.env.NODE_ENV = 'test';

import { run } from 'node:test';
import { spec } from 'node:test/reporters';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testFiles = [
  path.join(__dirname, 'unit', 'backend', 'server.test.js'),
  path.join(__dirname, 'unit', 'frontend', 'app.test.js'),
  path.join(__dirname, 'integration', 'api.test.js'),
];

console.log('[TEST RUNNER] Executing native test suite across', testFiles.length, 'files...\n');

run({ files: testFiles })
  .on('test:fail', () => {
    process.exitCode = 1;
  })
  .compose(spec)
  .pipe(process.stdout);
