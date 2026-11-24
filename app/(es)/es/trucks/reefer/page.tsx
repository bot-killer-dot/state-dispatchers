import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('es', 'reefer');
export default function Page() { return <TruckPage lang="es" slug="reefer" />; }
