import React from 'react';
import IconLink from '../components/icon-link';
import Layout from '../components/layout';
import ProfileAvatar from '../components/profile-avatar';
import ProfileData from '../components/profile-data';
import Section from '../components/section';
import TalkBalloon from '../components/talk-balloon';
import { getLevel } from '../utils';

const Profile = {
  name: 'Felipe Juvêncio Mendes',
  level: `${getLevel()}`,
  profession: 'Software Developer',
  location: 'Santa Rita do Sapucaí, Brazil',
};

const HomePage: React.FC = () => {
  return (
    <Layout>
      <TalkBalloon>Hello World!</TalkBalloon>

      <Section>
        <ProfileAvatar />

        {Object.entries(Profile).map(([label, data]) => (
          <ProfileData label={label}>{data}</ProfileData>
        ))}

        <ProfileData label="Find Me">
          <IconLink href="https://github.com/zoruka" icon="GitHub" />
          <IconLink href="https://www.instagram.com/zoruka" icon="Instagram" />
          <IconLink
            href="https://www.linkedin.com/in/felipejmendes/"
            icon="LinkedIn"
          />
          <IconLink href="mailto:zo.fmendes@gmail.com" icon="Mail" />
        </ProfileData>
      </Section>
    </Layout>
  );
};

export default HomePage;
