import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('en', 'hotshot');
export default function Page() { return <TruckPage lang="en" slug="hotshot" />; }
