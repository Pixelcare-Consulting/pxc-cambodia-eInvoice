import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { SWRProvider } from '@/components/providers/swr-provider';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Pinnacle e-Invoice System',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <SWRProvider>
          {children}
          <Toaster />
        </SWRProvider>
      </body>
    </html>
  );
}
