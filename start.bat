@echo off
REM CAP Portal - Quick Start
REM Starts a local web server and opens the portal in your browser.

echo.
echo  CAP Portal
echo  ----------
echo.

REM Check for Python
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting server on http://localhost:8000
    echo Press Ctrl+C to stop.
    echo.
    start http://localhost:8000
    python -m http.server 8000
    goto :eof
)

REM Check for Node.js
npx --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting server on http://localhost:8000
    echo Press Ctrl+C to stop.
    echo.
    start http://localhost:8000
    npx http-server -p 8000 -c-1
    goto :eof
)

echo No web server found.
echo.
echo Install one of these:
echo   Python 3  -  https://www.python.org/downloads/
echo   Node.js   -  https://nodejs.org/
echo.
pause
exit /b 1
