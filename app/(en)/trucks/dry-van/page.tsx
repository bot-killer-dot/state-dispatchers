import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('en', 'dry-van');
export default function Page() { return <TruckPage lang="en" slug="dry-van" />; }
