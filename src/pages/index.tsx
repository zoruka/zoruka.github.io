import React from 'react';
import { AboutComposition } from '../compositions';
import { ProfileComposition } from '../compositions/profile';

const HomePage: React.FC = () => {
  return (
    <>
      <ProfileComposition />
      <AboutComposition />
    </>
  );
};

export default HomePage;
