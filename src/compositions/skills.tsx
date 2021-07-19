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
    font-size: 12px;
  }

  li {
    padding: 4px 0;
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
      'Full projects developed.\nMain concepts learned pratically with production projects from scratch to deploy.\nComplete knowledge of Hooks usage.\nExperience in many React libraries such as styled-components, redux and material-ui.',
  },
  {
    icon: 'NodeJS',
    name: 'Node.js',
    description:
      'A lot of daily problems solver and automation projects developed.\nKnowledge in many different frameworks based on Node.js such as Express.js, React, Angular, Ionic.\nKnowledge in unit testing with Jest.js.',
  },
  {
    icon: 'Typescript',
    name: 'Typescript',
    description:
      'Full projects developed from scratch to deploy.\nComplete knowledge of building advanced types.\nProjects developed with a lot of different Node.js based frameworks.',
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
              <p>
                {description.split('\n').map((text) => (
                  <li>{text}</li>
                ))}
              </p>
            </CardFace>
          </FlipCard>
        ))}
      </CardsGrid>
    </Layout>
  );
};
