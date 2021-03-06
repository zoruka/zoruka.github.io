import React from 'react';
import styled from 'styled-components';
import Icons from '../assets/icons';

const IconLinkContainer = styled.a`
  padding: 0 10px;

  svg {
    width: 2.3rem;
    height: 2.3rem;
    fill: var(--light);
    filter: drop-shadow(0 0 3px var(--dark));

    transition: all 500ms ease-out;
  }

  &:hover {
    svg {
      fill: var(--blue);
    }
  }
`;

const IconLink: React.FC<{
  href: string;
  icon: keyof typeof Icons;
}> = ({ href, icon }) => {
  return (
    <IconLinkContainer target="__blank" href={href}>
      {Icons[icon]}
    </IconLinkContainer>
  );
};

export default IconLink;
