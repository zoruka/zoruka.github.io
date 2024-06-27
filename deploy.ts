import { publish } from 'gh-pages';

console.log('Deploy Started!');

publish(
  'out',
  {
    branch: 'gh-pages',
    nojekyll: true,
    cname: 'zoruka.xyz',
  },
  (error) => {
    if (error) {
      console.error('[ERROR]', error);

      throw new Error('Deploy Failed!');
    }

    console.log('Deploy Complete!');
  }
);
