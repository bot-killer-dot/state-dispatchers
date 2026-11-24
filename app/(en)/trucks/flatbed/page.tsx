import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('en', 'flatbed');
export default function Page() { return <TruckPage lang="en" slug="flatbed" />; }
