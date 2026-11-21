#!/usr/bin/env node
/**
 * Environment Validation Script
 * Compares current .env with .env.example templates to detect missing configuration keys.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function extractKeys(envContent) {
  return envContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#') && line.includes('='))
    .map(line => line.split('=')[0].trim());
}

function validateEnvFile(examplePath, actualPath, label) {
  if (!fs.existsSync(examplePath)) {
    console.log(`[ENV] No example file found for ${label} at ${examplePath}`);
    return true;
  }

  const exampleContent = fs.readFileSync(examplePath, 'utf8');
  const requiredKeys = extractKeys(exampleContent);

  if (!fs.existsSync(actualPath)) {
    console.warn(`[ENV WARNING] ${label} .env file is missing at ${actualPath}. Copy from .env.example.`);
    return false;
  }

  const actualContent = fs.readFileSync(actualPath, 'utf8');
  const existingKeys = extractKeys(actualContent);

  const missingKeys = requiredKeys.filter(k => !existingKeys.includes(k));
  if (missingKeys.length > 0) {
    console.error(`[ENV ERROR] Missing ${label} environment keys: ${missingKeys.join(', ')}`);
    return false;
  }

  console.log(`[ENV] ${label} environment keys verified successfully.`);
  return true;
}

console.log('[ENV] Validating project environment schemas...');
const backendExample = path.join(rootDir, 'backend', '.env.example');
const backendActual = path.join(rootDir, 'backend', '.env');
const frontendExample = path.join(rootDir, 'frontend', '.env.example');
const frontendActual = path.join(rootDir, 'frontend', '.env');

validateEnvFile(backendExample, backendActual, 'Backend');
validateEnvFile(frontendExample, frontendActual, 'Frontend');

console.log('[ENV] Environment validation finished.');
process.exit(0);
