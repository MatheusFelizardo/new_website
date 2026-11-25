import { getCollection } from 'astro:content';

export async function getProjects() {
  const all = await getCollection('projects');
  const sorted = all.sort((a, b) => b.data.order - a.data.order || b.data.year - a.data.year);
  return {
    featured: sorted.filter((p) => p.data.featured),
    others: sorted.filter((p) => !p.data.featured),
  };
}
