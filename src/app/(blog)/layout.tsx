import './globals.scss';
import styles from './layout.module.scss';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
