import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('en', 'reefer');
export default function Page() { return <TruckPage lang="en" slug="reefer" />; }
