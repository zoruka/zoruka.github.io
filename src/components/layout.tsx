'use client';

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export type Themed = {
  theme: 'dark' | 'light';
};

type LayoutProps = React.PropsWithChildren<Themed> &
  React.HTMLAttributes<HTMLDivElement>;

const LayoutContainer = styled.section<Themed>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;
  background-color: ${({ theme }) => `var(--${theme})`};
  color: ${({ theme }) => (theme === 'dark' ? 'var(--light)' : 'var(--dark)')};

  min-height: 100vh;

  * {
    text-shadow: 0px 0 3px
      ${({ theme }) => (theme === 'dark' ? '#22222280' : '#888')};
  }
`;

const ContentContainer = styled.div`
  padding: 5vh 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 648px;
  margin: 0 auto;
`;

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <LayoutContainer {...props}>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};
