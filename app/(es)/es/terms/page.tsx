import { LegalPage, legalMetadata } from '@/views/LegalPage';

export const metadata = legalMetadata('es', 'terms');
export default function Page() { return <LegalPage lang="es" kind="terms" />; }
