import Link from 'next/link';
import { SITE, href, type Lang } from '@/lib/site';
import { nav } from '@/lib/content';

export function Footer({ lang, tagline, hours }: { lang: Lang; tagline: string; hours?: string }) {
  return (
    <>
      <div className="tape" aria-hidden />
      <footer className="ftr">
        <div className="container ftr__in">
          <div className="stack-sm" style={{ maxWidth: 340 }}>
            <span className="ftr__brand">State Dispatchers</span>
            <span>{tagline}</span>
          </div>
          <nav aria-label="Footer">
            {nav[lang].map(([label, p, key]) => <Link key={key} href={href(lang, p)}>{label}</Link>)}
          </nav>
          <div className="stack-sm">
            <a className="ftr__phone" href={'tel:' + SITE.phone}>{SITE.phoneDisplay}</a>
            {hours ? <span>{hours}</span> : null}
            <span>© {new Date().getFullYear()} State Dispatchers · {SITE.mc}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
