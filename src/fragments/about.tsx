'use client';

import React from 'react';
import { Layout, SectionHeading } from '../components';

export const AboutComposition: React.FC = () => {
	return (
		<Layout theme="light">
			<SectionHeading theme="light">📖 Lore 📖</SectionHeading>
			<p>
				A tech enthusiast since I was a kid, I started writing my first
				lines of code around age 13, just for fun. Instigated by
				curiosity, I have improved my taste for programming and
				development over the years. I keep dedicating myself and
				studying more and more. Always looking to be better than
				yesterday.
			</p>
			<p>
				Free time gamer, I like to spend my enjoying a good time hanging
				out, reading good books, going to parties or just watching
				movies. Always trying get the best part of everything, focused
				to get good experiences of everything. I like people that is
				open minded to free talk about everything at all.
			</p>
			<p>
				As a professional, I always want to keep a great place to work
				as a team. I like to keep in touch with everybody and spread all
				the knowledge. I'll stay fine in a place that people like to
				help each other to grow together and achieve objectives with
				teamwork.
			</p>
		</Layout>
	);
};
