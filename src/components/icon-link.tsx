import React from 'react';
import Icons from '../assets/icons';

import styles from './icon-link.module.scss';

export const IconLink: React.FC<{
  href: string;
  icon: keyof typeof Icons;
}> = ({ href, icon }) => {
  return (
    <a target="__blank" href={href} className={styles.link}>
      {Icons[icon]}
    </a>
  );
};
