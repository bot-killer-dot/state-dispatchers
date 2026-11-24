import '../globals.css';
import { Shell, siteMetadata, siteViewport } from '@/views/Shell';

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="es">{children}</Shell>;
}
