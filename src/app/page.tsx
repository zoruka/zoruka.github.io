import React from 'react';
import { Footer } from '../components';
import { AboutComposition, JobsComposition } from '../fragments';
import { ProfileComposition } from '../fragments/profile';

const HomePage: React.FC = () => {
	return (
		<>
			<ProfileComposition />
			<AboutComposition />
			<Footer />
		</>
	);
};

export default HomePage;
