# AI tutor mode: start the Library of Alexandria with its AI tutor and open it in the browser.
#   powershell -ExecutionPolicy Bypass -File "_template\tutor_mode.ps1" [-Port 8777] [-NoOpen]
# If the tutor server is already running on the port, it just opens the page.
# The server runs in its own minimised window. Close that window to stop the tutor.
param([int]$Port = 8777, [switch]$NoOpen)

$here   = Split-Path -Parent $MyInvocation.MyCommand.Path
$server = Join-Path $here "serve_archive.py"

function Get-Ping([int]$p) {
    try { return Invoke-RestMethod -Uri "http://127.0.0.1:$p/api/ping" -TimeoutSec 2 } catch { return $null }
}
function Test-PortBusy([int]$p) {
    try { $c = New-Object Net.Sockets.TcpClient; $c.Connect("127.0.0.1", $p); $c.Close(); return $true } catch { return $false }
}

$ping = Get-Ping $Port
if (-not ($ping -and $ping.tutor)) {
    if (Test-PortBusy $Port) {
        # Something else (for example a plain file server) holds the port: use the next free one.
        $p = $Port + 1
        while ((Test-PortBusy $p) -and $p -lt $Port + 20) {
            $q = Get-Ping $p
            if ($q -and $q.tutor) { break }
            $p++
        }
        $Port = $p
        $ping = Get-Ping $Port
    }
    if (-not ($ping -and $ping.tutor)) {
        Start-Process -FilePath "python" -ArgumentList @("`"$server`"", "--port", "$Port") -WindowStyle Minimized
        for ($i = 0; $i -lt 30; $i++) {
            Start-Sleep -Milliseconds 500
            $ping = Get-Ping $Port
            if ($ping) { break }
        }
    }
}

if (-not $ping) {
    Write-Output "FAILED: the tutor server did not start on port $Port. Check that Python is installed and try again."
    exit 1
}
$url = "http://127.0.0.1:$Port/"
if (-not $ping.tutor) {
    Write-Output "RUNNING WITHOUT TUTOR at $url (no model backend found). Sign the Claude CLI in, or set ANTHROPIC_API_KEY, then close the server window and run this again."
} else {
    Write-Output "AI TUTOR MODE ON at $url (backend: $($ping.backend)). Close the minimised server window to stop it."
}
if (-not $NoOpen) { Start-Process $url }
