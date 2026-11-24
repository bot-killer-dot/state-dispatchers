import { TruckPage, truckMetadata } from '@/views/TruckPage';

export const metadata = truckMetadata('es', 'hotshot');
export default function Page() { return <TruckPage lang="es" slug="hotshot" />; }
