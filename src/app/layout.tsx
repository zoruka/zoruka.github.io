import './globals.css';
import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import StyledComponentsRegistry from '@/components/registry';

const pressStart = Press_Start_2P({
	weight: '400',
	subsets: ['latin-ext'],
});

export const metadata: Metadata = {
	title: 'zoruka',
	description: 'my web page',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className={pressStart.className}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
