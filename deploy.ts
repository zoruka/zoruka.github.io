import { publish } from 'gh-pages';

console.log('Deploy Started!');

publish(
	'out',
	{
		branch: 'gh-pages',
		nojekyll: true,
		cname: 'www.zoruka.xyz',
	},
	(error) => {
		if (error) {
			console.error(error);
		}
		console.log('Deploy Complete!');
	}
);
