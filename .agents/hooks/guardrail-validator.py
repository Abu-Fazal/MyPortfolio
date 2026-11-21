#!/usr/bin/env python3
"""
AI Guardrail Validator
Intercepts and validates actions/commands against strict project safety rules.
"""

import sys
import re
import os
from datetime import datetime

# Blocklist Patterns
BLOCKED_PATTERNS = [
    # 1. Any Git commands
    (r"\bgit(\.exe)?\s+", "BLOCKED: AI agents are strictly forbidden from running Git commands. Only the user runs Git commands."),
    
    # 2. Deletion commands
    (r"\b(rm|rmdir|del|erase|Remove-Item|unlink)\b", "BLOCKED: Deletion of files or folders is strictly prohibited."),
    (r"\bRemove-ItemProperty\b", "BLOCKED: Deletion operations are strictly prohibited."),
    
    # 3. Database destructive operations
    (r"\b(DROP\s+DATABASE|DROP\s+TABLE|TRUNCATE\s+TABLE|DELETE\s+FROM)\b", "BLOCKED: Destructive database operations are strictly prohibited."),
    
    # 4. Escaping workspace boundary
    (r"(\.\.[/\\]|[C-Zc-z]:[/\\](?!OneDrive[/\\]Desktop[/\\]MyPortfolio))", "BLOCKED: Actions outside MyPortfolio workspace boundary are prohibited.")
]

AUDIT_LOG_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "audit.log")

def log_event(status: str, command: str, reason: str = ""):
    timestamp = datetime.now().isoformat()
    log_line = f"[{timestamp}] [{status}] Command: {command}"
    if reason:
        log_line += f" | Reason: {reason}"
    log_line += "\n"
    try:
        with open(AUDIT_LOG_FILE, "a", encoding="utf-8") as f:
            f.write(log_line)
    except Exception:
        pass

def validate(command_str: str) -> bool:
    clean_cmd = command_str.strip()
    if not clean_cmd:
        return True

    for pattern, message in BLOCKED_PATTERNS:
        if re.search(pattern, clean_cmd, re.IGNORECASE):
            log_event("BLOCKED", clean_cmd, message)
            print(f"\n[GUARDRAIL TRIGGERED] {message}", file=sys.stderr)
            print(f"[REJECTED COMMAND] {clean_cmd}\n", file=sys.stderr)
            return False

    log_event("PASSED", clean_cmd)
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: guardrail-validator.py <command-to-evaluate>")
        sys.exit(1)

    cmd_to_check = " ".join(sys.argv[1:])
    passed = validate(cmd_to_check)
    sys.exit(0 if passed else 1)
