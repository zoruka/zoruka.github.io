import React from 'react';
import styled from 'styled-components';
import { Layout, FlipCard, SectionHeading } from '../components';
import Icons from '../assets/icons';

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--blue);
  color: var(--light);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 3px #000;

  svg {
    width: 100px;
    height: 100px;
    fill: var(--light);
  }

  p {
    font-size: 11px;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  .flip-card {
    width: 250px;
    height: 250px;
    margin: 15px;
    padding: 15px;

    @media screen and (max-width: 648px) {
      width: calc(100% - 60px);
    }
  }
`;

const SkillCards = [
  {
    icon: 'ReactJS',
    name: 'React.js',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum quam eget libero pretium cursus. Maecenas sed mi felis. Etiam eu ipsum et libero tristique malesuada. Sed nulla neque, fringilla nec enim eget, scelerisque feugiat est. Suspendisse potenti. Aliquam quis velit imperdiet, feugiat mi non, cursus mi.',
  },
  {
    icon: 'NodeJS',
    name: 'Node.js',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum quam eget libero pretium cursus. Maecenas sed mi felis. Etiam eu ipsum et libero tristique malesuada. Sed nulla neque, fringilla nec enim eget, scelerisque feugiat est. Suspendisse potenti. Aliquam quis velit imperdiet, feugiat mi non, cursus mi.',
  },
  {
    icon: 'Typescript',
    name: 'Typescript',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum quam eget libero pretium cursus. Maecenas sed mi felis. Etiam eu ipsum et libero tristique malesuada. Sed nulla neque, fringilla nec enim eget, scelerisque feugiat est. Suspendisse potenti. Aliquam quis velit imperdiet, feugiat mi non, cursus mi.',
  },
];

export const SkillsComposition: React.FC = () => {
  return (
    <Layout
      theme="light"
      style={{ paddingTop: '0px', width: '900px', maxWidth: '100%' }}
    >
      <SectionHeading theme="light">🤹🏼 Skills 🤹🏼</SectionHeading>

      <CardsGrid>
        {SkillCards.map(({ icon, name, description }) => (
          <FlipCard className="flip-card">
            <CardFace>
              {Icons[icon]}
              {name}
            </CardFace>
            <CardFace>
              <p>{description}</p>
            </CardFace>
          </FlipCard>
        ))}
      </CardsGrid>
    </Layout>
  );
};
