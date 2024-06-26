'use client';

import React from 'react';
import { SectionHeading } from '../components';
import { Layout } from '../components/layout';
import Link from 'next/link';
import styles from './not-found.module.scss';

const NotFoundPage = (): JSX.Element => {
  return (
    <Layout theme="dark">
      <SectionHeading theme="dark">😢 Game Over 😢</SectionHeading>
      <p className={styles.message}>
        Curiouser and curiouser
        <br />
        This page could not be found
      </p>
      <Link href="/" className={styles.home_link}>
        come back
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
