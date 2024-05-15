import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>Made with ❤️ by </span>
      <a href="https://github.com/zoruka">zoruka</a>
    </div>
  );
};
