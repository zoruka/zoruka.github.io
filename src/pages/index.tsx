import React from 'react';
import {
  AboutComposition,
  JobsComposition,
  SkillsComposition,
} from '../compositions';
import { ProfileComposition } from '../compositions/profile';

const HomePage: React.FC = () => {
  return (
    <>
      <ProfileComposition />
      <AboutComposition />
      <SkillsComposition />
      <JobsComposition />
    </>
  );
};

export default HomePage;
