import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Lang } from '@/i18n/ui';

export type Post = CollectionEntry<'blog'>;

export const postLang = (post: Post) => post.id.split('/')[0] as Lang;
export const postSlug = (post: Post) => post.id.split('/').slice(1).join('/');
export const postUrl = (post: Post) => localizePath(`/blog/${postSlug(post)}/`, postLang(post));

/** Published posts for a language, newest first. Drafts are visible in `astro dev` only. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection(
    'blog',
    (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getTranslation(post: Post): Promise<Post | undefined> {
  const key = post.data.translationKey;
  if (!key) return undefined;
  const all = await getCollection('blog', (p) => !p.data.draft || import.meta.env.DEV);
  return all.find((p) => p.data.translationKey === key && postLang(p) !== postLang(post));
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
