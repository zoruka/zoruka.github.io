import React from 'react';
import { AboutComposition, SkillsComposition } from '../compositions';
import { ProfileComposition } from '../compositions/profile';

const HomePage: React.FC = () => {
  return (
    <>
      <ProfileComposition />
      <AboutComposition />
      <SkillsComposition />
    </>
  );
};

export default HomePage;
