import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  overflow: visible;
  width: 100%;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: ' ';
    border-top: 1px dashed var(--light);
    left: 0;
    right: 0;
    top: 0;
  }
`;

export default Section;
