import React from 'react';
import { Layout, SectionHeading } from '../components';
import { JobsComposition } from '.';
import styles from './about.module.scss';

export const AboutComposition: React.FC = () => {
  return (
    <Layout theme="light">
      <SectionHeading theme="light">📖 Lore 📖</SectionHeading>
      <p className={styles.paragraph}>
        As a tech enthusiast from an early age, my journey into coding commenced
        at the tender age of 13, driven purely by the joy of exploration. Fueled
        by an insatiable curiosity, I have diligently cultivated and refined my
        passion for programming and development over the years. My optimal
        skills are over Typescript and frontend development, dominating modern
        web frameworks like React.js and Next.js. But I don't limit myself to
        Frontend, so I am able to work in any part of a product development. I
        have a deep interest in software architecture and challenging problems.
      </p>

      <JobsComposition />
    </Layout>
  );
};
