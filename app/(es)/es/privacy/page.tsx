import { LegalPage, legalMetadata } from '@/views/LegalPage';

export const metadata = legalMetadata('es', 'privacy');
export default function Page() { return <LegalPage lang="es" kind="privacy" />; }
