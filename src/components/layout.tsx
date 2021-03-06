import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import Footer from './footer';
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #323232;
    --blue: #006aff;
    --light: #fff;
    --default-shadow: 1px 0 3px 1px #000;
  }

  * {
    box-sizing: border-box;
    text-shadow: 1px 0 3px #000;
  }


  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
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

const LayoutContainer = styled.div`
  padding: 10vh 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 648px;
  margin: 0 auto;

  @media screen and (max-width: 648px) {
    width: 100%;
  }
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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <LayoutHelmet />
        <GlobalStyle />
        {children}
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
