$ErrorActionPreference = 'Stop'

$source = Resolve-Path (Join-Path $PSScriptRoot '..\..\..\core')
$destination = Join-Path (Join-Path $PSScriptRoot '..\public') 'core'

if (Test-Path $destination) {
  Remove-Item -LiteralPath $destination -Recurse -Force
}

New-Item -ItemType Directory -Force -Path (Split-Path $destination) | Out-Null
Copy-Item -LiteralPath $source -Destination $destination -Recurse -Force
