import styled from 'styled-components';

const TalkBalloon = styled.div`
  z-index: 10;
  margin-bottom: -25px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  width: fit-content;

  padding: 30px;
  border-radius: 5px;
  filter: drop-shadow(0 0 3px var(--dark));
  background-color: var(--light);

  &::before {
    content: ' ';
    bottom: -14px;
    position: absolute;
    border: 7px solid transparent;
    border-top-color: var(--light);
  }

  &::after {
    content: ' ';
    position: absolute;
    border: 1px dashed;
    border-color: var(--dark);
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    left: 7px;
    top: 7px;
    border-radius: 5px;
  }
`;

export default TalkBalloon;
