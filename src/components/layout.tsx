import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

export interface Themed {
  theme: 'dark' | 'light';
}
interface LayoutProps extends Themed, React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #323232;
    --blue: #006aff;
    --light: #fff;
    --default-shadow: 0px 0 3px 1px #222;
  }

  * {
    box-sizing: border-box;
  }


  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    color: var(--blue);
    text-transform: uppercase;
  }

  p {
    font-family: monospace;
    font-size: 1.1em;
    line-height: 1.3em;
    text-align: left;
    padding: 0 15px;
  }
  
  #___gatsby, #gatsby-focus-wrapper {
    min-height: 100vh;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Press Start 2P', sans-serif;
    color:var(--light);
    background-color:var(--dark);
    text-align: center;
  }
`;

const LayoutContainer = styled.section<Themed>`
  position: relative;
  background-color: ${({ theme }) => `var(--${theme})`};
  color: ${({ theme }) => (theme === 'dark' ? 'var(--light)' : 'var(--dark)')};

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
  margin: 0 auto;
`;

const LayoutHelmet: React.FC<{ title?: string }> = ({
  title = 'Felipe Mendes',
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  theme,
  ...props
}) => {
  return (
    <LayoutContainer theme={theme}>
      <ContentContainer {...props}>
        <LayoutHelmet />
        <GlobalStyle />
        {children}
      </ContentContainer>
    </LayoutContainer>
  );
};
