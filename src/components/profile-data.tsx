import styles from './profile-data.module.scss';

export const ProfileData: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => {
  return (
    <div className={styles.container}>
      <span>{children}</span>
      <label>{label}</label>
    </div>
  );
};
