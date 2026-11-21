#!/usr/bin/env node
/**
 * Master Test Runner
 * Executes unit tests, integration tests, and performance smoke tests across the monorepo.
 */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const testSuites = [
  {
    name: 'Guardrails & Safety Rules',
    cmd: 'python .agents/hooks/guardrail-validator.py "test runner execution"'
  },
  {
    name: 'Unit Tests (Frontend & Backend)',
    cmd: 'node tests/run-all-tests.js'
  }
];

console.log('[TEST] Initiating Monorepo Test Suite...\n');

let failed = false;
for (const suite of testSuites) {
  console.log(`[TEST SUITE] Running ${suite.name}...`);
  try {
    execSync(suite.cmd, { cwd: rootDir, stdio: 'inherit' });
    console.log(`[PASSED] ${suite.name}\n`);
  } catch {
    console.error(`[FAILED] ${suite.name}\n`);
    failed = true;
  }
}

if (failed) {
  console.error('[TEST] One or more test suites failed.');
  process.exit(1);
} else {
  console.log('[TEST] All test suites passed successfully.');
  process.exit(0);
}
