@echo off
title Marketing Vala - Local HTTP Server
echo ========================================================
echo  Marketing Vala - Local HTTP Server (Port 8080)
echo ========================================================
echo.
echo Starting local web server at http://localhost:8080/ ...
echo Press Ctrl+C in this window anytime to stop the server.
echo.
start "" "http://localhost:8080/"
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$listener = New-Object System.Net.HttpListener; ^
   $listener.Prefixes.Add('http://localhost:8080/'); ^
   $listener.Start(); ^
   Write-Host 'Server running at http://localhost:8080/ (Press Ctrl+C to stop)'; ^
   while ($listener.IsListening) { ^
     $context = $listener.GetContext(); ^
     $request = $context.Request; ^
     $response = $context.Response; ^
     $path = $request.Url.LocalPath.TrimStart('/'); ^
     if ([string]::IsNullOrEmpty($path)) { $path = 'index.html' }; ^
     $filePath = Join-Path (Get-Location) $path; ^
     if (Test-Path $filePath -PathType Leaf) { ^
       $bytes = [System.IO.File]::ReadAllBytes($filePath); ^
       $ext = [System.IO.Path]::GetExtension($filePath).ToLower(); ^
       $mime = switch ($ext) { ^
         '.html' { 'text/html; charset=utf-8' } ^
         '.css'  { 'text/css; charset=utf-8' } ^
         '.js'   { 'application/javascript; charset=utf-8' } ^
         '.svg'  { 'image/svg+xml' } ^
         '.json' { 'application/json' } ^
         '.png'  { 'image/png' } ^
         '.jpg'  { 'image/jpeg' } ^
         default { 'application/octet-stream' } ^
       }; ^
       $response.ContentType = $mime; ^
       $response.ContentLength64 = $bytes.Length; ^
       $response.OutputStream.Write($bytes, 0, $bytes.Length); ^
     } else { ^
       $response.StatusCode = 404; ^
     }; ^
     $response.OutputStream.Close(); ^
   }"
pause
