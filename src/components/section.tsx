import { forwardRef } from 'react';
import styles from './section.module.scss';
import { cn } from '@/utils';
import { SectionHeading } from './section-heading';

export type SectionProps = {
  heading: string;
} & React.HTMLProps<HTMLDivElement>;

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ heading, className, children, ...props }, ref) => {
    return (
      <section {...props} ref={ref} className={cn(styles.container, className)}>
        <SectionHeading>{heading}</SectionHeading>
        {children}
      </section>
    );
  }
);
