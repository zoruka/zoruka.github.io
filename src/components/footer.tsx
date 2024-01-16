'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
	flex: 1;
	min-height: 60px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	width: 100%;
	background-color: var(--blue);
	font-family: monospace;

	&::after {
		content: ' ';
		width: 200%;
		position: absolute;
		top: 0;
		border-top: 1px dashed var(--light);
		animation: move-dashes 10s infinite linear;
	}

	a {
		color: var(--light);
		margin-left: 8px;
	}

	@keyframes move-dashes {
		from {
			left: -50%;
		}
		to {
			left: 0%;
		}
	}
`;

export const Footer: React.FC = () => {
	return (
		<Container>
			<span>Made with ❤️ by </span>
			<a href="https://github.com/zoruka">zoruka</a>
		</Container>
	);
};
