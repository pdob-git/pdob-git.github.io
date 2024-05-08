---
date: 2024-05-08 18:37:55
layout: post
title: "Jekyll First Page"
subtitle: "GitHub Command Line Interface"
description: "Easier authentication and much much more" 
image: /assets/img/uploads/jekyll_first_page/jekyll-logo-first-page_big.png
optimized_image: /assets/img/uploads/jekyll_first_page/jekyll-logo-first-page_small.png
category: tutorial
tags:
  - web
  - git 
  - GitHub
  - "GitHub pages"
  - Jekyll 
author: pablo
paginate: false
---

# Jekyll First Page #

## Introduction ##

I previous articles we have learned how to create GitHub account, repository, host basic page on github pages and how to overcome login issues. In this article we will learn how to start using Jekyll - static sites generator fully compatible with GitHub pages.

## About Jekyll ##

Jekyll is a static site generator with built-in support for GitHub Pages and a simplified build process. Jekyll takes Markdown and HTML files and creates a complete static website based on your choice of layouts. Jekyll supports Markdown and Liquid, a templating language that loads dynamic content on your site. For more information, see [Jekyll](https://jekyllrb.com/).

Jekyll is not officially supported for Windows. However, there is the way to install it on Windows. I provide one of possible ways to install it below.

## Installation ##

### Jekyll on Ubuntu ###

The same scenario applies to Linux Mint.

Install dependencies \
Install Ruby and other prerequisites:

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

Avoid installing RubyGems packages (called gems) as the root user. Instead, set up a gem installation directory for your user account. The following commands will add environment variables to your ~/.bashrc file to configure the gem installation path:

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Finally, install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

Verify the install by issuing the `jekyll -v` command

That’s it! You’re ready to start using Jekyll On Ubuntu.

### Jekyll on Windows 10 ###

Here are the quick steps to install Jekyll on Windows

1. Download and install Ruby and the associated Devkit from [rubyinstaller.org](https://rubyinstaller.org)
2. Keep all options selected during the Ruby install
3. Click the checkbox to `run ridk` install on the final screen of the Ruby install
4. In the command window that appears, choose option 3 to install MSYS2 and the MINGW development toolchain
5. Open an new command window and install Jekyll on Windows with the following command:

```bash
gem install jekyll bundler
```

6. Verify the install by issuing the `jekyll -v` command.

That’s it! You’re ready to start using Jekyll on Windows.

## First Page ##

1. Create a new blog with the `jekyll new myblog` command
2. From the *myblog* folder created in the previous step issue the following command:

```bash
cd myblog
bundle exec jekyll serve
```

This builds and serves the page on a local server - your computer.

> **NOTE:** If you are using Ruby version 3.0.0 or higher, step 5 may fail. You may fix it by adding webrick to your dependencies: \
> `bundle add webrick`

Open a browser to [http://localhost:4000](http://localhost:4000) and view your Jekyll blog on Windows

## Congratulations ##

You have installed **Jekyll** and created first page using this tool. In next articles we will learn more and start modifying the page to our needs.

```bash
git branch 1_First_Page
rm index.html
jekyll new --force . 
bundle exec jekyll serve
```
