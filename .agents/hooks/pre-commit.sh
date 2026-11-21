#!/usr/bin/env sh

# Cross-agent pre-commit hook (POSIX)
echo "[AI Hook] Running pre-commit validation..."

# 1. Check for secret files or patterns
FORBIDDEN_FILES='\.env$|\.pem$|\.key$|id_rsa'
staged_forbidden=$(git diff --cached --name-only | grep -E "$FORBIDDEN_FILES")
if [ -n "$staged_forbidden" ]; then
    echo "[AI Hook ERROR] Attempting to commit secret or sensitive files:"
    echo "$staged_forbidden"
    exit 1
fi

echo "[AI Hook] Pre-commit checks passed."
exit 0
