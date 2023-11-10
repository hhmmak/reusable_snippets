# Set up custom command line prompt

NEWLINE=$'\n'

# Load default color function : red, blue, green, cyan, yellow, magenta, black, & white; use %{$fg[color]%}, %{$reset_color%} to reset to default color
autoload -U colors && colors

# Load vcs information
autoload -Uz vcs_info

# Format the vcs_info_msg_0_ variable
zstyle ':vcs_info:git:*' formats '[%b]'

# precmd: execute before prompt is display, second precmd runs after first command is executed
precmd() {
  vcs_info
}

# substitute prompt with user-define prompt
setopt prompt_subst
# %n = name , %m = machine name , %~ = file path, %% = %
PS1='%{$fg[green]%}%n@%m %{$fg[blue]%}%~ ${NEWLINE}%{$fg[cyan]%}${vcs_info_msg_0_} %{$reset_color%}%% '
