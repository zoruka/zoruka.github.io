import styled from 'styled-components';

const Footer = styled.footer`
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
    border-bottom: 1px dashed var(--light);
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

export default Footer;
