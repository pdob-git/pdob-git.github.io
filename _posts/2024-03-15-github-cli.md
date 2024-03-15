---
date: 2024-03-15 10:43:31
layout: post
title: "GitHub CLI"
subtitle: "GitHub Command Line Interface"
description: "Easier authentication and much much more" 
image: /assets/img/uploads/github_cli/github_cli_big.png
optimized_image: /assets/img/uploads/github_cli/github_cli_small.png
category: tutorial
tags:
  - web
  - git 
  - GitHub
  - "GitHub pages" 
author: pablo
paginate: false
---

# GitHub - Command Line Interface #

## Introduction ##

In the previous article about authentication to GitHub, we have learned details on how to log into GitHub from the command line to pull and push changes in GitHub repositories. Managing access tokens and SSH keys can look complicated, especially for new users.\
Fortunately, there is a simpler way. This is the GitHub Command Line Interface. This tool also brings a lot more functionalities. So let's dive a little bit deeper into this topic.

## Installation ##

GitHub CLI `gh` is available for many OS. 

### Linux Mint and other Debian based ###

For Linux Mint and other distributions based on Debian like Ubuntu which are using `apt` package manager, the steps are as follows.\
We download the gpg key. We add the GitHub repository to the sources list. Then we update `apt` repositories from the sources list. In the end, we install it from `apt`. 

Commands using `curl`.

```bash
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \\
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \\
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \\
&& sudo apt update \\
&& sudo apt install gh -y
```

Commands using `wget`.

```bash
sudo mkdir -p -m 755 /etc/apt/keyrings && wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

### Other Linux & BSD ###


For more information, see [Linux & BSD installation](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

### macOS

`gh` is available via **Homebrew**, **MacPorts**, **Conda**, **Spack**, **Webi**, and as a downloadable binary from the [releases page](https://github.com/cli/cli/releases).

#### Homebrew ####

| Install:          | Upgrade:          |
| ----------------- | ----------------- |
| `brew install gh` | `brew upgrade gh` |

#### MacPorts ####

| Install:               | Upgrade:                                       |
| ---------------------- | ---------------------------------------------- |
| `sudo port install gh` | `sudo port selfupdate && sudo port upgrade gh` |

#### Conda ####

| Install:                                 | Upgrade:                                |
|------------------------------------------|-----------------------------------------|
| `conda install gh --channel conda-forge` | `conda update gh --channel conda-forge` |

Additional Conda installation options available on the [gh-feedstock page](https://github.com/conda-forge/gh-feedstock#installing-gh).

#### Spack ####

| Install:           | Upgrade:                                 |
| ------------------ | ---------------------------------------- |
| `spack install gh` | `spack uninstall gh && spack install gh` |

#### Webi ####

| Install:                            | Upgrade:         |
| ----------------------------------- | ---------------- |
| `curl -sS https://webi.sh/gh \| sh` | `webi gh@stable` |

For more information about the Webi installer see [its homepage](https://webinstall.dev/).

### Windows ###

`gh` is available via **WinGet**, **scoop**, **Chocolatey**, **Conda**, **Webi**, and as downloadable MSI.

#### WinGet ####

| Install:            | Upgrade:            |
| ------------------- | --------------------|
| `winget install --id GitHub.cli` | `winget upgrade --id GitHub.cli` |

#### scoop ####

| Install:           | Upgrade:           |
| ------------------ | ------------------ |
| `scoop install gh` | `scoop update gh`  |

#### Chocolatey ####

| Install:           | Upgrade:           |
| ------------------ | ------------------ |
| `choco install gh` | `choco upgrade gh` |

#### Signed MSI ####

MSI installers are available for download on the [releases page](https://github.com/cli/cli/releases).

> **NOTE:** More information on installations instructions is available on official [GitHub CLI page](https://cli.github.com/) 

## Authentication ##

Authentication to GitHub with `gh` is much simpler than the traditional way, described in the previous article.\
[GitHub Authentication]({{ site.baseurl }}{% link _posts/2024-03-06-github-authentication.md %})

The steps are as follows:
- `gh auth login` command in console
- Select what repository we want to log in to, GitHub or GitHub Enterprise on a custom corporate domain.
- Select the protocol HTTPS or SSH.
- If HTTPS was selected, the next step is to select the method: Access Token or with web browser
- When the web browser is selected, after hitting "Enter" the GitHub web page opens in your default web browser.
- Enter the code provided in the console and if you have two-factor authentication configured confirm login with your selected method (GitHub Mobile, Authentication app, etc.)

The full sequence in the console is shown below:
```bash
 gh auth login
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations on this host? HTTPS
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: 51EC-2A56
Press Enter to open github.com in your browser... 
```

The steps when we select **SSH** are very similar. We can provide our key or skip and log in with the browser the same way as for HTTPS.

## Other options ##

Except for simpler authentication `gh` has many other useful features specific to GitHub and not available from git.
It enables the management of repositories, gists, projects, pull requests, and much much more...
Documentation is available on [page](https://cli.github.com/manual/).