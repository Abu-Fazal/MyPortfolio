# Project Development Roadmap

Master checklist shared across **Cline**, **Qoder**, and **Google Antigravity**. 
Agents must update task checkboxes (`[x]` / `[ ]`) as work is completed.

---

## Phase 0: Pure Monorepo & State Engine Setup
- [x] Multi-agent state engine created (`CURRENT_STATE.md`, `ROADMAP.md`, `DECISIONS.md`).
- [x] Adapters linked for Cline (`.clinerules`), Qoder (`.qoder/rules.md`), Antigravity (`.antigravity/rules/unified-rules.md`).
- [x] Root `package.json` with npm workspaces (`frontend`, `backend`).
- [x] Backend skeleton directory structure and `backend/package.json`.
- [x] Backend `server.js` boilerplate with `/api/health`.
- [x] Backend `.env.example` with full configuration schema.
- [x] Frontend skeleton directory structure and `frontend/package.json`.
- [x] Frontend `vite.config.js` with path alias `@/` and dev API proxy.
- [x] Frontend entry files (`index.html`, `src/main.jsx`, `src/app/App.jsx`, `src/assets/styles/tailwind.css`).
- [x] Unified `vercel.json` routing configuration.
- [x] Verify `.gitignore` rules for node_modules, build outputs, and secrets.
- [x] Update `CURRENT_STATE.md` with Phase 0 completion status.

---

## Phase 1: Backend Foundation
- [ ] Mongoose connection caching utility for serverless execution.
- [ ] Centralized API error handling middleware and `AppError` class.
- [ ] Zod request validation middleware.
- [ ] MongoDB Schema Models (User, Admin, Project, JournalPost, Category, Comment, IssueReport).
- [ ] Backend test suite skeleton.

---

## Phase 2: Authentication & Security Architecture
- [ ] Google OAuth token verification service.
- [ ] Admin username/password authentication service with bcrypt.
- [ ] JWT generation with isolated role claims (`role: admin` vs `role: user`).
- [ ] Protected route middlewares (`verifyUser`, `verifyAdmin`).
- [ ] Cloudflare Turnstile token validation middleware.

---

## Phase 3: Frontend Core & Design System
- [ ] Tailwind CSS configuration matching Figma design tokens (monochrome brutalist).
- [ ] Zustand stores setup (theme, auth, ui).
- [ ] Axios client setup with interceptors and error handlers.
- [ ] Public, Auth, and Admin layout components.
- [ ] Navigation header and footer matching Figma specs.
- [ ] React Router v7 routes with route guards (`PublicRoute`, `AdminRoute`).

---

## Phase 4: Public Pages UI
- [ ] Home Page (`/`) implementation.
- [ ] About Page (`/about`) implementation.
- [ ] Work / Projects listing (`/work`) and detail page (`/work/:slug`).
- [ ] Journal listing (`/journal`) with search and category filters.
- [ ] Journal detail page (`/journal/:slug`).
- [ ] Contact Page (`/contact`) with inquiry form.

---

## Phase 5: Interactive Modules
- [ ] Single-level nested comment system (Google Auth gated).
- [ ] Article like counter module (Google Auth gated).
- [ ] Public Books & Notes reader with free download links.
- [ ] Contact inquiry submission API integration.
- [ ] Issue report submission modal.

---

## Phase 6: Admin Panel & CMS
- [ ] Admin Dashboard overview (`/admin`).
- [ ] Projects CRUD management.
- [ ] Journal CRUD management with TipTap rich text editor.
- [ ] Comment moderation (hide / unhide / review appeals).
- [ ] Cloudinary media upload and management.

---

## Phase 7: Polish, SEO & Deployment
- [ ] React Helmet Async for SEO and meta tags.
- [ ] Robots.txt and sitemap generation.
- [ ] Core Web Vitals audit and performance optimization.
- [ ] Vercel monorepo deployment validation.
- [ ] Custom domain DNS configuration (abufazal.com).
