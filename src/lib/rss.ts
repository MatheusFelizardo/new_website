import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, postUrl } from '@/lib/blog';
import { profile } from '@/data/profile';
import { htmlLang, useTranslations, type Lang } from '@/i18n/ui';

export async function blogFeed(context: APIContext, lang: Lang) {
  const t = useTranslations(lang);
  const posts = await getPosts(lang);
  return rss({
    title: `${profile.name} — ${t('blog.title')}`,
    description: t('blog.description'),
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: postUrl(post),
    })),
    customData: `<language>${htmlLang[lang]}</language>`,
  });
}
