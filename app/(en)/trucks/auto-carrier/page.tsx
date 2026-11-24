import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('en', 'auto-carrier');
export default function Page() { return <TruckPage lang="en" slug="auto-carrier" />; }
