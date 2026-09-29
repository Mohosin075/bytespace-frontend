import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/constants/site-config';

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${poppins.variable}`}>
      <body className="min-h-full bg-neutral-50 text-neutral-950 font-satoshi antialiased">
        {children}
      </body>
    </html>
  );
}
