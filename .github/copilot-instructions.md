# GitHub Copilot Instructions & Strict Guardrails

GitHub Copilot must strictly adhere to the repository guardrails and standards:

## Mandatory Guardrails:
- **No Git Commands:** Do not suggest or run `git` commands. Git commands are strictly reserved for the human user.
- **No Deletions:** Never delete or suggest deleting any file, folder, or database entry.
- **Strict Boundary:** Never access or operate outside the `MyPortfolio` root.
- **Approval for Creation:** Do not generate or create files without prior plan approval.

Refer to:
- `AGENTS.md`
- `.agents/rules/guardrails.md`
- `.agents/rules/core-standards.md`
- `.agents/rules/architecture-and-code.md`
- `.agents/rules/security-and-safety.md`

All code and documentation must remain in English.
