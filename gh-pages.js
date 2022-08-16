import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
