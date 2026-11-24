'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check, Truck } from 'lucide-react';
import { LOADS } from '@/lib/loads';

type Props = { status: string; labels: { miles: string; rate: string; perMile: string } };

const INTERVAL_MS = 5000;
const FADE_OUT_MS = 600;
const money = (n: number, digits = 0) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });

export function LoadCard({ status, labels }: Props) {
  const [i, setI] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setLeaving(true);
      t = setTimeout(() => { setI((n) => (n + 1) % LOADS.length); setLeaving(false); }, FADE_OUT_MS);
    }, INTERVAL_MS);
    return () => { clearInterval(id); clearTimeout(t); };
  }, []);
  const swap = 'loadcard__swap' + (leaving ? ' is-leaving' : '');

  const load = LOADS[i];

  return (
    <div className="loadcard" aria-live="polite">
      <div className="loadcard__top">
        <span className="loadcard__status"><Check size={18} aria-hidden />{status}</span>
        <span key={'t' + i} className={swap} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Truck size={20} aria-hidden />{load.truck}
        </span>
      </div>
      <div key={i} className={swap} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <p className="loadcard__lane">{load.from} <ArrowRight size={22} aria-label="to" /> {load.to}</p>
        <dl className="loadcard__stats">
          <div><dt>{labels.miles}</dt><dd>{load.miles.toLocaleString('en-US')}</dd></div>
          <div><dt>{labels.rate}</dt><dd>{money(load.rate)}</dd></div>
          <div><dt>{labels.perMile}</dt><dd>{money(load.rate / load.miles, 2)}</dd></div>
        </dl>
      </div>
    </div>
  );
}
