import { SectionHeading } from '../components';

import styles from './jobs.module.scss';

export const JobsComposition: React.FC = () => {
  return (
    <>
      <SectionHeading theme="light">⚔️ Adventures ⚔️</SectionHeading>

      <DataList
        dataList={[
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
    <div className={styles.container}>
      {dataList.map(({ title, subtitle, description, link, company }) => (
        <div className={styles.dataContainer}>
          <div className={styles.dataHeader}>
            <h2 className={styles.dataHeading}>
              {title} -&nbsp;
              <a href={link} target="_blank">
                {company}
              </a>
            </h2>
            <span className={styles.dataSubtitle}>{subtitle}</span>
          </div>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};
