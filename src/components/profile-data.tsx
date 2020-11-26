import React from 'react';
import styled from 'styled-components';

const DataContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.2rem 0.8rem;

  span {
    font-size: 1.2rem;
  }

  label {
    position: absolute;
    font-size: 0.6rem;
    left: 0;
    right: 0;
    bottom: 0.1rem;
    text-transform: uppercase;
    color: var(--blue);
  }
`;

const ProfileData: React.FC<{
  label: string;
  children: string;
}> = ({ label, children }) => {
  return (
    <DataContainer>
      <span>{children}</span>
      <label>{label}</label>
    </DataContainer>
  );
};

export default ProfileData;
