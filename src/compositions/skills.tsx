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

  .card-title {
    margin: 10px;
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
    icon: 'NodeJS',
    name: 'Node.js',
    description:
      'A lot of daily problems solver and automation projects developed.\nKnowledge in many different frameworks based on Node.js such as Express.js, React, Angular, Ionic.\nDeveloped one big application that is used by thousands of users.',
  },
  {
    icon: 'ReactJS',
    name: 'React.js',
    description:
      'Full projects developed.\nMain concepts learned pratically with production projects from scratch to deploy.\nComplete knowledge of Hooks usage.\nExperience in many React libraries such as styled-components, redux and material-ui.',
  },
  {
    icon: 'Typescript',
    name: 'Typescript',
    description:
      'Full projects developed from scratch to deploy.\nComplete knowledge of building advanced types.\nProjects developed with a lot of different Node.js based frameworks.',
  },
  {
    icon: 'Testing',
    name: 'Unit Tests',
    description:
      'Able to build modular testable architectures.\nHigh knowledge in Jest.js use.\nThousands of unit tests done.',
  },
  {
    icon: 'Database',
    name: 'SQL and noSQL',
    description:
      'Full projects developed using MongoDB and CouchDB.\nKnowledge in SQL architecture and query building, experience in MySQL and PostgreSQL.\nParticipation in one SQL to noSQL database conversion.',
  },
  {
    icon: 'CloudDevelop',
    name: 'Cloud Development',
    description:
      'Knowledge in more usual AWS features.\nKnowledge in Docker use.\nAlready made full deploys of web applications.\nMeasurement and analysis of production servers.',
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
              <span className="card-title">{name}</span>
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
