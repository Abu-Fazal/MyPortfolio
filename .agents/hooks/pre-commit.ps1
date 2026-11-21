# Cross-agent pre-commit hook (PowerShell)
Write-Host "[AI Hook] Running pre-commit validation..." -ForegroundColor Cyan

$forbiddenRegex = '\.env$|\.pem$|\.key$|id_rsa'
$stagedFiles = git diff --cached --name-only

$blocked = $stagedFiles | Where-Object { $_ -match $forbiddenRegex }
if ($blocked) {
    Write-Host "[AI Hook ERROR] Blocked: Attempting to commit secret or sensitive files:" -ForegroundColor Red
    $blocked | ForEach-Object { Write-Host " - $_" -ForegroundColor Red }
    exit 1
}

Write-Host "[AI Hook] Pre-commit checks passed." -ForegroundColor Green
exit 0
