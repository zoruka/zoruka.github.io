import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';

export const AboutComposition: React.FC = () => {
  return (
    <Layout theme="light">
      <Section>
        <h1>About</h1>
        <p>
          A tech enthusiast since I was a kid, I started writing my first lines
          of code around age 13, just for fun. Instigated by curiosity, I have
          improved my taste for programming and development over the years. I
          keep dedicating myself and studying more and more. Always looking to
          be better than yesterday.
        </p>
      </Section>
    </Layout>
  );
};
