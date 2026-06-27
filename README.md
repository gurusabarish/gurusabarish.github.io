# gurusabarish.github.io

Personal portfolio website for [Gurusabarish](https://github.com/gurusabarish) — Member Technical Staff at Zoho Corporation.

## Overview

A single-page portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step — just static files hosted on GitHub Pages.

Sections:
- **Hero** — intro, stats, and quick links
- **About** — background and social links
- **Skills** — tech stack grouped by proficiency tier
- **Experience** — work history timeline (Zoho, OntoBorn Technologies, Codebugged AI)
- **Education** — B.Tech in Information Technology, Bannari Amman Institute of Technology
- **Projects** — notable projects including hugo-profile
- **Open Source** — hugo-profile stats and contributions
- **Contact** — reach out form

## Project Structure

```
index.html          # Single-page HTML
css/
  base.css          # CSS variables, reset, typography
  nav.css           # Navigation bar and mobile drawer
  hero.css          # Hero section layout and styles
  components.css    # Reusable components (buttons, cards, tags)
  sections.css      # About, Skills, Experience, Education, Projects, Contact
  responsive.css    # Mobile and tablet breakpoints
js/
  main.js           # Scroll reveal, dynamic tenure calculations, mobile menu
```

## Running Locally

No build step needed. Just open `index.html` in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Live Site

[gurusabarish.github.io](https://gurusabarish.github.io)