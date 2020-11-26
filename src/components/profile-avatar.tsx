import styled from 'styled-components';

const ProfileAvatar = styled.div`
  position: relative;
  background-image: url('https://avatars1.githubusercontent.com/u/30053103');
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 5px solid var(--light);
  box-shadow: var(--default-shadow);

  transition: all 500ms ease-out;

  &::after {
    content: ' ';
    position: absolute;
    border: 1px dashed;
    border-color: var(--light);
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    left: 7px;
    top: 7px;
    border-radius: 50%;

    transition: all 500ms ease-out;
    animation: rotation 30s infinite;
  }

  &:hover {
    border-color: var(--blue);

    &::after {
      border-color: var(--blue);
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default ProfileAvatar;
