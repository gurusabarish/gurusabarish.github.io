---
title: Host your hugo website using Github pages and Github action
date: 2021-08-03T07:55:14.637Z
image: '/images/uploads/web.png'
description: 'Host your hugo website using Github pages and Github action.'
author: 'Gurusabarish'
tags: ['Hugo']
categories: ['Web development']
draft: false
slug: /host-your-hugo-website
---

- Create Github account [here](https://github.com). Then, Create your Hugo website.
- Create a github repo named as your username.github.io and push your whole code to this repo.

## Build your website using github action

**Create an action in github from the action tab and paste this code in your action file.**

```yml
name: Build your hugo website

on:
  push:
  workflow_dispatch:

jobs:
  deploy:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          submodules: true
          fetch-depth: 0

      - name: Install Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.79.0'

      - name: Build
        run: hugo

      - name: Deploy to live website
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          #external_repository:  gurusabarish/hugo-profile-demo
          publish_branch: demo
          user_name: Github Actions deployment bot
          user_email: githubactionsbot@users.noreply.github.com
```

It will generate all static files of your website and create a branch called demo branch, push the file inside demo branch for each time whenever you update your repo.

## Connecting your demo branch with github pages

- Go to your settings tab of the repo. There, you can find the pages tab.
- Go to pages tab and enable github pages and select the source from demo branch.

_Now, your site is live at 'username.github.io'._
