import { forwardRef } from 'react';
import styles from './profile-avatar.module.scss';

export const ProfileAvatar = forwardRef<HTMLDivElement>((props, ref) => {
  return <div {...props} ref={ref} className={styles.avatar} />;
});
