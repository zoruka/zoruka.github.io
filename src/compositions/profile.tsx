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

const Links = {
  github: 'https://github.com/zoruka',
  instagram: 'https://www.instagram.com/zoruka',
  linkedIn: 'https://www.linkedin.com/in/felipejmendes/',
  mail: 'mailto:zo.fmendes@gmail.com',
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
          <IconLink href={Links.github} icon="GitHub" />
          <IconLink href={Links.instagram} icon="Instagram" />
          <IconLink href={Links.linkedIn} icon="LinkedIn" />
          <IconLink href={Links.mail} icon="Mail" />
        </ProfileData>
      </Section>
    </Layout>
  );
};
