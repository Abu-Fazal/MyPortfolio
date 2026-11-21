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
