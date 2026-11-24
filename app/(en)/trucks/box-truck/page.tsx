import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('en', 'box-truck');
export default function Page() { return <TruckPage lang="en" slug="box-truck" />; }
