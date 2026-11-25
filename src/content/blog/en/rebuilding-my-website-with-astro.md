---
title: Rebuilding my website with Astro
description: Why I moved my personal site from Next.js 12 to Astro and Tailwind, and what I learned along the way.
pubDate: 2026-11-24
tags: [astro, tailwind, seo, i18n]
translationKey: rebuilding-with-astro
draft: false
---

I built my old website back in 2022 with Next.js 12, Ant Design and styled-components. It worked, and for a while I was happy with it. But every time I opened the project I felt the same thing. Too much code for a page that is mostly text, a layout that looked dated, and content spread across React components that I had to edit by hand.

So I decided to start over instead of patching it.

## What was wrong with the old version

The biggest problem was the way it handled languages. The site had a single URL, and the language lived in `localStorage`. A small `translate` function looked up each English sentence in a big dictionary and swapped it for the Portuguese one in the browser. It was a fun solution at the time, but search engines only ever saw the English version, and there was no way to share a link to the Portuguese page.

On top of that, the site shipped a component library, a CSS-in-JS runtime and a few animation libraries just to show a profile, a timeline and some projects. The design also relied on a side menu and an intro screen that felt very 2020.

## What I wanted from the new one

I wrote down a short list before touching any code.

- It should be static HTML first, fast, and easy for search engines to read.
- English and Portuguese should each have their own URL.
- A blog that is easy to update.
- An easy way to update the list of projects.
- The theme toggle and the resume download in both languages had to stay.

## Why Astro

I considered moving to the latest Next.js, but this site is content, not an app. Astro renders everything to HTML at build time and only sends JavaScript when a component really needs it. In this site that means a few tiny scripts for the theme toggle, the resume menu and closing dialogs. Everything else is plain HTML and CSS.

Astro also comes with i18n routing and content collections out of the box, which covered two of my requirements without extra libraries.

## How languages work now

English lives at the root and Portuguese lives under `/pt/`. Every page tells search engines about its translation with `hreflang` tags, and the language switch in the header takes you to the same page in the other language. Blog posts are linked by a shared key in their frontmatter, so if a post exists in both languages the switch goes straight to the translation. If it doesn't, it sends you to the blog index instead.

All the interface text sits in a single file with the two languages side by side, which makes it hard to forget a translation.

## Content as files

Projects and posts are now content collections. Each one has a schema validated with Zod, so if I forget a required field or type a broken URL the build fails and tells me exactly what is missing. A post is a Markdown file inside `en` or `pt`, and the folder decides the language. Drafts show up while I'm writing locally and stay out of the production build.

Projects work the same way. One Markdown file per project with a short summary in each language, the stack, and optional links for the website, the code, a demo video or a downloadable document. That last one is how my master's thesis ended up on the CAPE-KIDS card.

## Styling with Tailwind

I started with plain CSS and later moved everything to Tailwind v4. The colors are defined once as CSS variables for light and dark mode, and Tailwind exposes them as regular utilities. So a class like `bg-surface` or `text-fg-muted` just works in both themes.

The move also fixed a bug I hadn't noticed at first. The theme toggle was showing the sun and the moon at the same time. Astro scopes component styles, and my rule to hide one of the icons never reached the SVG, because the icon was rendered by a different component. With Tailwind the classes are global, so `dark:hidden` on the icon just does its job.

## Dark mode without the flash

The theme is set by a tiny inline script in the head that runs before the page paints. It reads your saved choice or falls back to your system preference. That way the page never flashes white before turning dark. When you click the toggle, the switch is animated with the View Transitions API in browsers that support it.

## Small details I enjoyed

- Sections fade in as you scroll using CSS scroll-driven animations, with no JavaScript involved.
- The resume menu is a native `details` element, so it works even before any script loads.
- Images go through Astro's image pipeline and are served as resized WebP files.
- Navigating between pages uses cross-document view transitions, so it feels smooth without turning the site into a single page app.

## SEO basics, done properly

Every page now has a canonical URL, Open Graph and Twitter tags, and structured data. The home page describes me as a Person and the posts are marked up as BlogPosting. The build also generates a sitemap, a robots file and an RSS feed for each language.

## Cleaning up

The last step was deciding what to remove. The intro screen, the side menu, the old projects page and the hobbies tab are gone. I also dropped the beginner projects I had been carrying around since 2020. They were important for learning, but they no longer represent the kind of work I do. The projects that stayed are the ones I'm proud of today, like my master's thesis and ArckDoc.

## What's next

Now that writing is as easy as creating a file, I want to use this space to share notes about front-end architecture, things I learn while building ArckDoc, and anything else I find worth writing down.

Thanks for reading.
