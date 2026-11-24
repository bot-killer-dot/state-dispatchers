import type { Metadata } from 'next';
import { SITE, href, absolute, type Lang } from './site';

type Args = { lang: Lang; path: string; title: string; description: string; image?: string };

export function buildMetadata({ lang, path, title, description, image = '/images/hero-truck-dusk.png' }: Args): Metadata {
  const url = absolute(href(lang, path));
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: absolute(href('en', path)), es: absolute(href('es', path)), 'x-default': absolute(href('en', path)) },
    },
    openGraph: {
      type: 'website', url, title, description, siteName: SITE.name,
      locale: lang === 'es' ? 'es_US' : 'en_US', alternateLocale: lang === 'es' ? 'en_US' : 'es_US',
      images: [{ url: image, width: 1600, height: 900, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function organizationLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': SITE.url + '/#org',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: SITE.url + '/images/hero-truck-dusk.png',
    description: lang === 'es'
      ? 'Despacho de camiones para owner-operators y flotas pequeñas en los 48 estados.'
      : 'Truck dispatch service for owner-operators and small fleets in all 48 states.',
    areaServed: { '@type': 'Country', name: 'United States' },
    availableLanguage: ['English', 'Spanish'],
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    priceRange: SITE.pricing.percent + '% per load or $' + SITE.pricing.weekly + '/week',
  };
}

export function websiteLd(lang: Lang) {
  return { '@context': 'https://schema.org', '@type': 'WebSite', url: absolute(href(lang, '/')), name: SITE.name, inLanguage: lang, publisher: { '@id': SITE.url + '/#org' } };
}

export function faqLd(items: [string, string][]) {
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

export function serviceLd(lang: Lang, name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org', '@type': 'Service',
    serviceType: name + (lang === 'es' ? ' — despacho de camiones' : ' truck dispatch'),
    name, description, url: absolute(href(lang, path)),
    provider: { '@id': SITE.url + '/#org' },
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: [
      { '@type': 'Offer', price: SITE.pricing.percent, priceCurrency: 'USD', description: SITE.pricing.percent + '% of line haul per load' },
      { '@type': 'Offer', price: SITE.pricing.weekly, priceCurrency: 'USD', description: 'Flat weekly fee per truck' },
    ],
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}
