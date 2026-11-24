import { Plus } from 'lucide-react';

export function Faq({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <section id="faq" className="container section faq stack" aria-labelledby="faq-title">
      <h2 id="faq-title" className="h2">{title}</h2>
      <div className="faq__list">
        {items.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary>{q}<span className="faq__icon" aria-hidden><Plus size={22} /></span></summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
