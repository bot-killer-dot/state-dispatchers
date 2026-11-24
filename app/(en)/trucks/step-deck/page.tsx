import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('en', 'step-deck');
export default function Page() { return <TruckPage lang="en" slug="step-deck" />; }
