'use client';

import React from 'react';
import styled from 'styled-components';
import { Themed } from './layout';

const Config = {
	size: 4,
	grid: 3,
};

const Container = styled.div`
	position: absolute;
	right: 0;
	top: -${Config.grid * Config.size}vw;
	left: 0;
`;

interface SquareProps extends Themed {
	x: number;
	y: number;
	orientation: 'left' | 'right';
}

const Square = styled.div<SquareProps>`
	position: absolute;

	top: ${({ y }) => y * Config.size}vw;
	background-color: ${({ theme }) => `var(--${theme})`};

	outline: 1px solid ${({ theme }) => `var(--${theme})`};

	width: ${Config.size}vw;
	height: ${Config.size}vw;
	/* ${({ orientation }) => orientation}: ${({ x }) => x * Config.size}vw; */
`;

export const SquaresDivider: React.FC<
	Themed & { orientation: 'left' | 'right' }
> = ({ theme, orientation }) => {
	const matrix: boolean[][] = [];

	for (let i = 0; i < Config.grid; i++) {
		matrix[i] = [];
		for (let j = 0; j < Config.grid; j++) {
			matrix[i][j] = i < j;
		}
	}

	return (
		<Container>
			{matrix.map((row, x) =>
				row.map(
					(column, y) =>
						column && (
							<Square
								x={x}
								y={y}
								theme={theme}
								orientation={orientation}
							/>
						)
				)
			)}
		</Container>
	);
};
