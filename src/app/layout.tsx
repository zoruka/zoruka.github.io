import { FathomAnalytics } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin-ext'],
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
      <body className={pressStart.className}>
        <FathomAnalytics trackingCode="LSKJWSLH" />
        {children}
      </body>
    </html>
  );
}
