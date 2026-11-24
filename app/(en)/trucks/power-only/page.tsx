import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('en', 'power-only');
export default function Page() { return <TruckPage lang="en" slug="power-only" />; }
