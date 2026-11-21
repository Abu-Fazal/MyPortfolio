<div align="center">

```
   ___    ____  __  __   _________ _____ ___    __ 
  /   |  / __ )/ / / /  / ____/   /__  //   |  / / 
 / /| | / __  / / / /  / /_  / /| | / / / /| | / /  
/ ___ |/ /_/ / /_/ /  / __/ / ___ |/ /_/ ___ |/ /___
/_/  |_/_____/\____/  /_/   /_/  |_/___/_/  |_/_____/
```

### High-Performance Personal Portfolio & Digital Architecture Showcase
**Engineering digital rigor with brutalist clarity, performance-first execution, and scalable system design.**

[![React](https://img.shields.io/badge/React-19.0.0-000000?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-000000?style=for-the-badge&logo=node.js&logoColor=339933)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-000000?style=for-the-badge&logo=vite&logoColor=646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-000000?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-000000?style=for-the-badge&logo=mongodb&logoColor=47A248)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-000000?style=for-the-badge&logo=docker&logoColor=2496ED)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-Hardened-000000?style=for-the-badge&logo=nginx&logoColor=009639)](https://nginx.org/)
[![Oxlint](https://img.shields.io/badge/Oxlint-Sub_ms-000000?style=for-the-badge&logo=rust&logoColor=orange)](https://oxc-project.github.io/)
[![License](https://img.shields.io/badge/License-MIT-000000?style=for-the-badge)](LICENSE)

```
[SYS.LOC] NEW DELHI, INDIA (28.6139° N, 77.2090° E) • [STATUS] AVAILABLE FOR SELECT CONTRACTS
```

</div>

---

## 01 // Architectural Overview & Identity

**Abu Fazal Portfolio** is an enterprise-grade personal portfolio, digital flagship, and educational resource ecosystem engineered by **Abu Fazal** (Senior Full-Stack Developer, MERN Stack Architect, and Tech Educator). 

Drawing architectural patterns and production battle-scars from our flagship systems—**Sabr Studio** (Headless E-commerce & Design House Flagship) and **Jamia Academy** (EdTech Learning Ecosystem teaching 15,000+ students)—this platform bridges uncompromising systems architecture with brutalist, high-contrast editorial aesthetics.

### Key Metrics & Highlights
- **6+ Years** of production full-stack engineering experience.
- **40+ Production Applications** shipped across SaaS, Civic Tech, Fintech, and LMS domains.
- **15,000+ Students** taught and mentored in modern web ecosystems.
- **100/100 Lighthouse Target:** Built with zero-compromise asset optimization, sub-300ms p95 latency targets, and strict security posture.

---

## 02 // High-Level System Architecture

```
                    ┌────────────────────────────────────────┐
                    │      Client Browser / Mobile PWA       │
                    └───────────────────┬────────────────────┘
                                        │ HTTPS / TLS 1.3
                                        ▼
             ┌───────────────────────────────────────────────────────┐
             │            Edge Routing Layer (Vercel / Nginx)        │
             │   - Reverse Proxy with Rate Limiting (10 req/s)       │
             │   - Content Security Policy (CSP) & HSTS Headers      │
             │   - Gzip Level-6 Static Asset Compression             │
             └──────────────┬─────────────────────────┬──────────────┘
                            │                         │
             Static Traffic │                         │ Dynamic API Calls
             (/, /work, ..) │                         │ (/api/*)
                            ▼                         ▼
             ┌────────────────────────┐    ┌───────────────────────────────────┐
             │ React 19 Frontend SPA  │    │  Express 5 Node 20 Backend Core   │
             │ - Vite 6 Build Engine  │    │  - Serverless HTTP Adapter        │
             │ - Tailwind CSS Brutal  │    │  - Zod Request Validators         │
             │ - Zustand State Engine │    │  - Dual Auth (Google OAuth & JWT) │
             │ - TanStack Query Cache │    │  - DOMPurify HTML Sanitizer       │
             └────────────────────────┘    └──────────────┬────────────────────┘
                                                          │
                             ┌────────────────────────────┼────────────────────────────┐
                             ▼                            ▼                            ▼
                 ┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
                 │    MongoDB Atlas     │     │      Cloudinary      │     │     Resend & Auth    │
                 │ - Mongoose Pooling   │     │ - Media Assets CDN   │     │ - Transactional Mail │
                 │ - Single-level Reply │     │ - WebP Auto-Format   │     │ - Google Identity    │
                 │ - Strict TTL Indexes │     │ - Document Previews  │     │ - Turnstile Bot Gate │
                 └──────────────────────┘     └──────────────────────┘     └──────────────────────┘
```

---

## 03 // Technical Arsenal & Stack Matrix

| Layer | Technologies Selected | Strategic Purpose |
|---|---|---|
| **Frontend Framework** | **React 19** + **Vite 6** | Ultra-responsive client UI with instantaneous HMR development cycles. |
| **Routing & State** | **React Router DOM v7** + **Zustand** | Centralized client-side routing with lightweight decoupled global state. |
| **Styling & Design System** | **Tailwind CSS** + **Lucide React** | Brutalist monochrome theme, responsive typography, and semantic icon tokens. |
| **Server State & Data Fetching** | **TanStack Query v5** + **Axios** | Declarative caching, optimistic updates, and automatic query invalidation. |
| **Forms & Validation** | **React Hook Form** + **Zod** | Type-safe form orchestration with bidirectional schema validation. |
| **Backend Runtime & Framework** | **Node.js 20 LTS** + **Express 5** | High-throughput asynchronous REST API with modernized `path-to-regexp` safety. |
| **Database & ODM** | **MongoDB Atlas** + **Mongoose 8** | Document storage with cached serverless connection pooling and TTL auto-expiry. |
| **Authentication Strategy** | **Google OAuth 2.0** + **JWT (bcryptjs)** | Isolated dual auth: Google OAuth for visitors, dedicated username/hash for Admin. |
| **Media & Delivery** | **Cloudinary CDN** | Cloud-native media delivery, on-the-fly transformations, and secure downloads. |
| **DevOps & Containerization** | **Docker** + **Docker Compose** + **Nginx** | Multi-container parity for local offline development and production serving. |
| **Quality & Linter** | **Oxlint** | Rust-based high-speed static code analysis running 50x faster than legacy linters. |
| **Performance Testing** | **Grafana k6** | Automated load, stress, smoke, and traffic spike benchmark scenarios. |

---

## 04 // Flagship Projects & Architectural Lineage

### 1. [Sabr Studio](https://github.com/Abu-Fazal/Sabr-Studio)
* **Domain:** Headless E-Commerce & Editorial Design Flagship (2024.01 Core)
* **Architecture:** Headless Shopify Storefront API integration, custom WebGL product viewers, and edge-rendered Next.js interfaces with a 100/100 Lighthouse audit.
* **Key Patterns Borrowed:** High-contrast monochromatic design system, ruthless asset optimization, and clean architectural typography.

### 2. [Jamia Academy](https://github.com/Abu-Fazal/Jamia-Academy)
* **Domain:** Scalable Learning Management System & EdTech Ecosystem (2023)
* **Architecture:** Next.js, TypeScript, GraphQL backend, automated code evaluation sandboxes, and low-latency interactive video delivery for over 15,000 learners.
* **Key Patterns Borrowed:** Public Hinglish educational resource distribution, clean Books/Notes documentation viewer, and robust student engagement workflows.

### 3. [Unite for Nation](https://github.com/abufazal)
* **Domain:** Civic Mobilization & High-Throughput Public Engagement (2024)
* **Architecture:** Resilient digital mobilization infrastructure engineered for zero-downtime, fault tolerance, and high concurrent query throughput.

---

## 05 // Multi-Agent Collaborative Synchronization

This repository uses a **Universal Multi-Agent State Engine** enabling **Cline**, **Qoder**, and **Google Antigravity** to work simultaneously without repeating prompts, overriding tasks, or losing context.

```
.agents/
├── rules/
│   ├── guardrails.md            # Mandatory, non-bypassable safety policies
│   ├── core-standards.md        # Code quality and language boundaries
│   ├── architecture-and-code.md # Monorepo modular structure standards
│   ├── git-workflow.md          # Conventional commit rules
│   └── security-and-safety.md   # Secret leakage prevention & sanitization
├── state/
│   ├── CURRENT_STATE.md         # Real-time operational context & task handover
│   ├── ROADMAP.md               # Master phase-by-phase task checklist
│   └── DECISIONS.md             # Immutable Architectural Decision Records (ADR)
├── hooks/
│   ├── guardrail-validator.py   # Automated pre-command execution blocker
│   └── guardrail-check.ps1      # Cross-platform validation hook
└── audit.log                    # Historical log of validated & blocked commands
```

### Critical Guardrails (Mandatory)
1. **Zero Git Operations by AI:** AI agents are strictly forbidden from executing any Git commands (`git add`, `commit`, `push`, etc.). Only the project owner runs Git operations.
2. **Zero Database Destruction:** No `DROP`, `DELETE`, or destructive modifications without explicit instruction.
3. **Zero Deletion:** Never delete existing files or directories.
4. **Workspace Boundary:** All actions are bounded strictly inside `MyPortfolio`.
5. **Approval Before Execution:** No file creation or command execution without an approved plan.

---

## 06 // Monorepo Directory Layout

```text
MyPortfolio/
├── .agents/                    # Multi-agent state engine, shared rules, validator hooks
├── .github/
│   └── workflows/              # GitHub Actions CI/CD (ci.yml, deploy.yml)
├── docker/
│   ├── nginx/                  # Hardened Nginx suite (security, compression, rate-limiting)
│   ├── backend.Dockerfile      # Node 20 Alpine backend image
│   └── frontend.Dockerfile     # Multi-stage Vite + Nginx build
├── docs/                       # PRD.docx, TRD.docx, FIGMA DESIGN.pdf
├── frontend/                   # React 19 Client Application
│   ├── public/                 # Static assets, icons
│   ├── src/
│   │   ├── app/                # Router, providers, public/admin layouts
│   │   ├── features/           # home, about, work, journal, contact, admin, auth
│   │   ├── services/api/       # Axios client and centralized endpoints
│   │   ├── shared/             # Zustand stores, reusable UI components, hooks
│   │   └── assets/styles/      # Tailwind CSS entry and custom tokens
│   ├── vite.config.js          # Vite config with path aliases (@/) & dev proxy
│   └── package.json
├── backend/                    # Node 20 + Express 5 Serverless API
│   ├── src/
│   │   ├── app/                # Server setup, database caching, error middleware
│   │   ├── features/           # auth, projects, journal, users, contact, admin
│   │   ├── shared/             # Utilities, constants, Zod schemas
│   │   └── server.js           # Express app & Vercel serverless export
│   └── package.json
├── scripts/                    # Build, test-all, and env validation orchestrators
├── tests/
│   ├── unit/                   # Native Node 20 unit tests (frontend & backend)
│   ├── integration/            # API contracts & routing integration tests
│   ├── k6/                     # Grafana k6 performance scenarios (smoke, load, stress)
│   └── run-all-tests.js        # Zero-dependency test runner
├── docker-compose.yml          # Multi-container local dev stack (MongoDB + Backend + Frontend)
├── docker-compose.prod.yml     # Production container stack
├── vercel.json                 # Monorepo unified routing & serverless rewrites
├── .oxlintrc.json              # Oxlint rules and plugin configuration
├── .npmrc                      # Legacy peer dependencies setting
├── CHANGELOG.md                # SemVer-compliant version history
└── package.json                # Root workspaces orchestrator
```

---

## 07 // Quick Start & Development Setup

### Prerequisites
- **Node.js:** `>= 20.0.0`
- **npm:** `>= 10.0.0`
- **Python:** `>= 3.10` (for AI guardrail verification hooks)
- **Docker & Docker Compose:** Optional (for containerized local development)

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/Abu-Fazal/Portfolio.git
cd Portfolio

# Install monorepo dependencies across all workspaces
npm install
```

### 2. Configure Environment Variables
```bash
# Backend environment setup
cp backend/.env.example backend/.env

# Frontend environment setup
cp frontend/.env.example frontend/.env
```

### 3. Run Development Server
```bash
# Concurrently start Express backend (port 5000) and Vite frontend (port 5173)
npm run dev

# Or run individual workspaces:
npm run dev:frontend   # Runs client on http://localhost:5173
npm run dev:backend    # Runs API on http://localhost:5000
```

### 4. Run via Docker (Zero Local Dependency Setup)
```bash
# Start local MongoDB, Backend, and Frontend containers with live hot-reload
npm run docker:dev

# Tear down containers and networks
npm run docker:down
```

---

## 08 // Quality Assurance & Testing Suite

### Master Test Runner
Execute all guardrails, unit tests, and integration assertions in a single command:
```bash
npm test
```

### Sub-Millisecond Linting (Oxlint)
```bash
# Lint the entire monorepo
npm run lint

# Automatically fix supported lint issues
npm run lint:fix
```

### Performance & Load Testing (Grafana k6)
Run pre-configured k6 scenarios locally or directly through Docker:
```bash
# 1. Smoke Test (Sanity verification with 2 VUs)
npm run test:k6:smoke

# 2. Realistic Load Test (Ramps up to 50 concurrent users)
npm run test:k6:load

# 3. Stress Test (Pushes system capacity to 200 users)
npm run test:k6:stress

# 4. Zero-Install Docker Execution
npm run test:k6:docker
```

---

## 09 // Production Deployment Model

The monorepo is engineered to deploy seamlessly to **Vercel** with zero configuration friction:
- **Frontend SPA:** Built using `npm run build:frontend` and served statically via Vercel Edge CDN with instantaneous caching.
- **Backend API:** Exported via `serverless-http` from `backend/src/server.js`, dynamically handling all `/api/*` traffic through serverless function execution.
- **Custom Domain:** Pointed to `abufazal.com` via Hostinger DNS configuration.

---

## 10 // Author & Transmission Channels

```
================================================================================
NAME:      Abu Fazal
ROLE:      Senior Full Stack Developer | MERN Architect | Tech Educator
BASE:      New Delhi, India (28.6139° N, 77.2090° E)
HOURS:     09:00 - 19:00 IST (UTC +5:30)
STATUS:    Available for Selective Freelance & High-Impact Contracts
================================================================================
```

* **Email:** [abufazal460@gmail.com](mailto:abufazal460@gmail.com)
* **LinkedIn:** [linkedin.com/in/abufazal](https://linkedin.com/in/abufazal)
* **GitHub:** [github.com/abufazal](https://github.com/abufazal)
* **Instagram:** [@abufazal.dev](https://instagram.com/abufazal.dev)
* **Fiverr:** [fiverr.com/abufazal](https://fiverr.com/abufazal)
* **WhatsApp:** `+91 9718162907`

---

<div align="center">
<sub>© 2026 Abu Fazal. All rights reserved. Crafted with architectural rigor, brutalist aesthetics, and clean code.</sub>
</div>
