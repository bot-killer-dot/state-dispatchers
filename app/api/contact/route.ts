import { NextResponse } from 'next/server';

type Body = { name?: string; email?: string; phone?: string; note?: string; consent?: boolean; lang?: string };

export async function POST(req: Request) {
  let b: Body;
  try { b = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const name = (b.name || '').trim().slice(0, 120);
  const email = (b.email || '').trim().slice(0, 200);
  const phone = (b.phone || '').replace(/[^0-9+]/g, '').slice(0, 20);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 422 });
  }
  const lead = { name, email, phone, note: (b.note || '').slice(0, 2000), consent: !!b.consent, lang: b.lang === 'es' ? 'es' : 'en', at: new Date().toISOString() };
  // TODO: deliver the lead — e.g. send an email (Resend/SendGrid), post to your CRM, or a Slack webhook.
  console.log('[lead]', lead);
  return NextResponse.json({ ok: true });
}
