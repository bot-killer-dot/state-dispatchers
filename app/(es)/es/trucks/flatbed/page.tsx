import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('es', 'flatbed');
export default function Page() { return <TruckPage lang="es" slug="flatbed" />; }
