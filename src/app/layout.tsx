import { FathomAnalytics } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import { Pager } from '@/components/pager';
import { ProfileFragment } from '@/fragments';

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
      <head>
        <FathomAnalytics
          trackingCode="LSKJWSLH"
          includedDomains={['zoruka.xyz', 'www.zoruka.xyz']}
        />
      </head>
      <body className={pressStart.className}>
        <ProfileFragment />
        <Pager
          tabs={[
            { route: '/', label: 'About' },
            { route: '/projects', label: 'Projects' },
          ]}
        >
          {children}
        </Pager>
      </body>
    </html>
  );
}
