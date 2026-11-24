import type { Metadata, Viewport } from 'next';
import { SITE, type Lang } from '@/lib/site';
import { overpass, overpassMono } from '@/lib/fonts';
import { CallBar } from '@/components/CallBar';

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: '%s | ' + SITE.name },
  applicationName: SITE.name,
  formatDetection: { telephone: true },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export const siteViewport: Viewport = { themeColor: '#0B0D10', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={overpass.variable + ' ' + overpassMono.variable}>
      <body suppressHydrationWarning>
        <a href="#main" className="sr-only">{lang === 'es' ? 'Ir al contenido' : 'Skip to content'}</a>
        {children}
        <CallBar call={lang === 'es' ? 'Llamar ahora' : 'Call a Dispatcher'} text={lang === 'es' ? 'Texto' : 'Text'} />
      </body>
    </html>
  );
}
