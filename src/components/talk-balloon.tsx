'use client';

import React from 'react';
import styled from 'styled-components';
import styles from './talk-balloon.module.css';

export const TalkBalloon: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<div className={styles.container}>
			{children}
			<AnimatedStroke />
		</div>
	);
};

const AnimatedStroke: React.FC = () => {
	return (
		<StrokeContainer>
			<StrokeLine orientation="horizontal-top" />
			<StrokeLine orientation="horizontal-bottom" />
			<StrokeLine orientation="vertical-right" />
			<StrokeLine orientation="vertical-left" />
		</StrokeContainer>
	);
};

const StrokeContainer = styled.div`
	position: absolute;
	overflow: hidden;

	width: calc(100% - 16px);
	height: calc(100% - 16px);
	left: 7px;
	top: 7px;
	border-radius: 5px;
`;

const StrokeLine = styled.div<{ orientation: string }>`
	position: absolute;
	border-style: dashed;
	border-color: var(--blue);

	width: ${(props) =>
		props.orientation.includes('horizontal') ? '1000px' : '0px'};

	height: ${(props) =>
		props.orientation.includes('horizontal') ? '0px' : '1000px'};

	border-left-width: ${(props) =>
		props.orientation.includes('left') ? '1px' : '0px'};
	border-top-width: ${(props) =>
		props.orientation.includes('top') ? '1px' : '0px'};
	border-bottom-width: ${(props) =>
		props.orientation.includes('bottom') ? '1px' : '0px'};
	border-right-width: ${(props) =>
		props.orientation.includes('right') ? '1px' : '0px'};

	${(props) =>
		props.orientation.includes('top') &&
		`
    top: 0;
    animation: stroke-top-transition 30s 0s infinite linear;
    @keyframes stroke-top-transition {
      from {
        transform: translate(-50%, 0);
      }
      to {
        transform: translate(0, 0);
      }
    }
  `}

	${(props) =>
		props.orientation.includes('bottom') &&
		`
    bottom: 0;
    animation: stroke-bottom-transition 30s 0s infinite linear;
    @keyframes stroke-bottom-transition {
      from {
        transform: translate(0, 0);
      }
      to {
        transform: translate(-50%, 0);
      }
    }
  `}

  ${(props) =>
		props.orientation.includes('left') &&
		`
    left: 0;
    animation: stroke-left-transition 30s 0s infinite linear;
    @keyframes stroke-left-transition {
      from {
        transform: translate(0, 0);
      }
      to {
        transform: translate(0, -50%);
      }
    }
  `}

  ${(props) =>
		props.orientation.includes('right') &&
		`
    right: 0;
    animation: stroke-right-transition 30s 0s infinite linear;
    @keyframes stroke-right-transition {
      from {
        transform: translate(0, -50%);
      }
      to {
        transform: translate(0, 0);
      }
    }
  `}
`;
