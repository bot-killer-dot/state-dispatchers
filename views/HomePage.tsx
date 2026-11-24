import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, CircleCheck, Clock, FileText, Handshake, Phone, PhoneCall, PhoneIncoming, Route, Search, ArrowRight } from 'lucide-react';
import { SITE, href, type Lang } from '@/lib/site';
import { home, meta } from '@/lib/content';
import { buildMetadata, faqLd, organizationLd, websiteLd } from '@/lib/seo';
import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { LoadCard } from '@/components/LoadCard';
import { TruckGrid } from '@/components/TruckGrid';
import { Faq } from '@/components/Faq';
import { CtaBand } from '@/components/CtaBand';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export function homeMetadata(lang: Lang): Metadata {
  return buildMetadata({ lang, path: '/', ...meta.home[lang] });
}

const STORIES = [
  { img: '/images/driver-luis-flatbed.png', alt: 'Luis beside his flatbed loaded with steel coils', name: 'Luis M.', meta: 'Flatbed · Phoenix, AZ', q: 'q1' },
  { img: '/images/driver-ray-reefer.png', alt: 'Ray leaning on his truck at a truck stop at night', name: 'Ray T.', meta: 'Reefer · TX → GA', q: 'q2' },
  { img: '/images/driver-dana-boxtruck.png', alt: 'Dana in a hi-vis vest at the back of her box truck', name: 'Dana K.', meta: 'Box Truck · Ohio', q: 'q3' },
] as const;

