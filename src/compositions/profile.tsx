import React from 'react';
import { getLevel } from '../utils';
import {
  IconLink,
  Layout,
  ProfileAvatar,
  ProfileData,
  Section,
  TalkBalloon,
} from '../components';

const Profile = {
  name: 'Felipe Juvêncio Mendes',
  level: `${getLevel()}`,
  profession: 'Software Developer',
  location: 'Santa Rita do Sapucaí, Brazil',
};

export const ProfileComposition: React.FC = () => {
  return (
    <Layout theme="dark">
      <Section>
        <TalkBalloon>Hello World!</TalkBalloon>
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
