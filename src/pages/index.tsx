import React from 'react';
import { Footer } from '../components';
import {
  AboutComposition,
  AcademicComposition,
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
      <AcademicComposition />
      <Footer />
    </>
  );
};

export default HomePage;
