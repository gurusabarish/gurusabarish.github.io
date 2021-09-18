---
title: Connect netlify cms with hugo website
date: 2021-09-04T14:54:37.000Z
description: Connect you hugo website to netlify cms
author: Gurusabarish
image: /images/uploads/web.png
tags:
  - Hugo
categories:
  - Web development
slug: /connect-netlifycms-to-hugo
---

In this article, We are gonna connect your hugo website to netlify cms. Prerequirements: `Netlify account, basic knowledge about hugo and netlify cms`.

## What is netlify cms?

Netlify CMS is **an open source content management system for your Git workflow** that enables you to provide editors with a friendly UI and intuitive workflows.

## What is hugo?

_Hugo is a fast and modern static site generator written in Go._

## Hugo project folder structure

```
- archetypes
- content
- themes
- static
- config.yaml
```

## Connect netlify cms with your hugo site

- Create a folder named as `admin` inside static folder and create two files named as `config.yaml` and `index.html`.

- Paste the below code inside `config.yaml` file.

```yml
backend:
  name: git-gateway
  branch: main # Branch to update (optional; defaults to master)
media_folder: static/img
public_folder: /img
collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'content/blog'
    create: true
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    editor:
      preview: false
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

- Paste the below code inside `index.html` file.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
    <!-- Include the script that enables Netlify Identity on this page. -->
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Netlify CMS -->
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
  </body>
</html>
```

- Now, deploy your site in netlify and enable netlify identity in your site settings.

#### References

- [official docs](https://www.netlifycms.org/docs/hugo)

#### Keywards

- Hugo with netlify cms
- Connect your hugo site with netlify cms
- Netlify cms and hugo
