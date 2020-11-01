---
title: "Deploy your hugo website with Netlify, Github pages and Vercel"
date: 2020-10-31T13:23:39+05:30
draft: false
subtitle: ""
author: "Gurusabarish"
tags:
  - Hugo
bg_image: ""
description: "Deploy your hugo website with Netlify, Github and Vercel step by step procedure."
---

Table of contents:

- [Build your website with "Hugo" comment](#build-your-website-with-hugo-comment)
- [Deploy your hugo website with Netlify](#deploy-your-hugo-website-with-netlify)
  - [**Manual deploy:**](#manual-deploy)
  - [**Deploy from github:**](#deploy-from-github)
- [Deploy your hugo website using Github Pages](#deploy-your-hugo-website-using-github-pages)
  - [**username.github.io** repository:](#usernamegithubio-repository)
  - [**Project repository**:](#project-repository)
- [Deploy without using build(*hugo*) comment](#deploy-without-using-buildhugo-comment)
  - [**Netlify method without using build comment**:](#netlify-method-without-using-build-comment)
  - [**Vercel method**:](#vercel-method)


## Build your website with "Hugo" comment 
Go to the terminal and type hugo to build website files with public folder. The public folder is used to deploy your hugo website. Now you should have a folder as the image.

*Note: You should delete the public folder for each time before using hugo comment.*

![hugo public folder](/images/blog/hugo-deployment/public-folder.PNG)



## Deploy your hugo website with Netlify
You can easily deploy your website using Netlify. There are two ways to deploy in Netlify. Here,

### **Manual deploy:**
In manual deploy, you should upload your website to netlify for each and every change. Lets see "how to deploy?", Now you have the public folder that has the all website files. 
- **Go to the [Netlify](https://netlify.com) switched to the site tap and drag and drop your public folder.** 
- Setup your [custom domain](https://docs.netlify.com/domains-https/custom-domains/) in netlify.


![netlify manual deploy](/images/blog/hugo-deployment/netlify-manual-deploy.PNG)
  
### **Deploy from github:**
You can also use the github as your source. To use this method, you should link your github account in netlify. After connecting, you can create a website from github also using the "git" button. 
- **Your github repository should have the files same as the public folder. You can push the public folder files in github.** 
- It will automatically update your website whenever your gihub source code is modify.

![netlify github deploy](/images/blog/hugo-deployment/git-netlify.PNG)


## Deploy your hugo website using Github Pages
Github allows to host your static website in github with free domain( username.github.io ). If you want to deploy your hugo website using github pages, you should have a github account and should know to [setup github pages](https://guides.github.com/features/pages/). In github, also two ways to deploy.

### **username.github.io** repository:
- Create a repository as your username followed by github.io *(username.github.io)*
- Push your public folder files to that github repo.
- In setting, enable the github pages.
- Now, you will get a website as your username.github.io

![netlify github deploy](/images/blog/hugo-deployment/github-deploy.PNG)

### **Project repository**:
This repo looks like ```username/project```. You should add [custom domain](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-custom-domains-and-github-pages) to your repo to create a website for this repository otherwise it will not work well. You can follow the same as above for further.

## Deploy without using build(*hugo*) comment
In this method, you can deploy your hugo website without using build comment. **It is also a backup for your website.** You should need github for use this method. *you don't need push the public folder to github.* Firstly, Push your hole hugo folder to your github repo. Your repo looks like below image. Here you can use two hosting companies one is **Netlify** and another one is **Vercel**. 

![netlify github deploy](/images/blog/hugo-deployment/github-repo.PNG)

### **Netlify method without using build comment**:
- It is same as the deploy netlify from github but, there are some difference.
- Create site from github that should link your repo.
- Then you should add a file called ```netlify.toml``` to that github repo that file contains the below content. For reference [this github repo](https://github.com/gurusabarish/hugo-profile)
```

[build]
publish = "public"
command = "hugo --gc --minify"

[context.production.environment]
HUGO_VERSION = "0.76.5"
HUGO_ENV = "production"
HUGO_ENABLEGITINFO = "true"

[context.split1]
command = "hugo --gc --minify --enableGitInfo"

[context.split1.environment]
HUGO_VERSION = "0.76.5"
HUGO_ENV = "production"

[context.deploy-preview]
command = "hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"

[context.deploy-preview.environment]
HUGO_VERSION = "0.76.5"

[context.branch-deploy]
command = "hugo --gc --minify -b $DEPLOY_PRIME_URL"

[context.branch-deploy.environment]
HUGO_VERSION = "0.76.5"

[context.next.environment]
HUGO_ENABLEGITINFO = "true"


```

### **Vercel method**:
*You don't need to add any extra files to your github repo.*
- Cerate a [Vercel](https://vercel.com) account
- Click the import project button and continue with github
- Paste the github repo URL
- Select the framework as hugo and move to deploy.

![Vercel deploy hugo website](/images/blog/hugo-deployment/vercel.PNG)

----------------------