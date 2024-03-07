---
date: 2024-03-06 20:28:38
layout: post
title: "GitHub Authentication"
subtitle: "How to login to GitHub from terminal"
description: "Articles describes ways how to authenticate to GitHub via HTTPS and SSH"
image: /assets/img/uploads/github_auth/github_auth_lock_big.png
optimized_image: /assets/img/uploads/github_auth/github_auth_lock_small_scaled.png
category: tutorial
tags:
  - web
  - git 
  - GitHub
  - "GitHub pages" 
author: pablo
paginate: false
---

# GitHub Authentication #

## Introduction ##
If you are following articles about GitHub Pages you might have faced issues with logging into GitHub from the terminal to clone, pull, and push changes.\
GitHub has switched off the ability to log in through a password to its services. The only way to log in now to push changes is by using access tokens and ssh. So let's explain what it is.

## Access Tokens ##
In computer systems, an access token contains the security credentials for a login session and identifies the user, the user's groups, the user's privileges, and, in some cases, a particular application. In some instances, one may be asked to enter an access token (e.g. 40 random characters) rather than the usual password (it therefore should be kept secret just like a password). 

Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.

In addition, if you have chosen to allow users to log in through an Identity Provider (IDP), such as Facebook, the IDP will issue its access token to allow your application to call the IDP's API. For example, if your user authenticates using Facebook, the access token issued by Facebook can be used to call the Facebook Graph API. These tokens are controlled by the IDP and can be issued in any format.

Tokens usually have some information about the person who logged in (for example login id, timestamp, etc.) coded in a special format or are encoded using a custom (specific for the provider) cryptographic algorithm.\
More reading [Wikipedia - access token](https://en.wikipedia.org/wiki/Access_token)

## SSH - Secure Shell ##
SSH is a software package that enables secure system administration and file transfers over insecure networks. It is used in nearly every data center and every large enterprise.

The SSH protocol uses encryption to secure the connection between a client and a server. All user authentication, commands, output, and file transfers are encrypted to protect against attacks in the network. For details on how the SSH protocol works, see the [protocol page](https://en.wikipedia.org/wiki/Secure_Shell). To understand the SSH File Transfer Protocol, see the [SFTP page](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol).

The protocol works in the client-server model, which means that the connection is established by the SSH client connecting to the SSH server. The SSH client drives the connection setup process and uses public key cryptography to verify the identity of the SSH server. After the setup phase, the SSH protocol uses strong symmetric encryption and hashing algorithms to ensure the privacy and integrity of the data that is exchanged between the client and server.

SSH was designed on Unix-like operating systems, as a replacement for Telnet and for unsecured remote Unix shell protocols, such as the Berkeley Remote Shell (rsh) and the related rlogin and rexec protocols, which all use insecure, plaintext methods of authentication, like passwords. 

## Using HTTPS with a personal authentication token ##
The standard way to interact with a repository is via HTTPS. Using this option you enter your login and password to interact with repote repo on GitHub.

As of fall 2021, GitHub will no longer allow usage of a password alone. One of the options is to use a personal authentication token in place of a password.

You can clone a repository using HTTPS like this:

```bash
git clone https://github.com/ACCOUNT/REPO
```

You'll be asked to enter your username and password. You should provide your personal access token for GitHub.

### Generating Token ###

You can create a token using the following instructions:
- Verify your e-mail if you haven't done it yet. This task is very straight forward and you can find instructions [here](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address) 
- Go to your account settings. Click your avatar on the main GitHub page of your profile (right top corner) and in the menu on the right click **Settings**. This is the fourth option from the bottom (per user interface in 2024 :-) ). You can navigate to settings also directly:\
[https://github.com/settings/profile](https://github.com/settings/profile)
- In the left sidebar, click **Developer settings**
- In the left sidebar, under **Personal access tokens**, click **Fine-grained tokens**.
- Click Generate new token.
- Under the Token name, enter a name for the token.
- Under Expiration, select an expiration for the token.
- Optionally, under Description, add a note to describe the purpose of the token.
- Under Resource owner, select a resource owner. Most likely it will be your GitHub username.
- Under Repository access, select which repositories you want the token to access. For your private usage, you can select all.
- Under **Permissions**, select which permissions to grant the token. Depending on which resource owner and which repository access you specified, there are repository, organization, and account permissions. You should choose the minimal permissions necessary for your needs.\
If you don't know what permission you need you can experiment or at the beginning select all. Detailed information about this topic is available in the following article in GitHub documentation -"[Permissions required for fine-grained personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)".
- Click **Generate Token**.
- Copy the generated token and store it in a safe place. Access tokens should be secured the same way as passwords.

More about Github access tokens can be found [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

### Using Access Token with Git and GitHub ###

As mentioned above access tokens are used instead of passwords during HTTPS connection with GitHub. Simply enter your access token instead of your password:

```bash
$ git clone https://github.com/USERNAME/REPO.git
Username: YOUR_USERNAME
Password: YOUR_PERSONAL_ACCESS_TOKEN
```

To avoid the need to provide an access token every time you clone, pull, or push changes to the repository you can cache the access token.

```bash
# in memory:
git config --global credential.helper cache
# MacOS
git config --global credential.helper osxkeychain
# Windows
git config --global credential.helper wincred
```

To set the cache in memory to last for a particular amount of time, here 3600 seconds (i.e., 1 hour):

```
git config --global credential.helper 'cache --timeout=3600'
```

If you want to use a different credential helper for every repository, you can omit the '--global' flag.

To check if the credential helper is set up:

```bash
git config --get credential.helper
```

**NOTE:** I will provide more information on the recommended solution for credential helper on Linux later. I will update this article or write a new one and refer to it from here.

## GitHub via SSH ##

To use SSH, you need to put your SSH public key in your GitHub account.

### Generating SSH key ###

Before placing a public key into GitHub you need to generate it. If you have a proper key already which can be used to authenticate to GitHub you can omit this step. However, the best approach is to have different pairs of private and public keys for every service.

Instructions below describe steps to generate SSH keys.

- Open terminal/console
- Run the command below and replace e-mail with your GitHub e-mail address.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

This creates a new SSH key, using the provided email as a label.

```bash
> Generating public/private ALGORITHM key pair.
```

When you're prompted to "Enter a file in which to save the key", provide the file name for the key.\
**NOTE:** Be careful. If you accept the default name:\
*/home/YOU/.ssh/id_ALGORITHM* \
you can overwrite the existing key and lose access to the service connected with this key.
So special attention is required in this step.

- At the prompt, type a secure passphrase. The passphrase is simply a password to use the key.

```bash
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter the same passphrase again: [Type passphrase again]
```

- Add your SSH private key to the ssh-agent

```bash
ssh-add ~/.ssh/private_key_filename
```

### Copy public key to GitHub ###

Your public key file is found in the ~/.ssh directory on a Mac or Linux machine and will generally be a file ending in .pub. Go to [https://github.com/settings/keys](https://github.com/settings/keys) and copy/paste your public key from the public key file.

You can then clone a repository using the syntax of either of the following types:

```bash
git clone git@github.com:ACCOUNT/REPO.git
git clone ssh://github.com/ACCOUNT/REPO
```

To confirm you are using ssh, run

```bash
git config --get remote.origin.url
```

If you see either of the following, you know you're using SSH to interact with the repository.

```bash
git@github.com:username/reponame.git
ssh://github.com/username/reponame
```

## Summary ##

We have reviewed the ways to authenticate to GitHub using both ways HTTPS and SSH. Now you should be able to troubleshoot issues with authentication during interaction with remote repositories on GitHub.

