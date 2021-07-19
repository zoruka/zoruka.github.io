import React, { PropsWithChildren, ReactNode } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ width: string; height: string }>`
  background-color: transparent;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  perspective: 1000px;
`;

const Inner = styled.div<{ active: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  transform: rotateY(${({ active }) => (active ? '180deg' : '0deg')});
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

interface FlipCardProps extends PropsWithChildren<unknown> {
  children: [ReactNode, ReactNode];
  width: string;
  height: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  children,
  width,
  height,
}) => {
  const [active, setActive] = useState(false);

  return (
    <Container
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      width={width}
      height={height}
    >
      <Inner active={active}>
        <Front>{children[0]}</Front>
        <Back>{children[1]}</Back>
      </Inner>
    </Container>
  );
};
