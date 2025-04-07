import Navbar from '@/components/Navbar';
import { ShopProvider } from '@/context/ShopContext';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>
          <Navbar />
          <main>{children}</main>
        </ShopProvider>
      </body>
    </html>
  );
}
// Root layout for the application
// This layout wraps the entire application with a provider for the shop context