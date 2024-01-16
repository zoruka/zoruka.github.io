'use client';

import React from 'react';
import styled from 'styled-components';
import { Themed } from './layout';

const Container = styled.h1<Themed>`
	width: 100%;
	max-width: 648px;
	position: relative;
	overflow: hidden;
	margin: unset;
	padding: 0.83em 0;

	&::after,
	&::before {
		transition: all 500ms ease-out;
		content: ' ';
		width: 200%;
		position: absolute;
		border-bottom: 1px dashed
			${({ theme }) =>
				theme === 'dark' ? `var(--light)` : `var(--dark)`};
	}

	&::before {
		bottom: 0;
		animation: move-dashes-left 10s infinite linear;
	}

	&::after {
		top: 0;
		animation: move-dashes-right 10s infinite linear;
	}

	&:hover {
		cursor: default;

		&::after,
		&::before {
			border-bottom: 1px dashed var(--blue);
			animation-duration: 5s;
		}
	}

	@keyframes move-dashes-right {
		from {
			left: -50%;
		}
		to {
			left: 0%;
		}
	}

	@keyframes move-dashes-left {
		from {
			left: 0%;
		}
		to {
			left: -50%;
		}
	}
`;

export interface SectionHeadingProps
	extends Themed,
		React.HTMLAttributes<HTMLHeadingElement> {}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
	children,
	...props
}) => {
	return <Container {...props}>{children}</Container>;
};
