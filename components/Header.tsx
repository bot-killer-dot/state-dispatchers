'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { SITE, href, type Lang } from '@/lib/site';
import { nav } from '@/lib/content';

type Props = { lang: Lang; path: string; active?: string; tone?: 'light' | 'dark' };

export function Header({ lang, path, active, tone = 'light' }: Props) {
  const [open, setOpen] = useState(false);
  const items = nav[lang];
  const langSwitch = (
    <div className="lang" role="group" aria-label="Language / Idioma">
      <a href={href('en', path)} hrefLang="en" aria-current={lang === 'en'}>EN</a>
      <a href={href('es', path)} hrefLang="es" aria-current={lang === 'es'}>ES</a>
    </div>
  );
  return (
    <header className={'hdr' + (tone === 'dark' ? ' hdr--dark' : '')}>
      <div className="container hdr__in">
        <Link href={href(lang, '/')} className="brand">State Dispatchers</Link>
        <nav aria-label="Main" className="nav only-wide">
          {items.map(([label, p, key]) => (
            <Link key={key} href={href(lang, p)} aria-current={active === key ? 'page' : undefined}>{label}</Link>
          ))}
        </nav>
        <div className="hdr__right">
          <a className="hdr__phone only-wide" href={'tel:' + SITE.phone}><Phone size={18} aria-hidden />{SITE.phoneDisplay}</a>
          {langSwitch}
          <button type="button" className="menu-btn only-narrow" aria-expanded={open} aria-controls="mnav" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mnav" aria-label="Main" className="mnav only-narrow">
          {items.map(([label, p, key]) => (
            <Link key={key} href={href(lang, p)} onClick={() => setOpen(false)}>{label}<ArrowRight size={20} aria-hidden /></Link>
          ))}
        </nav>
      )}
    </header>
  );
}
