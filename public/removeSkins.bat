@echo off
setlocal
cls
set var=%cd%
set _folder="%AppData%\Minecraft Education Edition\games\com.mojang\skin_packs" 

:Check
for /F %%A in ('dir /b /a %_folder%') Do (
    goto :List
)
    echo the custom installed skins folder is empty
    goto :Exit
    EXIT /B 0
:List
    echo.
    echo this is the list of installed skin packs:
    echo ------------------------------------
    dir /B "%AppData%\Minecraft Education Edition\games\com.mojang\skin_packs"    

    echo ------------------------------------
    echo.
    set /p skinName=please enter skin pack name to delete or press x to exit:
    echo.
    set skinPath=%AppData%\Minecraft Education Edition\games\com.mojang\skin_packs

    if %skinName% ==x (goto :Exit)
    
    CALL :Remove
Exit /B %ERRORLEVEL% 

:Remove
    cd %skinPath%
    rmdir /s "%skinPath%\%skinName%"
    cd %var%
    echo %skinName% deleted
    @REM dir /B "%AppData%\Minecraft Education Edition\games\com.mojang\skin_packs"
    CALL :Another
Exit /B 0

:Another
    echo.
    set /p delAnother=would you like to remove another skin Y/N?
    if %delAnother% ==y (CALL :Check) else (goto :Exit)

:Exit 
    @REM echo done
Exit /B 0