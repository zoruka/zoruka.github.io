'use client';

import React from 'react';
import { Layout, SectionHeading } from '../components';
import { JobsComposition } from '.';

export const AboutComposition: React.FC = () => {
	return (
		<Layout theme="light">
			<SectionHeading theme="light">📖 Lore 📖</SectionHeading>
			<p>
				As a tech enthusiast from an early age, my journey into coding
				commenced at the tender age of 13, driven purely by the joy of
				exploration. Fueled by an insatiable curiosity, I have
				diligently cultivated and refined my passion for programming and
				development over the years. Continuously dedicated to honing my
				skills, I remain committed to perpetual learning, investing time
				and effort into studying and evolving. My relentless pursuit of
				improvement is fueled by the belief that each day presents an
				opportunity to surpass the achievements of yesterday.
			</p>

			<div style={{ height: '3rem' }} />

			<JobsComposition />
		</Layout>
	);
};
