# Personal Portfolio – Wildiney Fernando Di Masi

This repository contains the source code for my personal website and professional portfolio. It showcases selected projects where I worked as a Product Designer and UX Researcher, along with case studies that detail my process, methodology, and product thinking.

**Live site**: [wildiney.com](https://wildiney.com)

## About the Project

My portfolio was built with clarity, accessibility, and performance in mind. It highlights work developed for various industries, from e-commerce to public service, with a focus on design quality, user experience, and product strategy.

The site is responsive, fast, SEO-friendly, and available in three languages: Portuguese (default), English, and Spanish.

## Tech Stack

- [Astro 5](https://astro.build/) — static site generator with file-based routing and native i18n
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling via `@tailwindcss/vite`
- [Storybook 10](https://storybook.js.org/) — component development and documentation
- Deployed via **GitHub Pages**

## Commands

```bash
pnpm dev              # Start dev server (localhost:4321)
pnpm build            # Build static site to dist/
pnpm preview          # Preview built site
pnpm lint             # ESLint
pnpm storybook        # Start Storybook (localhost:6006)
pnpm deploy           # Build + deploy to GitHub Pages
```

## Project Structure

```
.
├── content/
│   ├── articles/[slug]/     # Markdown articles (pt.md, en.md, es.md)
│   └── case-studies/[slug]/ # Markdown case studies (pt.md, en.md, es.md)
├── messages/                # i18n strings (pt.json, en.json, es.json)
├── public/
│   └── images/              # WebP images
├── src/
│   ├── components/          # Astro components
│   ├── integrations/        # Custom Astro integrations (llms-txt)
│   ├── lib/                 # Content utilities (articles, case studies)
│   ├── pages/               # File-based routes
│   └── styles/globals.css   # Tailwind directives + design tokens
├── astro.config.mjs
└── README.md
```

## i18n

Three locales: Portuguese (default, no URL prefix), English (`/en/`), Spanish (`/es/`). Content falls back to `pt.md` if a locale file is missing.

## LLM-friendly content

The site generates `llms.txt` files at build time for each locale:

- `https://wildiney.com/llms.txt`
- `https://wildiney.com/en/llms.txt`
- `https://wildiney.com/es/llms.txt`

## Contact

- [wildiney.com](https://wildiney.com)
- [LinkedIn](https://linkedin.com/in/wildiney)
