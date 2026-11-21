# Changelog

All notable changes to the Abu Fazal Portfolio project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.0.2] - 2026-11-21

### Successful Vercel Multi-Service Deployment & Verification

This release verifies that both the React 19 frontend and the Express 5 backend are successfully deployed and running live together on Vercel with 100% test pass rate.

#### Added & Improved
- **Vercel Services Architecture:** Implemented official multi-service schema in `vercel.json` with explicit `backend` entrypoint (`src/server.js`) and top-level rewrites (`/api/*` -> `backend`, `/*` -> `frontend`).
- **Production Routing Parity:** Verified seamless coexistence of Vite client SPA and Express serverless API on a single production domain without CORS barriers.
- **Contract & Test Verification:** 100% test pass rate across native unit and integration test suites (Node 20 test runner).
- **Code Quality:** Zero warnings and zero errors verified by Oxlint across all monorepo files.

---

## [0.0.1] - 2026-11-21

### Initial Architecture & Monorepo Setup

This marks the baseline release (`v0.0.1`) establishing the foundational architecture for the portfolio, inspired by production learnings from **Sabr Studio** and **Jamia Academy**.

#### Added
- **Monorepo Foundation:** Unified npm workspaces layout coordinating `frontend/` (React 19 + Vite) and `backend/` (Express 5 + Node 20).
- **Multi-Agent State Protocol:** Real-time state synchronization engine across Cline, Qoder, and Google Antigravity via `.agents/state/`.
- **Universal Guardrails:** Automated validation hook (`.agents/hooks/guardrail-validator.py`) enforcing zero unauthorized Git runs, zero destructive database queries, and directory boundaries.
- **High-Speed Linting:** Oxlint setup configured via `.oxlintrc.json` for instant monorepo code checks.
- **Container Infrastructure:** Multi-stage Dockerfiles and Docker Compose configuration for local development (with MongoDB) and production (Nginx reverse proxy with rate limiting and brutalist error pages).
- **Performance Testing Suite:** Grafana k6 testing suite configured under `tests/k6/` with smoke, load, stress, and spike test profiles.
- **CI/CD Automation:** GitHub Actions workflows (`.github/workflows/ci.yml`, `deploy.yml`) for automated testing, linting, and Vercel deployments.
- **Testing Hub:** Native Node 20 test runner with verified unit and integration contracts.
