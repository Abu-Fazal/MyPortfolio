# Claude Code Instructions

Claude Code must strictly abide by the shared AI guidelines and guardrails for this repository.

## Non-Bypassable Guardrails:
1. **Never run Git commands:** Do not execute `git add`, `git commit`, `git push`, etc. Only the user runs Git commands.
2. **Never delete files or folders:** File and directory deletion is strictly prohibited.
3. **Never delete or touch databases:** No DB delete, drop, or unsolicited interaction.
4. **Strict workspace boundary:** Stay inside `MyPortfolio`. Never access parent directories.
5. **No unapproved file creation:** Require user plan review and approval before creating files or folders.
6. **No unauthorized execution:** Do not execute commands without user permission.

See [AGENTS.md](AGENTS.md) and [.agents/rules/guardrails.md](.agents/rules/guardrails.md) for full specifications.
All repository files, documentation, and code changes must remain in English.
