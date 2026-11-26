import { LegalPage, legalMetadata } from '@/views/LegalPage';

export const metadata = legalMetadata('en', 'terms');
export default function Page() { return <LegalPage lang="en" kind="terms" />; }
