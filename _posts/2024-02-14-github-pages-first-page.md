---
date: 2024-02-14 20:43:37
layout: post
title: "GitHub Pages First Page"
subtitle: "Let's create first page"
description: "GitHub Pages - First Page"
image: /assets/img/uploads/github_pages_Tutorial_big.png
optimized_image: /assets/img/uploads/github_pages_Tutorial_small.png
category: tutorial
tags:
  - web
  - git 
  - GitHub
  - "GitHub pages" 
author: pablo
paginate: false
---
This is second article in the series. [Previous article]({{ "/github-pages-tutorial-intro/" | prepend: site.baseurl }})
# GitHub Repo #
First we create GitHub Repository.
As usual you have few options here:
- To be page url **username.github.io**\* - create repository with such name.\
  \**username* is your login name on GitHub
- To be page url **username.github.io/reponame**\* - create repository with name *reponame*.
- You can also configure your domain which you bought in domain provider. However I will describe this in separate article

## Steps ##
Go to your profile icon in GitHub [main page](https://github.com)
![Create Repo 1](/assets/img/uploads/gh-pg-first-page/create_repo_1.png)
Click new to create repository
![Create Repo 2](/assets/img/uploads/gh-pg-first-page/create_repo_2.png)
In new window provide:
- Repsository name as desribed above
- Description
- Set repository as Public. This is manadatory to enable hosting page on GitHub Pages.
On free acounts it is not possible to use GitHub Pages from private repository.
![Create Repo 3](/assets/img/uploads/gh-pg-first-page/create_repo_3.png)
Your repository is now created and is empty. In empty repository GitHub provides command how to clone repo and README.md file. We will follow this will instuctions and add few additional steps.

# Git Settings #
It is time now to configure git and clone repository to your computers' hard drive.
I'm assuming that you have already installed Git. If not, you can install it in Linux Debian based distributions (Debian, Ubuntu, Linux Mint) using following commands.\
**Note:** Linux Mint is my operating system and favorite Linux distribution so I will be providing how make setup of various tools for this system. For now I will be providing links to configuration on different operating systems.
{% highlight bash %}
sudo apt update 
sudo apt ugrade
sudo apt-get install git
{% endhighlight %}
These commands do following operations:
- updates available packages list
- install avialbale updates for packages already installed
- install Git package if not already installed.
If you finish you can check if Git has been already installed, by check it's version
{% highlight bash %}
git --version
#output
git version 2.34.1
{% endhighlight %}
If you have as output from console Git version, this means you have successfuly installed Git.\
**For other opeatings systems:**<br>
Navigate to [Git downloads page](https://git-scm.com/downloads)

## Global Settings ##
Before you begin working with Git it is good to do initial setup.

Set your name or nickname.
{% highlight bash %}
git config --global user.name "Your Nick Name or Name"
{% endhighlight %} 

Set your e-mail.
{% highlight bash %}
git config --global user.email "yourname@yourdomain.com"
{% endhighlight %} 
If you don't want to make your e-mail adress available for public access you can set fake e-mail which is provides in your account settings:<br> 
[https://github.com/settings/emails](https://github.com/settings/emails)

Set default branch name.\
Default Git branch name is "master". Default branch name for GitHub is "main". So it is good to call your main branch as "main". This setting works for Git versions starting from 2.28.
If you have older version of git you will have to change default branch name every time you make new repository.
{% highlight bash %}
git config --global init.defaultBranch main
{% endhighlight %} 

Set default editor for commits etc.
Git need the setup of text editor for commits names, conflicts resolution etc. Default one is vim. Vim is console text editor for Git. However Vims is not very user friendly especially for new persons. In Linux you can use another popular console text editor Nano. Nano is much more user friendly. On Linux Mint you can use Xed which GUI text editor.
```bash
git config --global core.editor "xed"
```

Now you can verify your settings:
```bash
git config --global --list 
#output
user.email=yourname@yourdomain.com
user.name=Name
core.editor=xed
init.defaultbranch=main
```

# Create repository and push to server #

```bash
echo "# gh_pages_sandbox" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:username/reponame.git
git push -u origin main
```

