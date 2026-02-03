import { Ubuntu, Unbounded } from 'next/font/google';
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import PulsBotWidget from '@/components/dashboard/PulsBotWidget';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
});

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-unbounded',
});

export const metadata = {
  title: 'PulsAI Dashboard',
  description: 'Gérez vos interactions clients avec l\'IA',
};

import { Providers } from './providers';

// ... (imports)

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${ubuntu.variable} ${unbounded.variable} font-sans overflow-x-hidden selection:bg-pulsai-blue selection:text-white`}>
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
          <PulsBotWidget />
        </Providers>
      </body>
    </html>
  );
}