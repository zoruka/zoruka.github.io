'use client';

import React from 'react';
import styled from 'styled-components';
import { Layout, SectionHeading } from '../components';

const TimeSection = styled.section`
	display: flex;
	justify-content: stretch;
	align-items: stretch;
	width: 100%;
`;

const TimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60px;
`;
const TimelinePoint = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border: 3px solid var(--blue);

	&::after {
		display: flex;
		justify-content: center;
		align-items: center;
		content: ' ';
		width: 16px;
		height: 16px;
		background-color: var(--blue);
	}
`;
const TimelineLine = styled.span`
	width: 3px;
	height: 100%;
	flex: 1;
	background-color: var(--blue);
`;

const DataContainer = styled.div`
	flex: 1;
	flex-direction: column;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding-right: 15px;

	p {
		padding: 15px 5px 45px 5px;
		margin: 0;
	}
`;
const DataHeading = styled.h2`
	font-size: 16px;
	line-height: 18px;
	margin: 5px 0px;

	color: var(--dark);
	text-align: center;

	a {
		color: var(--dark);
	}
`;
const DataSubtitle = styled.text`
	font-size: 10px;
	opacity: 0.5;
`;
const DataHeader = styled.div`
	min-height: 45px;
	width: 100%;
`;

const Container = styled.div`
	margin: 2em 0;
`;

const HyperLink = styled.a`
	color: var(--blue);
`;

export const AcademicComposition: React.FC = () => {
	return (
		<Layout theme="light">
			<SectionHeading theme="light">🎓 Academy 🎓</SectionHeading>

			<Container>
				<TimeSection>
					<DataContainer>
						<DataHeader>
							<DataHeading>
								Bachelor in Computer Engineering -{' '}
								<a href="https://inatel.br/">Inatel</a>
							</DataHeading>
							<DataSubtitle>
								From: January/2017 - To: December/2021
							</DataSubtitle>
						</DataHeader>
						<p>
							Here I had experiences with real world software
							projects, theories and algorithms. I had developed
							many different projects in a lot of different
							situations. I participated of many algorithm
							competitions and trainings. I also participated of a
							science and engineering fair with a project named{' '}
							<HyperLink href="https://inatel.br/imprensa/noticias/educacao/3110-36-fetin-inova-surpreende-e-reune-inovacoes-para-um-futuro-mais-sustentavel">
								EasyOrder
							</HyperLink>
							, my team won the first place of level 1. During the
							last years of the course, I worked as a volunteer in
							the marketing department of the{' '}
							<HyperLink href="https://www.linkedin.com/company/aaainatel">
								Athletic Academic Association
							</HyperLink>
							.
						</p>
					</DataContainer>
					<TimelineContainer>
						<TimelineLine style={{ maxHeight: '8px' }} />
						<TimelinePoint />
						<TimelineLine />
					</TimelineContainer>
				</TimeSection>

				<TimeSection>
					<DataContainer>
						<DataHeader>
							<DataHeading>
								Technical Course of Electronic with Emphasis on
								Control and Automation -{' '}
								<a href="https://www.etefmc.com.br/">ETE FMC</a>
							</DataHeading>
							<DataSubtitle>
								From: January/2014 - To: December/2016
							</DataSubtitle>
						</DataHeader>
						<p>
							Here I had my first experiences with electronics and
							embedded development. Every year during the course,
							I had to make a great group project, to present in a
							science fair that happens on end of each year.{' '}
							<HyperLink href="http://2016.febrace.org.br/virtual/2016/ENG/15/">
								One of the projects
							</HyperLink>{' '}
							got classified to a brazilian national science fair,
							and my team won as the fourth best engineering
							project of the year. I also had my first touch with
							C and C++ languages. I was able to solve problems
							and participate in programming challenge events.
						</p>
					</DataContainer>
					<TimelineContainer>
						<TimelineLine style={{ maxHeight: '8px' }} />
						<TimelinePoint />
						<TimelineLine />
					</TimelineContainer>
				</TimeSection>
			</Container>
		</Layout>
	);
};
