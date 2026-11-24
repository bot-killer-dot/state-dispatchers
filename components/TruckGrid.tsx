import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { equipment } from '@/lib/content';
import { href, type Lang } from '@/lib/site';

export function TruckGrid({ lang, title, hint }: { lang: Lang; title: string; hint: string }) {
  return (
    <section id="trucks" className="section--dark" aria-labelledby="trucks-title" style={{ scrollMarginTop: 12 }}>
      <div className="container stack" style={{ paddingTop: 'clamp(32px, 5vw, 56px)', paddingBottom: 'clamp(32px, 5vw, 56px)', gap: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <h2 id="trucks-title" className="h2" style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>{title}</h2>
          <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--inv-2)' }}>{hint}</span>
        </div>
        <ul className="trucks">
          {equipment.map((e) => (
            <li key={e.slug}>
              <Link className="truck-tile" href={href(lang, '/trucks/' + e.slug)}>
                <span><strong>{e.name}</strong><small>{e.grid[lang]}</small></span>
                <span className="truck-tile__arrow" aria-hidden><ArrowRight size={16} /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
