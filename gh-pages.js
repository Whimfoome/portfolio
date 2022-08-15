import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/Whimfoome/portfolio.git', // Update to point to your repository
		user: {
			name: 'Whimfoome', // update to use your name
			email: '42871796+Whimfoome@users.noreply.github.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
