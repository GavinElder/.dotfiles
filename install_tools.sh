#!/usr/bin/env bash
#install brew 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
expect "Press RETURN to continue or any other key to abort "
send "\r"
#install zpretzo 
git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"
