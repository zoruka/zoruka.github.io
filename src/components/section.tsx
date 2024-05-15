import { forwardRef } from 'react';
import styles from './section.module.scss';

export const Section = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  return <div {...props} ref={ref} className={styles.section} />;
});
