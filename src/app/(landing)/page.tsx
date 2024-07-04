import { JobsList, Section } from '@/components';

export default function HomePage() {
  return (
    <>
      <Section heading="A bit about me">
        <p>
          As a tech enthusiast from an early age, my journey into coding
          commenced at the tender age of 13, driven purely by the joy of
          exploration. Fueled by an insatiable curiosity, I have diligently
          cultivated and refined my passion for programming and development over
          the years.
        </p>
        <p>
          My optimal skills are over Typescript and frontend development,
          dominating modern web frameworks like React.js and Next.js. But I
          don't limit myself to Frontend, so I am able to work in any part of a
          product development. I have a deep interest in software architecture
          and challenging problems.
        </p>
      </Section>

      <Section heading="Adventures">
        <JobsList
          jobs={[
            {
              company: 'Fleek',
              title: 'Lead Frontend Engineer',
              subtitle: 'From: October/2021 - To: May/2024',
              description: '',
              link: 'https://fleek.xyz',
            },
            {
              company: 'KeyMax',
              title: 'Full Stack Engineer',
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
      </Section>

      <Section heading="Academics">
        <JobsList
          jobs={[
            {
              company: 'USP/Esalq',
              title: 'Lead Frontend Engineer',
              subtitle: 'From: 2023 - To: 2025 (in progress)',
              description: '',
              link: 'https://www.linkedin.com/school/mbauspesalq/',
            },
            {
              company: 'Inatel',
              title: 'BSc in Computer Engineering',
              subtitle: 'From: 2017 - To: 2021',
              description: '',
              link: 'https://www.linkedin.com/school/inatel',
            },
          ]}
        />
      </Section>
    </>
  );
}
