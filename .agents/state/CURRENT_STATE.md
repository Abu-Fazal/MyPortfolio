# Project Current State

This document is the real-time operational context shared across all active AI agents (**Cline**, **Qoder**, and **Google Antigravity**). 

**Every agent must inspect this file at the start of every session and update it after completing any task.**

---

## 1. System Metadata
- **Project Name:** MyPortfolio (Personal Portfolio & Technical Showcase)
- **Project Owner:** Abu Fazal
- **Active Agents:** Cline, Qoder, Google Antigravity
- **Current Version:** `0.0.2` (Tag: `v0.0.2` - Live Vercel Deployment Verified)
- **Current Phase:** Phase 0 Verified & Deployed / Transitioning to Phase 1
- **Current Status:** Vercel Multi-Service Live (Frontend SPA + Express API operational with 100% test pass)
- **Last Updated:** 2026-11-21

---

## 2. Active Working Context
- **Completed in Phase 0 (Release v0.0.1):**
  - Multi-agent state engine created (`CURRENT_STATE.md`, `ROADMAP.md`, `DECISIONS.md`).
  - Active adapter files bound: `.clinerules`, `.qoder/rules.md`, `.antigravity/rules/unified-rules.md`.
  - Root monorepo configuration created (`package.json` with npm workspaces `frontend` and `backend`).
  - Backend skeleton created (`backend/package.json`, `backend/src/server.js`, `backend/.env.example`).
  - Frontend skeleton created (`frontend/package.json`, `frontend/vite.config.js`, `frontend/tailwind.config.js`, `frontend/postcss.config.js`, `frontend/index.html`, `frontend/src/`).
  - Unified `vercel.json` monorepo routing configured.
  - Oxlint integrated for ultra-fast monorepo linting (`.oxlintrc.json`).
  - Full Docker stack configured (`docker/`, `docker-compose.yml`, `docker-compose.prod.yml`).
  - Production Nginx suite configured (`docker/nginx/` with security, compression, rate-limiting, and error pages).
  - Grafana k6 performance testing suite configured (`tests/k6/`).
  - Master test scripts and native test runner verified (6/6 passing).
  - GitHub Actions CI/CD workflows configured (`ci.yml`, `deploy.yml`).
  - Changelog established (`CHANGELOG.md` with version `0.0.1`).
- **Currently Active Task:**
  - Git tag creation and handover to user for `v0.0.1`.
- **Immediate Next Task:**
  - **Phase 1: Backend Foundation** (Mongoose serverless connection pooling, Zod validation middleware, error handler, and MongoDB entity models).

---

## 3. Active Agent Handover Protocol
1. **Before any action:** Read `CURRENT_STATE.md` and `.agents/rules/guardrails.md`.
2. **Never repeat user instructions:** Inherit ongoing context from this file.
3. **Guardrails reminder:** Zero Git commands by AI agents. Zero file/folder deletions. Zero database deletions. Workspace boundary locked to `MyPortfolio`. No file creation without approved plan.
4. **After any work:** Mark tasks in `ROADMAP.md` and log current progress in this file.
