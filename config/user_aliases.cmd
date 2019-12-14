;= @echo off
;= rem Call DOSKEY and use this file as the macrofile
;= %SystemRoot%\system32\doskey /listsize=1000 /macrofile=%0%
;= rem In batch mode, jump to the end of the file
;= goto:eof
;= Add aliases below here

e.=explorer .
gl=git log --oneline --all --graph --decorate  $*
gs=git status $*
ga=git add $*
gc=git commit $*
gp=git push origin master

ls=ls --show-control-chars -F --color $*
ll=ls -l -F --show-control-chars --color $*
pwd=cd
clear=cls
history=cat "%CMDER_ROOT%\config\.history"
unalias=alias /d $1
vi=gvim $*
cmderr=cd /d "%CMDER_ROOT%"
lp=cls $t dir
eh=%VI% "C:\windows\system32\drivers\etc\hosts"
qal=%VI% "%CMDER_ROOT%\config\user_aliases.cmd" $t alias/reload
sett=%VI% "%CMDER_ROOT%\config\user_profile.cmd"
min=c: $t cd %ME%
ana=cd C:\ProgramData\Anaconda3\envs
sub=sublime_text $*

