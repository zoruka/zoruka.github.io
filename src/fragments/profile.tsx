'use client';

import React from 'react';
import { getLevel } from '../utils';
import {
	IconLink,
	Layout,
	ProfileAvatar,
	ProfileData,
	TalkBalloon,
} from '../components';

const Profile = {
	name: 'Felipe Mendes',
	level: `${getLevel()}`,
	profession: 'Software Engineer',
	location: 'Brazil',
};

const Links = {
	github: 'https://github.com/zoruka',
	twitter: 'https://twitter.com/_zoruka',
	linkedIn: 'https://www.linkedin.com/in/felipejmendes',
};

export const ProfileComposition: React.FC = () => {
	return (
		<Layout theme="dark" style={{ justifyContent: 'center' }}>
			<TalkBalloon>Hello World!</TalkBalloon>
			<ProfileAvatar />

			{Object.entries(Profile).map(([label, data]) => (
				<ProfileData label={label}>{data}</ProfileData>
			))}

			<ProfileData label="Find Me">
				<IconLink href={Links.github} icon="GitHub" />
				<IconLink href={Links.twitter} icon="Twitter" />
				<IconLink href={Links.linkedIn} icon="LinkedIn" />
			</ProfileData>
		</Layout>
	);
};
