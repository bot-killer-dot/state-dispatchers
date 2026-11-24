import {
  ArrowDownUp, Repeat, Handshake, Receipt, ThermometerSnowflake, Sprout, Route, FileCheck, Tent, Ruler, FileBadge,
  Factory, MoveUpRight, Layers, ArrowDownToLine, House, BadgeCheck, Zap, Scale, BellRing, Container, FileText, Car,
  Camera, CalendarClock, ShieldCheck, type LucideIcon,
} from 'lucide-react';

const MAP: Record<string, LucideIcon> = {
  'arrow-down-up': ArrowDownUp, repeat: Repeat, handshake: Handshake, receipt: Receipt, 'thermometer-snowflake': ThermometerSnowflake,
  sprout: Sprout, route: Route, 'file-check': FileCheck, tent: Tent, ruler: Ruler, 'file-badge': FileBadge, factory: Factory,
  'move-up-right': MoveUpRight, layers: Layers, 'arrow-down-to-line': ArrowDownToLine, house: House, 'badge-check': BadgeCheck,
  zap: Zap, scale: Scale, 'bell-ring': BellRing, container: Container, 'file-text': FileText, car: Car, camera: Camera,
  'calendar-clock': CalendarClock, 'shield-check': ShieldCheck,
};

export function NamedIcon({ name, size = 28 }: { name: string; size?: number }) {
  const I = MAP[name] || FileText;
  return <I size={size} aria-hidden />;
}
