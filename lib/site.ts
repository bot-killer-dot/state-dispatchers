export const LOCALES = ['en', 'es'] as const;
export type Lang = (typeof LOCALES)[number];
export const isLang = (v: string): v is Lang => (LOCALES as readonly string[]).includes(v);

export const SITE = {
  name: 'State Dispatchers',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.statedispatchers.com').replace(/\/$/, ''),
  phone: '+14156058130',
  phoneDisplay: '(415) 605-8130',
  email: 'statedispatchers@gmail.com',
  pricing: { percent: 6, weekly: 145, featured: 'percent' as 'percent' | 'weekly' | 'custom' },
};

/** Localised path: href('es', '/about') -> '/es/about', href('en', '/about') -> '/about' */
export function href(lang: Lang, p = '/'): string {
  const clean = p === '/' ? '' : p;
  if (lang === 'en') return clean || '/';
  return '/es' + clean;
}
export const absolute = (p: string) => SITE.url + (p === '/' ? '' : p);
