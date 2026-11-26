import type { MetadataRoute } from 'next';
import { absolute, href, LOCALES } from '@/lib/site';
import { equipment } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/about', '/contact', '/terms', '/privacy', ...equipment.map((e) => '/trucks/' + e.slug)];
  const now = new Date();
  return paths.flatMap((p) => LOCALES.map((lang) => ({
    url: absolute(href(lang, p)),
    lastModified: now,
    changeFrequency: p === '/' ? 'weekly' as const : 'monthly' as const,
    priority: p === '/' ? 1 : p.startsWith('/trucks') ? 0.8 : 0.6,
    alternates: { languages: { en: absolute(href('en', p)), es: absolute(href('es', p)) } },
  })));
}
