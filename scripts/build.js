#!/usr/bin/env node
/**
 * Monorepo Build Orchestrator
 * Runs guardrail validation, linter checks, and builds the frontend distribution.
 */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function runStep(name, command) {
  console.log(`\n========================================`);
  console.log(`[BUILD STEP] ${name}`);
  console.log(`Command: ${command}`);
  console.log(`========================================`);
  try {
    execSync(command, { cwd: rootDir, stdio: 'inherit' });
    console.log(`[PASSED] ${name}`);
  } catch {
    console.error(`[FAILED] ${name}`);
    process.exit(1);
  }
}

console.log('[BUILD] Starting full monorepo build pipeline...');

// 1. Validate guardrails
runStep('AI Guardrail Validation', 'python .agents/hooks/guardrail-validator.py "build validation"');

// 2. Validate environment
runStep('Environment Validation', 'node scripts/validate-env.js');

// 3. Lint codebase with Oxlint
runStep('Oxlint Code Quality', 'npm run lint');

// 4. Build Frontend Distribution
runStep('Frontend Vite Build', 'npm run build --workspace=frontend');

console.log('\n========================================');
console.log('[SUCCESS] Monorepo build completed cleanly.');
console.log('========================================\n');
process.exit(0);
