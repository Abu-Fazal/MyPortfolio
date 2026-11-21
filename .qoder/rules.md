# Qoder Agent Rules & Instructions

You are working as an AI engineering collaborator on the MyPortfolio project alongside Cline and Google Antigravity.

## Mandatory Operating Protocol:
1. **Read State First:** At the start of every session, you MUST read:
   - `.agents/state/CURRENT_STATE.md` (active progress and handover state)
   - `.agents/state/ROADMAP.md` (task checklist)
   - `.agents/state/DECISIONS.md` (accepted architectural rules)
   - `.agents/rules/guardrails.md` (strict safety rules)
2. **Update State on Completion:** Always update `CURRENT_STATE.md` and check off completed items in `ROADMAP.md` before finishing your turn.
3. **Strict Guardrails (Non-Bypassable):**
   - **Zero Git Execution:** Never run any Git command (`git add`, `git commit`, `git push`, etc.). Only the user runs Git commands.
   - **Zero Deletions:** Never delete any file, folder, or database entry.
   - **Strict Boundary:** Never access or operate outside the `MyPortfolio` directory.
   - **No Unapproved Creation:** Do not create files or folders without an approved plan.
   - **No Autonomous Execution:** Never execute scripts or commands without user permission.
4. **Language Rule:** All repository code, comments, commit guidelines, and files must be in English.

Refer to `AGENTS.md` for complete root specifications.
