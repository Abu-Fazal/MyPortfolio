# Project Current State

This document is the real-time operational context shared across all active AI agents (**Cline**, **Qoder**, and **Google Antigravity**). 

**Every agent must inspect this file at the start of every session and update it after completing any task.**

---

## 1. System Metadata
- **Project Name:** MyPortfolio (Personal Portfolio & Technical Showcase)
- **Project Owner:** Abu Fazal
- **Active Agents:** Cline, Qoder, Google Antigravity
- **Current Phase:** Phase 0 Completed / Ready for Phase 1
- **Current Status:** Phase 0 Setup Verified (Awaiting User npm install and review)
- **Last Updated:** 2026-11-21

---

## 2. Active Working Context
- **Completed in Phase 0:**
  - Multi-agent state engine created (`CURRENT_STATE.md`, `ROADMAP.md`, `DECISIONS.md`).
  - Active adapter files bound: `.clinerules`, `.qoder/rules.md`, `.antigravity/rules/unified-rules.md`.
  - Root monorepo configuration created (`package.json` with npm workspaces `frontend` and `backend`).
  - Backend skeleton created (`backend/package.json`, `backend/src/server.js`, `backend/.env.example`, placeholder folder trees).
  - Frontend skeleton created (`frontend/package.json`, `frontend/vite.config.js`, `frontend/tailwind.config.js`, `frontend/postcss.config.js`, `frontend/index.html`, `frontend/src/`).
  - Unified `vercel.json` monorepo routing configured.
  - Master roadmap (`ROADMAP.md`) Phase 0 items marked complete.
- **Currently Active Task:**
  - Phase 0 Handover to user for local package installation (`npm install`) and Git commit.
- **Immediate Next Task:**
  - **Phase 1: Backend Foundation** (Mongoose serverless connection pooling, Zod validation middleware, error handler, and MongoDB entity models).

---

## 3. Active Agent Handover Protocol
1. **Before any action:** Read `CURRENT_STATE.md` and `.agents/rules/guardrails.md`.
2. **Never repeat user instructions:** Inherit ongoing context from this file.
3. **Guardrails reminder:** Zero Git commands by AI agents. Zero file/folder deletions. Zero database deletions. Workspace boundary locked to `MyPortfolio`. No file creation without approved plan.
4. **After any work:** Mark tasks in `ROADMAP.md` and log current progress in this file.

- **Added Tooling:**
  - Oxlint integrated for ultra-fast monorepo linting (`.oxlintrc.json`, `npm run lint`).

- **Added Containerization:**
  - Full Docker stack configured (`docker/`, `docker-compose.yml`, `docker-compose.prod.yml`).

- **Production Nginx Setup:**
  - Complete modular Nginx suite configured (`docker/nginx/` with security, compression, rate-limiting, SPA proxying, and custom error pages).

- **Performance Testing Suite:**
  - Grafana k6 configured (`tests/k6/` with smoke, load, stress, and spike test scenarios + Docker service).

- **Unified Scripts, Tests & CI/CD:**
  - `scripts/` orchestrators created (`build.js`, `test-all.js`, `validate-env.js`).
  - `tests/` hub populated (`unit/`, `integration/`, `k6/`, `run-all-tests.js`).
  - GitHub Actions CI/CD workflows created (`.github/workflows/ci.yml`, `.github/workflows/deploy.yml`).
