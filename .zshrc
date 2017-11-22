#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#   Customised by Gavin

# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

# Customize to your needs...
eval "$(direnv hook zsh)"

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/gavin/google-cloud-sdk/path.zsh.inc' ]; then source '/Users/gavin/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/gavin/google-cloud-sdk/completion.zsh.inc' ]; then source '/Users/gavin/google-cloud-sdk/completion.zsh.inc'; fi

#Use Brew Python over Mac System
export PATH=/usr/local/share/python:$PATH
export PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/go/bin:/usr/local/MacGPG2/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/usr/local/munki:/opt/puppetlabs/bin:/Library/TeX/texbin:/improbable/tools/latest/mac:"

#Setup GoPath for system use however DirEnv is used for most repos
export GOPATH="$HOME/go"
export PATH=$PATH:$GOPATH/bin

# Add Visual Studio Code (code)
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"

#Add GAM to system Path
export PATH="$PATH/Users/gavin/bin/gam:/"

#Add Gcloud SDK to Path
export PATH="$PATH/Users/gavin/google-cloud-sdk/bin"

#Use openssl Instead of libressl
export PATH=/usr/local/Cellar/openssl/1.0.2l/bin:$PATH

#Use ZSH syntax highlighting
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

#bind ssh agent to GPG smart card
export SSH_AUTH_SOCK=${HOME}/.gnupg/S.gpg-agent.ssh
