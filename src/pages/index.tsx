import React from 'react';
import Layout from '../components/layout';
import ProfileAvatar from '../components/profile-avatar';
import ProfileData from '../components/profile-data';
import Section from '../components/section';
import TalkBalloon from '../components/talk-balloon';
import { getLevel } from '../utils';

const PROFILE = {
  name: 'Felipe Juvêncio Mendes',
  profession: 'Software Developer',
  level: `${getLevel()}`,
};

const HomePage: React.FC = () => {
  return (
    <Layout>
      <TalkBalloon>Hello World!</TalkBalloon>
      <Section>
        <ProfileAvatar />
        {Object.entries(PROFILE).map(([label, data]) => (
          <ProfileData label={label}>{data}</ProfileData>
        ))}
      </Section>
    </Layout>
  );
};

export default HomePage;
