#!/usr/bin/env sh

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
VALIDATOR="$SCRIPT_DIR/guardrail-validator.py"

python3 "$VALIDATOR" "$@"
exit $?
