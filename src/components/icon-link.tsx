'use client';

import React from 'react';
import styled from 'styled-components';
import Icons from '../assets/icons';

const IconLinkContainer = styled.a`
	padding: 0 10px;

	svg {
		font-size: 2.3rem;
		fill: var(--light);
		filter: drop-shadow(0 0 3px #000);

		transition: all 500ms ease-out;
	}

	&:hover {
		svg {
			fill: var(--blue);
		}
	}
`;

export const IconLink: React.FC<{
	href: string;
	icon: keyof typeof Icons;
}> = ({ href, icon }) => {
	return (
		<IconLinkContainer target="__blank" href={href}>
			{Icons[icon]}
		</IconLinkContainer>
	);
};
