import React from 'react';
import styled from 'styled-components';

const DataContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 0.8rem;

  span {
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  label {
    position: absolute;
    font-size: 10px;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--blue);
  }
`;

export const ProfileData: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => {
  return (
    <DataContainer>
      <span>{children}</span>
      <label>{label}</label>
    </DataContainer>
  );
};
