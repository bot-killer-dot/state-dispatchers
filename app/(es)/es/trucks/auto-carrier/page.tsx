import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('es', 'auto-carrier');
export default function Page() { return <TruckPage lang="es" slug="auto-carrier" />; }
