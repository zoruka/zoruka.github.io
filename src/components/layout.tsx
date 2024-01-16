'use client';

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export type Themed = {
	theme: 'dark' | 'light';
};

type LayoutProps = React.PropsWithChildren<Themed>;

const LayoutContainer = styled.section<Themed>`
	position: relative;
	background-color: ${({ theme }) => `var(--${theme})`};
	color: ${({ theme }) =>
		theme === 'dark' ? 'var(--light)' : 'var(--dark)'};

	* {
		text-shadow: 0px 0 3px
			${({ theme }) => (theme === 'dark' ? '#000' : '#888')};
	}
`;

const ContentContainer = styled.div`
	padding: 5vh 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	max-width: 648px;
	min-height: 100vh;
	margin: 0 auto;
`;

export const Layout: React.FC<LayoutProps> = ({ children, theme }) => {
	return (
		<LayoutContainer theme={theme}>
			<ContentContainer>{children}</ContentContainer>
		</LayoutContainer>
	);
};
