# gurusabarish.github.io

Personal portfolio website for [Gurusabarish](https://github.com/gurusabarish) — Member Technical Staff at Zoho Corporation.

## Overview

A single-page portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks — CSS and JS stay split into small per-section files for easy maintenance, and [Vite](https://vitejs.dev) bundles/minifies them into a single CSS file and a single JS file only in the production build.

Sections:
- **Hero** — intro, stats, and quick links
- **About** — background and social links
- **Skills** — tech stack grouped by proficiency tier
- **Experience** — work history timeline (Zoho, OntoBorn Technologies, Codebugged AI)
- **Education** — B.Tech in Information Technology, Bannari Amman Institute of Technology
- **Projects** — notable projects including hugo-profile
- **Open Source** — hugo-profile stats and contributions
- **Contact** — reach out form

## Running Locally

```bash
npm install
npm run dev
```

This starts a Vite dev server that serves every CSS/JS file as-is (no bundling) so changes are instant and easy to debug.

## Production Build

```bash
npm run build
```

This compiles all files under `assets/css/` into one minified CSS file and all files under `assets/js/` into one minified JS file, output to `dist/`. Source files (`assets/css/*`, `assets/js/*`) are untouched and remain the single source of truth for development.

`npm run preview` serves the `dist/` build locally to sanity-check it before deploying.

## Deployment

`.github/workflows/deploy.yml` builds the site with Vite and publishes `dist/` to the `gh-pages` branch on every push to `main`, using [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages). This requires two one-time settings changes:
- **Settings → Pages → Build and deployment → Source** set to **Deploy from a branch** (`gh-pages`, `/ (root)`).
- **Settings → Actions → General → Workflow permissions** set to **Read and write permissions**, so the workflows can push to `gh-pages`.

## PR Previews

`.github/workflows/pr-preview.yml` builds every pull request with Vite (using [`rossjrw/pr-preview-action`](https://github.com/rossjrw/pr-preview-action)) and publishes it to `pr-preview/pr-<number>/` on the `gh-pages` branch, alongside the production site. A bot comment with the live preview URL (`https://gurusabarish.github.io/pr-preview/pr-<number>/`) is added to the PR and kept up to date as new commits are pushed. The preview folder is automatically removed once the PR is closed.

## Live Site

[gurusabarish.github.io](https://gurusabarish.github.io)