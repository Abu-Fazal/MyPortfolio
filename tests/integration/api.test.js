import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

describe('Integration Contracts & Environmental Constraints', () => {
  test('Nginx configuration files are valid and contain mandatory directives', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');
    
    const nginxConfPath = path.resolve('docker/nginx/conf.d/default.conf');
    assert.ok(fs.existsSync(nginxConfPath), 'default.conf must exist');
    
    const content = fs.readFileSync(nginxConfPath, 'utf8');
    assert.ok(content.includes('location /api/'), 'Must define /api/ proxy block');
    assert.ok(content.includes('try_files $uri $uri/ /index.html;'), 'Must support SPA routing');
  });

  test('Vercel routing correctly configures multi-service layout and rewrites', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');

    const vercelConfig = JSON.parse(fs.readFileSync(path.resolve('vercel.json'), 'utf8'));
    assert.ok(vercelConfig.services.backend, 'Backend service must be defined');
    assert.ok(vercelConfig.services.frontend, 'Frontend service must be defined');
    assert.ok(vercelConfig.rewrites.some(r => r.source === '/api/(.*)'), 'API rewrite rule must exist');
  });
});
