import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, CircleCheck, Phone } from 'lucide-react';
import { SITE, absolute, href, type Lang } from '@/lib/site';
import { equipment, getEquipment, truckUi } from '@/lib/content';
import { breadcrumbLd, buildMetadata, serviceLd } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { NamedIcon } from '@/components/Icons';

const titleFor = (lang: Lang, name: string) => (lang === 'es' ? 'Despacho de ' + name : name + ' Dispatch');

export function truckMetadata(lang: Lang, slug: string): Metadata {
  const e = getEquipment(slug);
  if (!e) return {};
  return buildMetadata({
    lang, path: '/trucks/' + slug,
    title: titleFor(lang, e.name) + (lang === 'es' ? ' para Owner-Operators' : ' for Owner-Operators'),
    description: e[lang].lead + ' ' + (lang === 'es' ? '6% por carga o $' + SITE.pricing.weekly + '/semana. Sin contrato.' : SITE.pricing.percent + '% per load or $' + SITE.pricing.weekly + '/week. No contract.'),
    image: e.photos[0] || undefined,
  });
}

export function TruckPage({ lang, slug }: { lang: Lang; slug: string }) {
  const e = getEquipment(slug);
  if (!e) notFound();
  const c = e[lang];
  const ui = truckUi[lang];
  const title = titleFor(lang, e.name);
  const getLoads = lang === 'es' ? 'Cargas de ' + e.name : 'Get ' + e.name + ' loads';
  const path = '/trucks/' + slug;
  return (
    <>
      <JsonLd data={[
        serviceLd(lang, e.name, c.lead, path),
        breadcrumbLd([{ name: SITE.name, url: absolute(href(lang, '/')) }, { name: title, url: absolute(href(lang, path)) }]),
      ]} />
      <Header lang={lang} path={path} active="trucks" />
      <main id="main">
        <div className="container"><Link className="back" href={href(lang, '/') + '#trucks'}><ArrowLeft size={20} aria-hidden />{ui.back}</Link></div>

        <section className="container" style={{ paddingTop: 8 }}>
          <div className="eq-hero">
            {e.photos[0]
              ? <Image src={e.photos[0]} alt={e.img[0]} fill priority sizes="(min-width: 1200px) 1200px, 100vw" style={{ objectPosition: '70% 55%' }} />
              : <div className="photo-missing" aria-hidden>{e.img[0]}</div>}
            <div className="hero__scrim" aria-hidden />
            <div className="eq-hero__body">
              <h1 className="h1" style={{ fontSize: 'clamp(42px, 6.6vw, 84px)' }}>{title}</h1>
              <p className="lead">{c.lead}</p>
              <div className="hero__ctas only-wide">
                <a className="btn btn--primary btn--on-dark" href={'tel:' + SITE.phone}><Phone size={22} aria-hidden />{getLoads}</a>
                <a className="btn btn--outline-light" href={'sms:' + SITE.phone}>{ui.textUs}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="container stack" style={{ paddingTop: 'clamp(48px, 7vw, 88px)', gap: 20 }} aria-labelledby="haul">
          <h2 id="haul" className="h2">{ui.haulTitle}</h2>
          <ul className="checks">{c.haul.map((h) => <li key={h}><Check size={22} aria-hidden style={{ flexShrink: 0 }} />{h}</li>)}</ul>
        </section>

        <section className="container section stack" style={{ gap: 20 }} aria-labelledby="handle">
          <h2 id="handle" className="h2">{ui.handleFor} {e.name}</h2>
          <ul className="handle">
            {c.handle.map(([h, d], i) => (
              <li key={h}><NamedIcon name={e.icons[i]} /><div><h3>{h}</h3><p>{d}</p></div></li>
            ))}
          </ul>
        </section>

        <section className="container gallery" aria-label="Photos">
          {[1, 2].map((n) => (
            <div key={n} className="gallery__item">
              {e.photos[n]
                ? <Image src={e.photos[n] as string} alt={e.img[n]} fill sizes="(min-width: 960px) 50vw, 100vw" />
                : <div className="photo-missing" aria-hidden>{e.img[n]}</div>}
            </div>
          ))}
        </section>

        <section className="section section--gray" style={{ marginTop: 'clamp(48px, 7vw, 88px)' }} aria-labelledby="needs">
          <div className="container split">
            <div className="stack-sm">
              <h2 id="needs" className="h2">{ui.needTitle}</h2>
              <p className="muted" style={{ maxWidth: 420 }}>{ui.needLead}</p>
            </div>
            <ul className="needs">{c.needs.map((n) => <li key={n}><CircleCheck size={24} aria-hidden style={{ flexShrink: 0 }} />{n}</li>)}</ul>
          </div>
        </section>

        <section className="section section--dark" aria-labelledby="cta">
          <div className="container split" style={{ alignItems: 'center' }}>
            <div className="stack-sm">
              <h2 id="cta" className="h2">{lang === 'es' ? ui.ctaFor + ' ' + e.name + ' ' + ui.ctaLoads : ui.ctaFor + ' ' + e.name + ' ' + ui.ctaLoads}</h2>
              <p className="lead" style={{ color: 'var(--inv-2)' }}>{ui.ctaLead}</p>
            </div>
            <div className="stack-sm" style={{ maxWidth: 420 }}>
              <p><span className="plan__amount" style={{ fontSize: 'clamp(56px, 6vw, 72px)' }}>{SITE.pricing.percent}%</span> <span className="plan__period">{lang === 'es' ? 'por carga · o $' + SITE.pricing.weekly + '/semana · o a tu medida' : 'per load · or $' + SITE.pricing.weekly + '/week · or custom'}</span></p>
              <p style={{ fontWeight: 600, color: 'var(--inv-2)' }}>{ui.noContract} · {ui.noForced}</p>
              <a className="btn btn--primary btn--on-dark btn--block" href={'tel:' + SITE.phone}><Phone size={22} aria-hidden />{getLoads}</a>
            </div>
          </div>
        </section>

        <section className="container section stack" style={{ gap: 16 }} aria-labelledby="other">
          <h2 id="other" className="h2" style={{ fontSize: 'clamp(26px, 3vw, 34px)' }}>{ui.otherTitle}</h2>
          <ul className="chips">
            {equipment.filter((x) => x.slug !== slug).map((x) => (
              <li key={x.slug}><Link href={href(lang, '/trucks/' + x.slug)}>{x.name}<ArrowRight size={18} aria-hidden /></Link></li>
            ))}
          </ul>
        </section>
      </main>
      <Footer lang={lang} tagline={ui.footer} />
    </>
  );
}
