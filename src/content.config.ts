import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts live in `src/content/blog/<lang>/<slug>.md(x)`.
 * The folder name defines the language; the file name defines the URL slug.
 * Use the same `translationKey` in both languages to link translations.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      translationKey: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

/**
 * One Markdown file per project in `src/content/projects/`.
 * Only frontmatter is used; the body is ignored.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.object({ en: z.string(), pt: z.string() }),
      tags: z.array(z.string()),
      year: z.number().int(),
      image: image().optional(),
      /** File name inside `public/videos/` */
      video: z.string().optional(),
      github: z.url().optional(),
      /** Live website of the project */
      website: z.url().optional(),
      /** Downloadable file (e.g. a thesis or paper) inside `public/` */
      document: z
        .object({
          href: z.string().startsWith('/'),
          label: z.object({ en: z.string(), pt: z.string() }).optional(),
        })
        .optional(),
      /** Featured projects get a large card at the top of the section */
      featured: z.boolean().default(false),
      wip: z.boolean().default(false),
      /** Higher numbers appear first */
      order: z.number().default(0),
    }),
});

export const collections = { blog, projects };
