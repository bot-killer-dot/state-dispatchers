import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('es', 'dry-van');
export default function Page() { return <TruckPage lang="es" slug="dry-van" />; }
