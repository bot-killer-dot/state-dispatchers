import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, Receipt, Truck } from 'lucide-react';
import { SITE, absolute, href, type Lang } from '@/lib/site';
import { about, equipment, meta } from '@/lib/content';
import { breadcrumbLd, buildMetadata, organizationLd } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';

export function aboutMetadata(lang: Lang): Metadata {
  return buildMetadata({ lang, path: '/about', ...meta.about[lang] });
}

const WORK_ICONS = [Truck, CalendarCheck, Receipt];

export function AboutPage({ lang }: { lang: Lang }) {
  const t = about[lang];
  return (
    <>
      <JsonLd data={[organizationLd(lang), breadcrumbLd([{ name: SITE.name, url: absolute(href(lang, '/')) }, { name: t.kicker, url: absolute(href(lang, '/about')) }])]} />
      <Header lang={lang} path="/about" active="about" />
      <main id="main">
        <section className="container page-hero">
          <h1 className="h1">{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </section>

        <div className="container"><div className="photo-wide"><Image src="/images/about-team.jpg" alt={lang === 'es' ? 'Despachadores con audífonos trabajando en sus escritorios' : 'Dispatchers with headsets working at their desks'} fill sizes="(min-width: 1200px) 1200px, 100vw" /></div></div>

        <section className="container section split" aria-labelledby="why">
          <h2 id="why" className="h2">{t.whyTitle}</h2>
          <div className="stack-sm" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--gray-700)', gap: 16 }}><p>{t.why1}</p><p>{t.why2}</p></div>
        </section>

        <section className="section section--dark" aria-labelledby="promises">
          <div className="container stack">
            <h2 id="promises" className="h2">{t.promTitle}</h2>
            <ol className="promises">
              {t.promises.map(([pt, d]: string[], i: number) => (
                <li key={pt} className="promise"><span className="step__n" style={{ borderColor: 'var(--hivis)' }} aria-hidden>{i + 1}</span><h3>{pt}</h3><p>{d}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container section split" aria-labelledby="work">
          <div className="stack-sm">
            <h2 id="work" className="h2">{t.workTitle}</h2>
            <p className="muted">{t.workLead}</p>
          </div>
          <ol className="work">
            {t.work.map(([wt, d]: string[], i: number) => {
              const I = WORK_ICONS[i];
              return (
                <li key={wt}><span className="work__icon" aria-hidden><I size={26} /></span>
                  <div><small>{(lang === 'es' ? 'Paso ' : 'Step ') + (i + 1)}</small><h3>{wt}</h3><p>{d}</p></div></li>
              );
            })}
          </ol>
        </section>

        <section className="section section--gray" aria-labelledby="who">
          <div className="container split" style={{ alignItems: 'flex-start' }}>
            <div className="stack-sm">
              <h2 id="who" className="h2">{t.whoTitle}</h2>
              <p className="muted">{t.whoLead}</p>
            </div>
            <ul className="chips">
              {equipment.map((e) => <li key={e.slug}><Link href={href(lang, '/trucks/' + e.slug)}>{e.name}<ArrowRight size={18} aria-hidden /></Link></li>)}
            </ul>
          </div>
        </section>

        <div style={{ paddingTop: 'clamp(48px, 7vw, 88px)' }} />
        <CtaBand title={t.ctaTitle} lead={t.ctaLead}
          primary={{ label: t.contact, href: href(lang, '/contact') }}
          secondary={{ label: SITE.phoneDisplay, href: 'tel:' + SITE.phone, tel: true }} />
      </main>
      <Footer lang={lang} tagline={t.footer} />
    </>
  );
}
