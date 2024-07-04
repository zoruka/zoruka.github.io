import { Section } from '@/components';
import { ProjectsList } from '@/components/projects-list';

export default function ProjectsPage() {
  return (
    <>
      <Section heading="Personal Quests">
        <ProjectsList
          projects={[
            {
              date: 'from 2024',
              description:
                'A personal project to help people learn Japanese. I have developed a web application that uses spaced repetition to help users memorize Japanese vocabulary through a daily game.',
              role: 'Full-Stack Engineer',
              url: 'https://japanesefy.com',
              stack: ['Next.js', 'Typescript', 'Tailwind'],
            },
            {
              title: 'EthTracker',
              date: 'June 2024',
              description:
                'This is a web application that allows users to track their Ethereum wallet balance and transactions.',
              url: 'https://ethtracker.zoruka.xyz/',
              role: 'Frontend Engineer',
              stack: ['React.js', 'Typescript', 'Tailwind', 'Ethereum', 'Web3'],
              repository: 'https://github.com/zoruka/eth-tracker',
            },
            {
              title: 'Rick and Morty Consumer',
              date: 'September 2021',
              description:
                'A web application developed for a job interview. This application only fetches and shows data from Ricky and Morty API.',
              url: 'https://zoruka.xyz/rick-and-morty-consumer/#/',
              role: 'Frontend Engineer',
              stack: ['React.js', 'Typescript', 'Material-UI', 'Redux'],
              repository: 'https://github.com/zoruka/rick-and-morty-consumer',
            },
          ]}
        />
      </Section>
      <Section heading="Job Quests">
        <ProjectsList
          projects={[
            {
              date: 'from 2023 to 2024',
              description:
                'Led the re-architecture of the Fleek web application, a platform for decentralized site and storage hosting. I participated in defining the frontend and designing the product, ensuring alignment with a unique design system created by Fleek designers.',
              role: 'Lead Frontend Engineer',
              url: 'https://app.fleek.xyz',
              stack: ['Next.js', 'Typescript', 'GraphQL', 'AWS', 'Web3'],
            },
            {
              title: 'Non-fungible Apps',
              date: 'from 2022 to 2023',
              description:
                'Researched on Non-Fungible Apps, an initiative aimed at decentralizing web3 app frontend infrastructure through NFTs. I have developed and deployed Solidity contracts and integrated them into a web app.',
              role: 'Software Engineer',
              url: 'https://github.com/fleekxyz/non-fungible-apps',
              stack: [
                'React.js',
                'Typescript',
                'Solidity',
                'Hardhat',
                'Ethers.js',
                'Ethereum',
                'Web3',
              ],
              repository: 'https://github.com/fleekxyz/non-fungible-apps',
            },
            {
              date: 'from 2021 to 2022',
              description:
                'Developed the frontend application for Sonic. Sonic is a automated market maker (AMM) that allows users to trade tokens on the Internet Computer blockchain.',
              role: 'Frontend Engineer',
              url: 'https://app.sonic.ooo/swap',
              stack: [
                'React.js',
                'Typescript',
                'Chakra-UI',
                'Internet Computer',
                'Web3',
              ],
            },
          ]}
        />
      </Section>
    </>
  );
}
