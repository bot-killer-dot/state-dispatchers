'use client';
import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import type { Lang } from '@/lib/site';
import { contact } from '@/lib/content';

type Errs = { name?: boolean; email?: boolean; phone?: boolean };

export function ContactForm({ lang }: { lang: Lang }) {
  const t = contact[lang];
  const [errs, setErrs] = useState<Errs>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) || '').trim();
    const next: Errs = { name: !v('name'), email: !/^\S+@\S+\.\S+$/.test(v('email')), phone: v('phone').replace(/\D/g, '').length < 10 };
    setErrs(next);
    if (next.name || next.email || next.phone) return;
    setStatus('sending');
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: v('name'), email: v('email'), phone: v('phone'), note: v('note'), consent: fd.get('consent') === 'on', lang }) });
    setStatus(res.ok ? 'sent' : 'error');
  }

  if (status === 'sent') {
    return (
      <div className="form-card"><div className="sent" role="status">
        <span className="sent__badge">✓ {t.sentBadge}</span>
        <h3 className="h2" style={{ fontSize: 32 }}>{t.sentTitle}</h3>
        <p className="muted">{t.sentLead}</p>
        <button type="button" className="btn btn--outline" style={{ alignSelf: 'flex-start' }} onClick={() => setStatus('idle')}>{t.again}</button>
      </div></div>
    );
  }

  const field = (name: 'name' | 'email' | 'phone', label: string, err: string, props: Record<string, string>) => (
    <div className="field" data-error={!!errs[name]}>
      <label htmlFor={'f-' + name}>{label} <span className="req" aria-hidden>*</span></label>
      <input id={'f-' + name} name={name} required aria-invalid={!!errs[name]} aria-describedby={errs[name] ? 'e-' + name : undefined} {...props} />
      {errs[name] ? <span id={'e-' + name} className="field__err">{err}</span> : null}
    </div>
  );

  return (
    <form id="form" className="form-card" noValidate onSubmit={onSubmit}>
      {field('name', t.name, t.nameErr, { autoComplete: 'name' })}
      {field('email', t.email, t.emailErr, { type: 'email', inputMode: 'email', autoComplete: 'email' })}
      {field('phone', t.phone, t.phoneErr, { type: 'tel', inputMode: 'tel', autoComplete: 'tel', placeholder: '(555) 555-5555' })}
      <div className="field">
        <label htmlFor="f-note">{t.msg} <span className="opt">{t.optional}</span></label>
        <textarea id="f-note" name="note" rows={3} placeholder={t.msgPh} />
      </div>
      <label className="consent"><input type="checkbox" name="consent" defaultChecked /><span>{t.consent}</span></label>
      <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}><Send size={22} aria-hidden />{t.send}</button>
      {status === 'error' ? <p className="field__err" role="alert">Something went wrong. Please call us instead.</p> : null}
    </form>
  );
}
