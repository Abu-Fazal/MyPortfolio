# Universal AI Agent Guidelines (AGENTS.md)

This file is the single source of truth for all AI agents working on this repository, including Claude Code, OpenAI Codex, Cursor, GitHub Copilot, and Google Antigravity.

## Core Rules

1. **Language:**
   - Every file, commit message, and piece of documentation in this repository must remain in English.

2. **Shared Modules:**
   Detailed standards are defined under `.agents/rules/`:
   - [Core Standards](.agents/rules/core-standards.md)
   - [Architecture & Code Standards](.agents/rules/architecture-and-code.md)
   - [Git & Commit Standards](.agents/rules/git-workflow.md)
   - [Security & Safety Standards](.agents/rules/security-and-safety.md)

3. **Behavioral Expectations:**
   - Understand the full context before editing.
   - Keep changes concise, accurate, and clean.
   - Do not remove or alter existing configurations without explicit user instruction.
   - Follow project specifications outlined in `docs/` (PRD, TRD, Design).

4. **Tool Compatibility:**
   - **Claude Code:** Reads `CLAUDE.md`, which links to this file.
   - **Cursor:** Reads `.cursor/rules/rules.mdc`, which links to this file.
   - **GitHub Copilot:** Reads `.github/copilot-instructions.md`, which links to this file.
   - **Antigravity:** Reads `.antigravity/rules/unified-rules.md`, which links to this file.
   - **OpenAI Codex:** Natively parses `AGENTS.md`.
