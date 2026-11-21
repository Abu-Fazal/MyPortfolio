# Strict AI Guardrails and Safety Policies

All AI assistants (Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Google Antigravity, and all sub-agents) must strictly obey the following guardrails without exception.

## 1. Zero Git Operations (Strict Prohibition)
- AI agents are strictly forbidden from executing any Git commands (`git add`, `git commit`, `git push`, `git checkout`, `git branch`, `git merge`, `git rebase`, `git reset`, etc.).
- Only the human project owner is authorized to run Git commands.
- If an agent or sub-agent attempts to invoke any Git command, the action must be halted immediately.

## 2. Zero Database Delete and Modification
- AI agents must never perform `DELETE`, `DROP`, `TRUNCATE`, or destructive migration commands on any database.
- AI agents must not interact with, connect to, or alter any database without explicit prior written instruction from the user.

## 3. Zero File / Directory Deletion
- AI agents are strictly prohibited from deleting any file or folder (`rm`, `rmdir`, `Remove-Item`, `del`, `unlink`, or API equivalents).
- If a file is no longer needed, flag it to the user. Never delete it autonomously.

## 4. Workspace Boundary Lock (`MyPortfolio` Only)
- All agent activities, reads, writes, and executions must remain strictly inside the `MyPortfolio` directory.
- Operating outside this boundary or traversing upwards (`../`) is prohibited.
- If an operation requires external context, stop and ask the user for clarification first.

## 5. Explicit Approval Before Execution & File Creation
- AI agents must not create new files or folders without an approved plan and explicit user confirmation.
- Destructive, structural, or external environment changes require human verification.

## 6. Audit Logging and Validation
- All critical command checks and validations must pass through `.agents/hooks/` validation scripts before execution.
