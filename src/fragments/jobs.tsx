'use client';

import React from 'react';
import styled from 'styled-components';
import { Layout, SectionHeading } from '../components';

export const JobsComposition: React.FC = () => {
	return (
		<>
			<SectionHeading theme="light">⚔️ Adventures ⚔️</SectionHeading>

			<DataList
				dataList={[
					{
						company: 'Fleek',
						title: 'Software Engineer',
						subtitle: 'From: October/2021 - To: Now',
						description: '',
						link: 'https://fleek.xyz',
					},
					{
						company: 'KeyMax',
						title: 'Fullstack Developer',
						subtitle: 'From: July/2019 - To: October/2021',
						description: '',
						link: 'https://keymax.com.br',
					},
					{
						company: 'ICC',
						title: 'Software Development Intern',
						subtitle: 'From: July/2017 - To: May/2019',
						description: '',
						link: 'https://inatel.br/icc',
					},
				]}
			/>
		</>
	);
};

type Data = {
	title: string;
	subtitle: string;
	description: string;
	link: string;
	company: string;
};

type DataListProps = {
	dataList: Data[];
};

const DataList: React.FC<DataListProps> = ({ dataList }) => {
	return (
		<Container>
			{dataList.map(({ title, subtitle, description, link, company }) => (
				<DataContainer>
					<DataHeader>
						<DataHeading>
							{title} -&nbsp;
							<a href={link} target="_blank">
								{company}
							</a>
						</DataHeading>
						<DataSubtitle>{subtitle}</DataSubtitle>
					</DataHeader>
					<p>{description}</p>
				</DataContainer>
			))}
		</Container>
	);
};

const DataContainer = styled.div`
	flex: 1;
	flex-direction: column;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding-right: 15px;

	p {
		padding: 15px 5px;
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
