#!/usr/bin/env bash

# Install command-line tools using Homebrew.

# Ask for the administrator password upfront.
sudo -v

# Keep-alive: update existing `sudo` time stamp until the script has finished.
while true; do
  sudo -n true
  sleep 60
  kill -0 "$$" || exit
done 2>/dev/null &

# Check for Homebrew,
# Install if we don't have it
if test ! $(which brew); then
  echo "Installing homebrew..."
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

# Make sure we’re using the latest Homebrew.
brew update

# Upgrade any already-installed formulae.
brew upgrade --all

# Update homebrew recipes
brew update

# Install GNU core utilities (those that come with OS X are outdated)
brew install coreutils
brew install gnu-sed --with-default-names
brew install gnu-tar --with-default-names
brew install gnu-indent --with-default-names
brew install gnu-which --with-default-names
brew install gnu-grep --with-default-names

# Install GNU `find`, `locate`, `updatedb`, and `xargs`, g-prefixed
brew install findutils

# Install Bash 4
brew install bash

PACKAGES=(
  apr
  apr-util
  asciidoc
  autoconf
  automake
  awscli
  bash
  bash-completion
  bison
  boost
  cmake
  coreutils
  cscope
  ctags
  curl
  dep
  direnv
  docbook
  docbook-xsl
  gcc
  gdbm
  gdrive
  gettext
  ghi
  git
  git-crypt
  git-lfs
  gmp
  gnu-sed
  go
  govendor
  gox
  gradle
  gradle@2.14
  heroku-node
  hub
  icu4c
  isl
  jemalloc
  jpeg
  jq
  json-c
  kompose
  kubeval
  lastpass-cli
  libassuan
  libevent
  libffi
  libgpg-error
  libidn2
  libmpc
  libpng
  libtermkey
  libunistring
  libuv
  libvterm
  libyaml
  libyubikey
  llvm@3.8
  llvm@4
  lua
  luajit
  lz4
  makedepend
  maven
  md5sha1sum
  mpfr
  msgpack
  ncurses
  neovim
  ninja
  nmap
  node
  nvm
  oniguruma
  openssl
  openssl@1.1
  packer
  pcre
  pcre2
  perl
  pinentry
  pkg-config
  protobuf
  pwgen
  pyenv
  python
  python@2
  readline
  reattach-to-user-namespace
  ruby
  sbt
  scala
  scons
  shellcheck
  shfmt
  socat
  source-highlight
  sphinx-doc
  sqlite
  stow
  subversion
  swig
  telnet
  tfenv
  tmux
  tree
  unibilium
  utf8proc
  vault
  watch
  wget
  xz
  yarn
  ykpers
  yubico-piv-tool
  zsh-syntax-highlighting
)

echo "Installing packages..."
brew install ${PACKAGES[@]}

echo "Cleaning up..."
brew cleanup

echo "Installing cask..."
brew install caskroom/cask/brew-cask

CASKS=(
  docker
  dotnet-sdk
  google-chrome
  google-cloud-sdk
  iterm2
  pdk
  sublime
  sublime-text
  vagrant
  virtualbox
  visual-studio-code
  slate
)

echo "Installing cask apps..."
brew cask install ${CASKS[@]}

echo "Installing fonts..."
brew tap caskroom/fonts
FONTS=(
  font-inconsolidata
  font-roboto
  font-clear-sans
)
brew cask install ${FONTS[@]}

# Install Slate window manager
cd /Applications && curl http://www.ninjamonkeysoftware.com/slate/versions/slate-latest.tar.gz | tar -xz
