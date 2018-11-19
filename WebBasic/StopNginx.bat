set PATH=C:\MyDevelop\runtimes\nginx-1.14.1;%PATH%
rem %~dp0 is current dir 
set BASE_DIR=%~dp0
cd nginx
nginx -s stop -c %BASE_DIR%nginx\nginx.conf

