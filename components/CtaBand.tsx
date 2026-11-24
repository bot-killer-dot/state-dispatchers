import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Btn = { label: string; href: string; tel?: boolean };
export function CtaBand({ title, lead, primary, secondary }: { title: string; lead: string; primary: Btn; secondary?: Btn }) {
  const A = (b: Btn, cls: string, arrow: boolean) => b.tel || b.href.startsWith('tel:')
    ? <a className={cls} href={b.href}>{b.label}</a>
    : <Link className={cls} href={b.href}>{b.label}{arrow ? <ArrowRight size={20} aria-hidden /> : null}</Link>;
  return (
    <section className="container" style={{ paddingBottom: 'clamp(48px, 7vw, 88px)' }}>
      <div className="cta-band">
        <div className="cta-band__text"><h2>{title}</h2><p>{lead}</p></div>
        <div className="cta-band__btns">
          {A(primary, 'btn btn--dark', true)}
          {secondary ? A(secondary, 'btn btn--outline', false) : null}
        </div>
      </div>
    </section>
  );
}
