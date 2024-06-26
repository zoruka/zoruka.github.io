'use client';

import React from 'react';
import styles from './section-heading.module.scss';
import { VariantProps, cva } from 'class-variance-authority';

export type SectionHeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
  theme,
  ...props
}) => {
  return (
    <h1 className={headingVariants({ className, theme })} {...props}>
      {children}
    </h1>
  );
};

const headingVariants = cva(styles.heading, {
  variants: {
    theme: {
      light: styles.heading_light,
      dark: styles.heading_dark,
    },
  },
});
