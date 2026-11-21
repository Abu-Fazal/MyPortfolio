# Security and Safety Standards

1. **Secret Leakage Prevention:**
   - Never hardcode API keys, tokens, passwords, private keys, or credentials.
   - Always load sensitive configuration via environment variables.

2. **Input Sanitization:**
   - Sanitize all user-controlled inputs to prevent XSS, SQL injection, and injection vulnerabilities.

3. **Safe File Operations:**
   - Do not run unverified destructive file system operations (e.g., recursive unconstrained deletes).
   - Ensure file paths are properly validated and bounded.
