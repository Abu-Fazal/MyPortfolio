param (
    [Parameter(Mandatory=$true, ValueFromRemainingArguments=$true)]
    [string[]]$CommandArgs
)

$fullCmd = $CommandArgs -join " "
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$validator = Join-Path $scriptDir "guardrail-validator.py"

python $validator $fullCmd
if ($LASTEXITCODE -ne 0) {
    exit 1
}
exit 0
