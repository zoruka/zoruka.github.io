import { FathomAnalytics } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Press_Start_2P, DM_Sans, DM_Mono } from 'next/font/google';
import { cn } from '@/utils';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin-ext'],
  variable: '--font-press-start',
});

const dmSans = DM_Sans({
  weight: ['200', '500', '700'],
  subsets: ['latin-ext'],
  variable: '--font-sans',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin-ext'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Hello World!',
  description: "Zoruka's web page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <FathomAnalytics
          trackingCode="LSKJWSLH"
          includedDomains={['zoruka.xyz', 'www.zoruka.xyz']}
        />
      </head>
      <body
        className={cn(pressStart.variable, dmSans.variable, dmMono.variable)}
      >
        {children}
      </body>
    </html>
  );
}
