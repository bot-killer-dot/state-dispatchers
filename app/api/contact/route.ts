import { NextResponse } from 'next/server';

type Body = {
  name?: string; email?: string; phone?: string; note?: string; lang?: string; page?: string;
  smsCare?: boolean; smsMarketing?: boolean;
  consentText?: { care?: string; marketing?: string; disclosure?: string };
};

export async function POST(req: Request) {
  let b: Body;
  try { b = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const name = (b.name || '').trim().slice(0, 120);
  const email = (b.email || '').trim().slice(0, 200);
  const phone = (b.phone || '').replace(/[^0-9+]/g, '').slice(0, 20);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 422 });
  }
  const at = new Date().toISOString();
  // SMS opt-in record (10DLC): keep what the person agreed to, when, where, and the exact wording shown.
  const sms = {
    care: b.smsCare === true,
    marketing: b.smsMarketing === true,
    at,
    source: 'website form ' + String(b.page || '/contact').slice(0, 100),
    ip: (req.headers.get('x-forwarded-for') || '').split(',')[0].trim(),
    text: b.consentText ? { care: String(b.consentText.care || '').slice(0, 600), marketing: String(b.consentText.marketing || '').slice(0, 600), disclosure: String(b.consentText.disclosure || '').slice(0, 600) } : undefined,
  };
  const lead = { name, email, phone, note: (b.note || '').slice(0, 2000), sms, lang: b.lang === 'es' ? 'es' : 'en', at };
  // TODO: deliver the lead — e.g. send an email (Resend/SendGrid), post to your CRM, or a Slack webhook.
  console.log('[lead]', lead);
  return NextResponse.json({ ok: true });
}
