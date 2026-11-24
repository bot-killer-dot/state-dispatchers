import { MessageSquare, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

export function CallBar({ call, text }: { call: string; text: string }) {
  return (
    <div className="callbar only-narrow">
      <div className="callbar__tape" aria-hidden />
      <div className="callbar__in">
        <a className="btn btn--primary" href={'tel:' + SITE.phone}><Phone size={22} aria-hidden />{call}</a>
        <a className="btn btn--outline-light" href={'sms:' + SITE.phone}><MessageSquare size={20} aria-hidden />{text}</a>
      </div>
    </div>
  );
}
