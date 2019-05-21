#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#

# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

export EDITOR=vim
export PAGER=less
export VISUAL=vim

# Import Common functions
# if [[ -s "~/.dotfiles/common.sh" ]]; then
#  source "~/.dotfiles/common.sh"
# fi

# Customize to your needs...
eval "$(direnv hook zsh)"

#alias goLand Needs manual creation tools > create command line launcher
alias goland='/usr/local/bin/goland'

# Add Visual Studio Code (code)
export PATH=/usr/local/Cellar/openssl/1.0.2m/bin:$PATH
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:/usr/local/MacGPG2/bin
export PATH=$PATH:/Library/Frameworks/Mono.framework/Versions/Current/Commands
export PATH=$PATH:/usr/local/munki
export PATH=$PATH:/opt/puppetlabs/bin:/Library/TeX/texbin
export PATH=$PATH:/improbable/tools/latest/mac
export PATH=$PATH:/Users/gavin/bin/gam
export PATH=$PATH:'/Applications/Visual Studio Code.app/Contents/Resources/app/bin'
export PATH=$PATH:/usr/local/munki

export SSH_AUTH_SOCK=${HOME}/.gnupg/S.gpg-agent.ssh
export OLDGAMPATH=/Users/gavin/bin/gam
export PATH=$PATH:$GOPATH/bin
export GOPATH=/Users/gavin/go
export PATH=$PATH:/Users/gavin/go

if [[ -s '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc' ]]; then
  source '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc'
fi

if [[ -s '/usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh' ]]; then
  source '/usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh'
fi

if [[ -s '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.zsh.inc' ]]; then
  source '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.zsh.inc'
fi

if [[ -s "${HOME}/.iterm2_shell_integration.zsh" ]]; then
  source "${HOME}/.iterm2_shell_integration.zsh"
fi

if [[ -s "/usr/local/opt/nvm/nvm.sh" ]]; then
  source "/usr/local/opt/nvm/nvm.sh"
  export NVM_DIR="$HOME/.nvm"
fi

# The next line updates PATH for the Google Cloud SDK.
if [[ -s '/Users/gavin/google-cloud-sdk/path.zsh.inc' ]]; then
  source '/Users/gavin/google-cloud-sdk/path.zsh.inc'
fi

# The next line enables shell command completion for gcloud.
if [[ -s '/Users/gavin/google-cloud-sdk/completion.zsh.inc' ]]; then
  source '/Users/gavin/google-cloud-sdk/completion.zsh.inc'
fi

alias gia='git add'
alias gib='git branch'
alias gic='git checkout'
alias gil='git log --author=$USER'
alias gip='git pull'
alias gis='git status'
alias gbrm="git branch | grep -v "master" | xargs git branch -D"
alias gbrp="git branch | grep -v "production" | xargs git branch -D"
alias :q="exit"
alias goland='/usr/local/bin/goland'
alias toolstrap='imp-tool sync state && imp-tool sync contents'







export MICROMDM_ENV_PATH=/Users/gavin/.micromdm/env
