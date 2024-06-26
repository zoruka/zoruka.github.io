'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import styles from './layout.module.scss';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants>;

export const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  theme = 'dark',
  ...props
}) => {
  return (
    <section className={containerVariants({ theme, className })} {...props}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

const containerVariants = cva(styles.container, {
  variants: {
    theme: {
      light: styles.container_light,
      dark: styles.container_dark,
    },
  },
});
