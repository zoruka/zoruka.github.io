'use client';

import React from 'react';
import { SectionHeading } from '../components';
import { Layout } from '../components/layout';
import Link from 'next/link';
import styled from 'styled-components';

const HomeLink = styled(Link)`
	color: var(--light);
	font-size: 0.8rem;
`;

const Message = styled.span`
	padding: 3rem;
	font-size: 0.8rem;
	line-height: 1.2rem;
`;

const NotFoundPage = (): JSX.Element => {
	return (
		<Layout theme="dark">
			<SectionHeading theme="dark">😢 Game Over 😢</SectionHeading>
			<Message>
				Curiouser and curiouser
				<br />
				This page could not be found
			</Message>
			<HomeLink href="/">come back</HomeLink>
		</Layout>
	);
};

export default NotFoundPage;
