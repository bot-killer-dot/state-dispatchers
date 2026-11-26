import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, absolute, href, type Lang } from '@/lib/site';
import { contact } from '@/lib/content';
import { LEGAL, legalLabels, privacy, terms } from '@/lib/legal';
import { breadcrumbLd, buildMetadata, organizationLd } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export type LegalKind = 'terms' | 'privacy';
const docs = { terms, privacy };

export function legalMetadata(lang: Lang, kind: LegalKind): Metadata {
  const d = docs[kind][lang];
  return buildMetadata({ lang, path: '/' + kind, title: d.title, description: d.description });
}

export function LegalPage({ lang, kind }: { lang: Lang; kind: LegalKind }) {
  const d = docs[kind][lang];
  const l = legalLabels[lang];
  const other: LegalKind = kind === 'terms' ? 'privacy' : 'terms';
  return (
    <>
      <JsonLd data={[organizationLd(lang), breadcrumbLd([{ name: SITE.name, url: absolute(href(lang, '/')) }, { name: d.title, url: absolute(href(lang, '/' + kind)) }])]} />
      <Header lang={lang} path={'/' + kind} />
      <main id="main">
        <section className="container page-hero">
          <h1 className="h1">{d.title}</h1>
          <p className="lead">{d.lead}</p>
          <p className="muted">{l.effective}: {LEGAL.effective[lang]}</p>
        </section>
        <article className="container legal">
          {d.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.body.map((b, i) =>
                typeof b === 'string'
                  ? <p key={i}>{b}</p>
                  : <ul key={i}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>,
              )}
            </section>
          ))}
          <p className="legal__also">
            <Link href={href(lang, '/' + other)}>{l[other]} →</Link>
          </p>
        </article>
      </main>
      <Footer lang={lang} tagline={contact[lang].footer} />
    </>
  );
}
