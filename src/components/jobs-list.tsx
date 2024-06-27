import styles from './jobs-list.module.scss';

export type Job = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  company: string;
};

export type JobsListProps = {
  jobs: Job[];
};

export const JobsList: React.FC<JobsListProps> = ({ jobs }) => {
  return jobs.map(({ title, subtitle, description, link, company }) => (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          {title}&nbsp;-&nbsp;
          <a href={link} target="_blank">
            {company}
          </a>
        </h2>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      <p>{description}</p>
    </div>
  ));
};
