import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('es', 'power-only');
export default function Page() { return <TruckPage lang="es" slug="power-only" />; }
