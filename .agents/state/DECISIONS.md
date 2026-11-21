# Architectural Decisions Log (ADR)

This file tracks all core architectural decisions accepted for the project. 
**No agent (Cline, Qoder, or Antigravity) may contradict or unilaterally alter these decisions without user approval.**

---

### ADR-001: Monorepo Architecture with npm Workspaces
- **Status:** Accepted
- **Context:** The application consists of a React 19 frontend and an Express 5 backend deployed as a unified project to Vercel.
- **Decision:** Keep frontend and backend inside a single repository organized with npm workspaces (`workspaces: ["frontend", "backend"]`).
- **Consequences:** Simplified cross-stack dependency coordination, unified git history, and single-deployment pipeline.

---

### ADR-002: Vercel Serverless Backend Execution
- **Status:** Accepted
- **Context:** The backend will run on Vercel without persistent container hosting.
- **Decision:** Wrap Express 5 app with `serverless-http` and cache Mongoose connection pools across cold invocations.
- **Consequences:** Backend must remain completely stateless. No in-memory sessions or persistent socket listeners.

---

### ADR-003: Isolated Dual Authentication Strategy
- **Status:** Accepted
- **Context:** General visitors use Google OAuth (read-only profile scope), while the sole Admin uses an ID/Username and Password form.
- **Decision:** Issue distinct JWT tokens containing clear `role: admin` or `role: user` claims. Use isolated cookie/header namespaces to prevent token collision.
- **Consequences:** Clean separation of concerns and zero risk of privilege escalation.

---

### ADR-004: Single-Level Nested Comment Architecture
- **Status:** Accepted
- **Context:** Deep multi-level recursive comments and multi-state appeal workflows add excessive overhead for a personal portfolio.
- **Decision:** Limit comments to maximum 1 level of child replies (`parentId` reference). Maintain author display as "Deleted User" if parent comment is deleted to keep reply context.
- **Consequences:** Simpler database queries, lower latency, and streamlined UI state.

---

### ADR-005: Free vs Paid Resources Display
- **Status:** Accepted
- **Context:** First release excludes payment gateways, carts, and checkout funnels.
- **Decision:** Free Books & Notes are freely readable and downloadable without login. Paid Books & Notes expose only metadata and Table of Contents with an "Inquire" badge.
- **Consequences:** Honest visitor expectations with zero broken checkout paths.

---

### ADR-006: Bidirectional Content Sanitization (TipTap Rich Text)
- **Status:** Accepted
- **Context:** TipTap editor generates raw HTML for articles and journal entries.
- **Decision:** Enforce DOMPurify HTML sanitization with strict tag allowlists on both frontend render components and backend API controllers before storing in MongoDB.
- **Consequences:** Complete mitigation of XSS and script injection vulnerabilities.


---

### ADR-007: React 19 Peer Dependency Resolution
- **Status:** Accepted
- **Context:** React 19 is used, but ecosystem packages like `react-helmet-async` specify peer ranges up to React 18.
- **Decision:** Configure `.npmrc` with `legacy-peer-deps=true` and declare `overrides` in root and frontend `package.json`.
- **Consequences:** Ensures seamless npm installation across all environments without breaking workspace trees.


---

### ADR-008: High-Performance Linting with Oxlint
- **Status:** Accepted
- **Context:** Fast code linting across both frontend (React) and backend (Express) is required without slow ESLint configuration bloat.
- **Decision:** Use Oxlint as the primary project linter configured via `.oxlintrc.json` with scripts `npm run lint` and `npm run lint:fix`.
- **Consequences:** Near-instantaneous lint checks across the monorepo for all developers and agents.


---

### ADR-009: Containerization & Docker Strategy
- **Status:** Accepted
- **Context:** Local offline development and containerized self-hosted deployments require reproducible, isolated runtime environments.
- **Decision:** Provide multi-stage Dockerfiles in `docker/` (`backend.Dockerfile`, `frontend.Dockerfile`), an Nginx reverse proxy configuration (`docker/nginx.conf`), and unified `docker-compose.yml` (dev) and `docker-compose.prod.yml` (prod).
- **Consequences:** Consistent runtime parity across development, testing, and production container environments.


---

### ADR-010: Production Nginx Architecture
- **Status:** Accepted
- **Context:** Serving the React SPA with security, rate limiting, and reverse proxying requires a hardened Nginx configuration.
- **Decision:** Implement modular Nginx configs under `docker/nginx/`:
  - `nginx.conf`: Core daemon, worker processes, event loop optimization.
  - `conf.d/default.conf`: SPA routing (`try_files`), 1-year asset caching, `/api/` reverse proxy, timeout buffers.
  - `conf.d/security.conf`: HSTS, CSP, X-Frame-Options, nosniff, Referrer-Policy.
  - `conf.d/compression.conf`: Fine-tuned Gzip compression for static assets and API JSON responses.
  - `conf.d/rate-limit.conf`: Tiered IP rate limiting (10 req/s general, 2 req/s strict for auth/contact).
  - `error-pages/`: Monochromatic brutalist 404 and 50x error templates.
- **Consequences:** Production-ready reverse proxy with DDoS mitigation, security headers, and brutalist error states.


---

### ADR-011: Performance & Load Testing with Grafana k6
- **Status:** Accepted
- **Context:** Validating SLA latency targets (p95 < 300ms) and system resilience under load requires structured performance test automation.
- **Decision:** Setup Grafana k6 suite under `tests/k6/` with modular thresholds, helpers, and multi-tier scenarios (`smoke-test`, `load-test`, `stress-test`, `spike-test`), alongside Docker execution via `docker-compose.yml`.
- **Consequences:** Reproducible load testing runnable both locally and in CI without manual host dependencies.


---

### ADR-012: Unified Testing Hub & GitHub Actions CI/CD Pipeline
- **Status:** Accepted
- **Context:** Ensuring zero-regression delivery across multi-agent workflows requires automated scripts, unified unit/integration tests, and CI/CD pipelines.
- **Decision:**
  - Create `scripts/`: `build.js` (monorepo build orchestrator), `test-all.js` (master test runner), `validate-env.js` (env sync).
  - Create `tests/`: `unit/` (Node native test runner for frontend and backend), `integration/` (routing and proxy contracts), and `k6/` (load tests).
  - Create `.github/workflows/`: `ci.yml` (automated lint, test, build, and docker compose verification) and `deploy.yml` (Vercel deployment pipeline).
- **Consequences:** Consistent, automated quality gates before any code merges or deploys.
