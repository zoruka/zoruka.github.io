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

	color: var(--light);
	text-align: center;

	a {
		color: var(--light);
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

export const JobsComposition: React.FC = () => {
	return (
		<Layout theme="dark">
			<SectionHeading theme="dark">⚔️ Adventures ⚔️</SectionHeading>

			<Container>
				<TimeSection>
					<TimelineContainer>
						<TimelineLine style={{ maxHeight: '8px' }} />
						<TimelinePoint />
						<TimelineLine />
					</TimelineContainer>
					<DataContainer>
						<DataHeader>
							<DataHeading>
								Frontend Developer -{' '}
								<a href="https://fleek.co/">Fleek</a>
							</DataHeading>
							<DataSubtitle>
								From: October/2021 - To: Now
							</DataSubtitle>
						</DataHeader>
						<p>
							Working on frontend development to Internet
							Computer.
						</p>
					</DataContainer>
				</TimeSection>

				<TimeSection>
					<TimelineContainer>
						<TimelineLine style={{ maxHeight: '8px' }} />
						<TimelinePoint />
						<TimelineLine />
					</TimelineContainer>
					<DataContainer>
						<DataHeader>
							<DataHeading>
								Fullstack Developer -{' '}
								<a href="https://keymax.com.br/">KeyMax</a>
							</DataHeading>
							<DataSubtitle>
								From: July/2019 - To: October/2021
							</DataSubtitle>
						</DataHeader>
						<p>
							I started working just as a frontend developer,
							always keeping apart with UX tendencies. By the time
							I was receiving more responsibilities and start to
							help in product creations. Now I work as a tech
							leader mentoring new developers, but in the time I
							am developing too. I have worked in several parts of
							the company.
						</p>
					</DataContainer>
				</TimeSection>

				<TimeSection>
					<TimelineContainer>
						<TimelineLine style={{ maxHeight: '8px' }} />
						<TimelinePoint />
						<TimelineLine />
					</TimelineContainer>
					<DataContainer>
						<DataHeader>
							<DataHeading>
								Software Developer Intern -{' '}
								<a href="https://inatel.br/icc/">ICC</a>
							</DataHeading>
							<DataSubtitle>
								From: July/2017 - To: May/2019
							</DataSubtitle>
						</DataHeader>
						<p>
							At this work I had my first touch with professional
							programming. I traveled through the basics to
							advanced concepts, worked in different projects with
							different teams. I had to deal with a lot of stacks
							like Java, Android, Ionic, Angular, Electron and
							others.
						</p>
					</DataContainer>
				</TimeSection>
			</Container>
		</Layout>
	);
};
