import type { Metadata } from 'next';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { SITE, absolute, href, type Lang } from '@/lib/site';
import { contact, meta } from '@/lib/content';
import { breadcrumbLd, buildMetadata, organizationLd } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { ContactForm } from '@/components/ContactForm';

export function contactMetadata(lang: Lang): Metadata {
  return buildMetadata({ lang, path: '/contact', ...meta.contact[lang] });
}

export function ContactPage({ lang }: { lang: Lang }) {
  const t = contact[lang];
  return (
    <>
      <JsonLd data={[organizationLd(lang), breadcrumbLd([{ name: SITE.name, url: absolute(href(lang, '/')) }, { name: t.kicker, url: absolute(href(lang, '/contact')) }])]} />
      <Header lang={lang} path="/contact" active="contact" />
      <main id="main">
        <section className="container page-hero">
          <h1 className="h1">{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </section>

        <section className="container ways" aria-label={t.kicker}>
          <a className="way way--dark" href={'tel:' + SITE.phone}>
            <span className="way__icon" aria-hidden><Phone size={24} /></span>
            <span className="way__label">{t.callT}</span>
            <span className="way__value">{SITE.phoneDisplay}</span>
            <p>{t.callD}</p>
          </a>
          <a className="way" href={'sms:' + SITE.phone}>
            <span className="way__icon" aria-hidden><MessageSquare size={24} /></span>
            <span className="way__label">{t.textT}</span>
            <span className="way__value">{SITE.phoneDisplay}</span>
            <p>{t.textD}</p>
          </a>
          <a className="way" href={'mailto:' + SITE.email}>
            <span className="way__icon" aria-hidden><Mail size={24} /></span>
            <span className="way__label">{t.mailT}</span>
            <span className="way__value way__value--text">{SITE.email}</span>
            <p>{t.mailD}</p>
          </a>
        </section>

        <section className="container section split" style={{ alignItems: 'flex-start' }} aria-labelledby="form-title">
          <div className="stack" style={{ gap: 20 }}>
            <div className="stack-sm">
              <h2 id="form-title" className="h2">{t.formTitle}</h2>
              <p className="muted">{t.formLead}</p>
            </div>
            <div className="stack-sm next" style={{ gap: 16, paddingTop: 16, borderTop: '2px solid var(--asphalt)' }}>
              <h3 style={{ fontWeight: 800, fontSize: 17 }}>{t.nextTitle}</h3>
              <ol className="stack-sm" style={{ gap: 16 }}>
                {t.next.map(([nt, d]: string[], i: number) => (
                  <li key={nt}><span className="step__n" aria-hidden>{i + 1}</span><div><b style={{ fontSize: 18 }}>{nt}</b><p className="muted" style={{ fontSize: 16 }}>{d}</p></div></li>
                ))}
              </ol>
            </div>
          </div>
          <ContactForm lang={lang} />
        </section>
      </main>
      <Footer lang={lang} tagline={t.footer} />
    </>
  );
}
