import styles from './projects-list.module.scss';

export type Project = {
  title?: string;
  description: string;
  date: string;
  role: string;
  stack: string[];
  url: string;
  repository?: string;
};

export type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return projects.map(
    ({ title, description, role, date, stack, url, repository }) => (
      <div className={styles.container}>
        <div className={styles.data}>
          <h2 className={styles.heading}>
            <a href={url} target="_blank">
              {title || new URL(url).hostname}
            </a>
          </h2>
          <span className={styles.role}>{role}</span>
          <span className={styles.stack}>{stack.join(', ')}</span>
          <span className={styles.stack}>
            {date}
            {repository && (
              <>
                &nbsp;-&nbsp;
                <a href={repository} target="_blank">
                  Code
                </a>
              </>
            )}
          </span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    )
  );
};
