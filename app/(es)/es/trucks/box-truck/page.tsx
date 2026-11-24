import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('es', 'box-truck');
export default function Page() { return <TruckPage lang="es" slug="box-truck" />; }
