@echo off
setlocal
set var=%cd%
set _folder="%AppData%\Minecraft Education Edition\games\com.mojang\skin_packs" 

for /F %%A in ('dir /b /a %_folder%') Do (
    echo The folder is NOT empty
    goto :List
)
echo the folder is empty
goto :Exit

:List
 dir /B "%AppData%\Minecraft Education Edition\games\com.mojang\skin_packs"    
set /p skinName=please enter pack name to delete:
@REM set result=false
set skinPath=%AppData%\Minecraft Education Edition\games\com.mojang\skin_packs
CALL :Remove
Exit /B %ERRORLEVEL% 

:Remove
cd %skinPath%
rmdir /s "%skinPath%\%skinName%"
cd %var%
echo %skinName% deleted
dir /B "%AppData%\Minecraft Education Edition\games\com.mojang\skin_packs"
CALL :Another
Exit /B 0

:Another
set /p delAnother=would you like to remove another skin Y/N?
if %delAnother% ==y (CALL :List) else (goto :Exit)

:Exit 
echo done
pause