export function HomePage({ lang }: { lang: Lang }) {
  const t = home[lang];
  const labels = { miles: t.miles, rate: t.rate, perMile: t.perMile };
  const amounts = { percent: SITE.pricing.percent + '%', weekly: '$' + SITE.pricing.weekly, custom: lang === 'es' ? 'Cotiza' : 'Quote' };
  const tiles = [
    { I: Handshake, t: t.t1T, d: t.t1D }, { I: PhoneCall, t: t.t2T, d: t.t2D },
    { I: FileText, t: t.t3T, d: t.t3D }, { I: Route, t: t.t4T, d: t.t4D },
  ];
  return (
    <>
      <JsonLd data={[organizationLd(lang), websiteLd(lang), faqLd(t.faq as [string, string][])]} />
      <section className="hero" aria-label={t.heroTitle}>
        <HeroSlider />
        <div className="hero__scrim" aria-hidden />
        <Header lang={lang} path="/" tone="dark" />
        <div className="container hero__body">
          <div className="hero__text">
            <h1 className="h1">{t.heroTitle}</h1>
            <p className="lead">{t.heroLead}</p>
            <div className="hero__ctas only-wide">
              <a className="btn btn--primary btn--on-dark" href={'tel:' + SITE.phone}><Phone size={22} aria-hidden />{t.call}</a>
              <Link className="btn btn--outline-light" href={href(lang, '/contact') + '#form'}>{t.callback}</Link>
            </div>
          </div>
          <div className="only-wide" style={{ flex: '0 1 420px' }}><LoadCard status={t.booked} labels={labels} /></div>
        </div>
      </section>
      <div className="loadcard-wrap only-narrow"><LoadCard status={t.booked} labels={labels} /></div>

      <main id="main">
        <ul className="container trust">
          {t.trust.map((b: string) => <li key={b}><Check size={18} aria-hidden />{b}</li>)}
        </ul>

        <TruckGrid lang={lang} title={t.weDispatch} hint={t.tapYours} />

        <section className="container section stack" aria-labelledby="handle-title">
          <div className="stack-sm">
            <h2 id="handle-title" className="h2">{t.handleTitle}</h2>
            <p className="muted">{t.handleLead}</p>
          </div>
          <ul className="tiles">
            <li className="tile tile--main">
              <Search size={32} aria-hidden />
              <div className="stack-sm" style={{ gap: 14 }}>
                <div><h3>{t.tMainT}</h3><p>{t.tMainD}</p></div>
                <ul className="tile__list">{t.tMainL.map((m: string) => <li key={m}><Check size={20} aria-hidden style={{ flexShrink: 0, marginTop: 1 }} />{m}</li>)}</ul>
              </div>
            </li>
            {tiles.map(({ I, t: tt, d }) => (
              <li key={tt} className="tile"><I size={28} aria-hidden /><div><h3>{tt}</h3><p>{d}</p></div></li>
            ))}
            <li className="tile tile--hi"><Clock size={28} aria-hidden style={{ flexShrink: 0 }} /><div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 12, alignItems: 'baseline' }}><h3>{t.t5T}</h3><p>{t.t5D}</p></div></li>
          </ul>
        </section>

        <section className="section section--gray" aria-labelledby="how-title">
          <div className="container stack" style={{ gap: 28 }}>
            <h2 id="how-title" className="h2">{t.howTitle}</h2>
            <ol className="steps">
              {t.steps.map(([s, d]: string[], i: number) => (
                <li key={s} className="step"><span className="step__n" aria-hidden>{i + 1}</span><div><h3>{s}</h3><p>{d}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container section stack" aria-labelledby="stories-title">
          <h2 id="stories-title" className="h2">{t.storiesTitle}</h2>
          <div className="stories">
            {STORIES.map((s) => (
              <figure key={s.name} className="story">
                <div className="story__img"><Image src={s.img} alt={s.alt} fill sizes="(min-width: 960px) 33vw, 100vw" /></div>
                <div className="story__body">
                  <blockquote>“{t[s.q]}”</blockquote>
                  <figcaption><b>{s.name}</b> · {s.meta}</figcaption>
                </div>
              </figure>
            ))}
          </div>
          <Link className="textlink" href={href(lang, '/about')}>{t.aboutLink}<ArrowRight size={20} aria-hidden /></Link>
        </section>

        <section id="pricing" className="section section--dark" aria-labelledby="price-title">
          <div className="container stack" style={{ gap: 28 }}>
            <div className="stack-sm" style={{ maxWidth: 640 }}>
              <h2 id="price-title" className="h2">{t.priceTitle}</h2>
              <p className="lead" style={{ color: 'var(--inv-2)' }}>{t.priceLead}</p>
            </div>
            <div className="plans">
              {(['percent', 'weekly', 'custom'] as const).map((k) => {
                const [label, period, desc, cta] = t.plans[k] as string[];
                const f = SITE.pricing.featured === k;
                return (
                  <div key={k} className={'plan' + (f ? ' plan--featured' : '')}>
                    <div className="plan__head"><h3 style={{ font: 'inherit' }}>{label}</h3>{f ? <span className="plan__tag">{t.pickTag}</span> : null}</div>
                    <div className="plan__price"><span className="plan__amount">{amounts[k]}</span><span className="plan__period">{period}</span></div>
                    <p>{desc}</p>
                    <Link className={'btn btn--block ' + (f ? 'btn--primary' : 'btn--outline-light')} href={href(lang, '/contact') + '#form'}>{cta}</Link>
                  </div>
                );
              })}
            </div>
            <div className="every">
              <h3>{t.everyPlan}</h3>
              <ul>{t.priceFeatures.map((f: string) => <li key={f}><CircleCheck size={22} aria-hidden style={{ flexShrink: 0 }} />{f}</li>)}</ul>
            </div>
          </div>
        </section>

        <Faq title={t.faqTitle} items={t.faq as [string, string][]} />
        <CtaBand title={t.ctaTitle} lead={t.ctaLead}
          primary={{ label: t.contactUs, href: href(lang, '/contact') }}
          secondary={{ label: t.aboutUs, href: href(lang, '/about') }} />
      </main>
      <Footer lang={lang} tagline={t.footer} hours={t.hours} />
    </>
  );
}
