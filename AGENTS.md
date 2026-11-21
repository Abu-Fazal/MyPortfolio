# Universal AI Agent Guidelines (AGENTS.md)

This file is the single source of truth for all AI agents working on this repository, including Claude Code, OpenAI Codex, Cursor, GitHub Copilot, and Google Antigravity.

## Critical Guardrails (Mandatory & Non-Bypassable)

Detailed security policies are defined in [.agents/rules/guardrails.md](.agents/rules/guardrails.md).
1. **Zero Git Execution:** AI agents must never run any Git command (`add`, `commit`, `push`, etc.). Only the user runs Git commands.
2. **Zero Database Destruction:** Never execute `DELETE`, `DROP`, or touch databases without explicit instruction.
3. **Zero Deletion:** Never delete any file or folder.
4. **Strict Boundary:** Never access or modify anything outside `MyPortfolio`.
5. **No Unapproved Creation:** Do not create files or folders without an approved plan and explicit user permission.
6. **No Autonomous Execution:** Never execute scripts or commands without user permission.

## Shared Modules

Detailed standards are defined under `.agents/rules/`:
- [Strict Guardrails](.agents/rules/guardrails.md)
- [Core Standards](.agents/rules/core-standards.md)
- [Architecture & Code Standards](.agents/rules/architecture-and-code.md)
- [Git & Commit Standards](.agents/rules/git-workflow.md)
- [Security & Safety Standards](.agents/rules/security-and-safety.md)

## Tool Compatibility

- **Claude Code:** Reads `CLAUDE.md`, which links to this file.
- **Cursor:** Reads `.cursor/rules/rules.mdc`, which links to this file.
- **GitHub Copilot:** Reads `.github/copilot-instructions.md`, which links to this file.
- **Antigravity:** Reads `.antigravity/rules/unified-rules.md`, which links to this file.
- **OpenAI Codex:** Natively parses `AGENTS.md`.
