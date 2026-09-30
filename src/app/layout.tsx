import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
  display: 'swap',
});

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bytespace-frontend-indol.vercel.app'),
  title: {
    default: 'ByteSpace — E-Learning Platform',
    template: '%s | ByteSpace',
  },
  description:
    'Unlock your creativity and level up your skills with hundreds of interactive online courses in UI/UX design, web development, marketing, and business taught by top industry creators.',
  applicationName: 'ByteSpace',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${poppins.variable} ${clashDisplay.variable} ${satoshi.variable}`}>
      <body className="min-h-full bg-neutral-50 text-neutral-950 font-satoshi antialiased">
        {children}
      </body>
    </html>
  );
}
