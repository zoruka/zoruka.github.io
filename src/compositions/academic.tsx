import React from 'react';
import styled from 'styled-components';
import { Layout, SectionHeading } from '../components';

const TimeSection = styled.section`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
`;
const TimelinePoint = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 3px solid var(--blue);

  &::after {
    display: flex;
    justify-content: center;
    align-items: center;
    content: ' ';
    width: 16px;
    height: 16px;
    background-color: var(--blue);
  }
`;
const TimelineLine = styled.span`
  width: 3px;
  height: 100%;
  flex: 1;
  background-color: var(--blue);
`;

const DataContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 15px;

  p {
    padding: 15px 5px 45px 5px;
    margin: 0;
  }
`;
const DataHeading = styled.h2`
  font-size: 16px;
  line-height: 18px;
  margin: 5px 0px;

  color: var(--light);
  text-align: center;

  a {
    color: var(--light);
  }
`;
const DataSubtitle = styled.text`
  font-size: 10px;
  opacity: 0.5;
`;
const DataHeader = styled.div`
  min-height: 45px;
  width: 100%;
`;

const Container = styled.div`
  margin: 2em 0;
`;

export const AcademicComposition: React.FC = () => {
  return (
    <Layout theme="dark" style={{ paddingTop: '0px' }}>
      <SectionHeading theme="dark">🎓 Academy 🎓</SectionHeading>

      <Container>
        <TimeSection>
          <DataContainer>
            <DataHeader>
              <DataHeading>
                Bachelor in Computer Engineering -{' '}
                <a href="https://inatel.br/">Inatel</a>
              </DataHeading>
              <DataSubtitle>
                From: January/2017 - To: December/2021
              </DataSubtitle>
            </DataHeader>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              turpis lectus, feugiat vel egestas sit amet, lacinia at velit.
              Pellentesque congue ante sit amet fermentum sollicitudin. Aenean
              eu egestas tellus. Donec dictum leo non iaculis tincidunt. Mauris
              vulputate sed ipsum vel vehicula. In hac habitasse platea
              dictumst. Curabitur nec magna ligula.
            </p>
          </DataContainer>
          <TimelineContainer>
            <TimelineLine style={{ maxHeight: '8px' }} />
            <TimelinePoint />
            <TimelineLine />
          </TimelineContainer>
        </TimeSection>

        <TimeSection>
          <DataContainer>
            <DataHeader>
              <DataHeading>
                Technical Course of Electronic with Emphasis on Control and
                Automation - <a href="https://www.etefmc.com.br/">ETE FMC</a>
              </DataHeading>
              <DataSubtitle>
                From: January/2014 - To: December/2016
              </DataSubtitle>
            </DataHeader>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              turpis lectus, feugiat vel egestas sit amet, lacinia at velit.
              Pellentesque congue ante sit amet fermentum sollicitudin. Aenean
              eu egestas tellus. Donec dictum leo non iaculis tincidunt. Mauris
              vulputate sed ipsum vel vehicula. In hac habitasse platea
              dictumst. Curabitur nec magna ligula.
            </p>
          </DataContainer>
          <TimelineContainer>
            <TimelineLine style={{ maxHeight: '8px' }} />
            <TimelinePoint />
            <TimelineLine />
          </TimelineContainer>
        </TimeSection>
      </Container>
    </Layout>
  );
};
