import React from 'react';
import { Footer } from '../components';
import {
	AboutComposition,
	AcademicComposition,
	JobsComposition,
} from '../fragments';
import { ProfileComposition } from '../fragments/profile';

const HomePage: React.FC = () => {
	return (
		<>
			<ProfileComposition />
			<AboutComposition />
			<JobsComposition />
			<AcademicComposition />
			<Footer />
		</>
	);
};

export default HomePage;
