#!/usr/bin/env bash
##########################
# bashenv Common Scipt
##########################



alias mkdir="mkdir -p"

alias myip="curl http://ipecho.net/plain; echo"

alias gp="git pull"


help(){
    #This function used to call the "bash" builtin.
    #bash -c "help $@"

    #Better way: look it up in the man pages. I often look up "test" which doesn't give a usefull result,
    #so I added that as a special case.
    if [[ $1 == "test" ]]; then
        man --pager="less -p'^CONDITIONAL EXPRESSIONS$''" zshall
    else
        man --pager="less -p'^ *$@ '" zshall
    fi
}
