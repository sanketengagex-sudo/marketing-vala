@echo off
title Push Marketing Vala to GitHub
echo ========================================================
echo  Marketing Vala - Push to GitHub
echo ========================================================
echo.
echo Pushing code to https://github.com/sanketengagex-sudo/marketing-vala.git ...
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo  SUCCESS! Your code is now live on GitHub.
    echo.
    echo  GitHub Repository:
    echo  https://github.com/sanketengagex-sudo/marketing-vala
    echo.
    echo  Live Website URL (after enabling GitHub Pages):
    echo  https://sanketengagex-sudo.github.io/marketing-vala/
    echo ========================================================
) else (
    echo ========================================================
    echo  Push failed.
    echo  Please ensure you created the repository at:
    echo  https://github.com/new?name=marketing-vala
    echo ========================================================
)
echo.
pause
