import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        color: #fff;
        background-color: #323232;
        text-align: center;
    }
`;

const LayoutContainer = styled.div`
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
    <LayoutContainer>
      <LayoutHelmet />
      <GlobalStyle />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
