import styled from 'styled-components';
import { Themed } from './layout';

export const Footer = styled.footer<Themed>`
  flex: 1;
  min-height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;

  &::after {
    content: ' ';
    width: 200%;
    position: absolute;
    bottom: 30px;
    border-bottom: 1px dashed
      ${({ theme }) => (theme === 'dark' ? `var(--light)` : `var(--dark)`)};
    animation: move-dashes 10s infinite linear;
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
