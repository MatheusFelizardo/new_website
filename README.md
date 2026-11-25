# matheusfelizardo.com.br

Personal website and blog — [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), fully static, in English (`/`) and Portuguese (`/pt/`).

## Getting started

Requires Node.js **>= 22.23.4** (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build locally
npm run check    # type-check .astro/.ts files
```

## Editing content

| What                                 | Where                                                     |
| ------------------------------------ | --------------------------------------------------------- |
| UI text (EN/PT)                      | `src/i18n/ui.ts`                                          |
| Experience, education, skills, links | `src/data/profile.ts`                                     |
| Projects                             | `src/content/projects/*.md` — one file per project        |
| Blog posts                           | `src/content/blog/en/*.md` and `src/content/blog/pt/*.md` |
| Resume PDFs                          | `public/documents/` (paths in `src/data/profile.ts`)      |
| Demo videos                          | `public/videos/`                                          |
| Theme colors                         | tokens at the top of `src/styles/global.css`              |

### Add a project

Create `src/content/projects/my-project.md`:

```md
---
title: My Project
summary:
  en: One-line description in English.
  pt: Descrição de uma linha em português.
tags: [React, TypeScript]
year: 2026
image: ../../assets/projects/my-project.png # optional, image goes in src/assets/projects/
video: my-project.mp4                        # optional, file in public/videos/
github: https://github.com/...               # optional
website: https://...                         # optional project website
document:                                    # optional downloadable file in public/
  href: /documents/my-paper.pdf
  label: { en: Paper (PDF), pt: Artigo (PDF) } # optional, defaults to "Download PDF"
featured: false                              # true = large card at the top
wip: false                                   # true = "In progress" label
order: 50                                    # higher = shown first
---
```

### Write a blog post

Create `src/content/blog/en/my-post.md` (URL `/blog/my-post/`) and, optionally, its translation at `src/content/blog/pt/meu-post.md` (URL `/pt/blog/meu-post/`):

```md
---
title: My post
description: Short summary — used for SEO, social cards and the post list.
pubDate: 2026-11-24
tags: [react]
translationKey: my-post   # same value in both languages links the translations
draft: false              # drafts only show up in `npm run dev`
---
```

`.mdx` is supported too, if you need components inside a post.

## SEO

Every page has a canonical URL, `hreflang` alternates (en / pt-BR / x-default), Open Graph and Twitter cards, and JSON-LD (`Person` + `WebSite` on the home page, `BlogPosting` on posts). The build also generates `sitemap-index.xml`, `robots.txt` and RSS feeds (`/rss.xml`, `/pt/rss.xml`). The site URL is set in `astro.config.mjs`.
