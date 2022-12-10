<script>
	import avatar from '$lib/assets/avatar.webp';
	import logo_github from '$lib/assets/logo-github.webp';
	import logo_twitter from '$lib/assets/logo-twitter.webp';
	import logo_youtube from '$lib/assets/logo-youtube.webp';
	import logo_linkedin from '$lib/assets/logo-linkedin.webp';
	import logo_itchio from '$lib/assets/logo-itchio.svg';
</script>

<div class="profile">
	<img class="avatar" alt="Avatar" src={avatar} />
	<h2 class="name">Dimitar Dimitrov</h2>
	<h3 class="username">Whimfoome</h3>
	<p class="description">
		I make things work. Passionate about Flutter, Svelte, Godot, Rust, Linux.
	</p>
	<div class="social">
		<a href="https://github.com/Whimfoome" target="_blank" rel="noreferrer">
			<img src={logo_github} alt="GitHub" />
		</a>
		<a href="https://twitter.com/Whimfoome1" target="_blank" rel="noreferrer">
			<img src={logo_twitter} alt="Twitter" />
		</a>
		<a
			href="https://www.youtube.com/channel/UC-st0HrCRVScIW75sCGpH_Q"
			target="_blank"
			rel="noreferrer"
		>
			<img src={logo_youtube} alt="YouTube" />
		</a>
		<a
			href="https://www.linkedin.com/in/dimitar-dimitrov-9a7730235"
			target="_blank"
			rel="noreferrer"
		>
			<img src={logo_linkedin} alt="LinkedIn" />
		</a>
		<a href="https://whimfoome.itch.io/" target="_blank" rel="noreferrer">
			<img src={logo_itchio} alt="Itch IO" width="32px" height="32px" />
		</a>
	</div>
</div>

<style>
	.profile {
		margin: 1rem;
		overflow-wrap: break-word;
	}

	.avatar {
		width: 16.25rem;
		height: 16.25rem;
		border-radius: 50%;
		display: grid;
		margin-left: auto;
		margin-right: auto;
	}

	.name {
		color: white;
		margin-top: 1.25rem;
		margin-bottom: 0rem;
		text-align: center;
	}

	.username {
		margin: 0rem;
		font-weight: 300;
		text-align: center;
	}

	.description {
		color: white;
		padding-bottom: 0.65em;
		text-align: center;
	}

	.social {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	/* For desktop: */
	@media screen and (min-width: 1100px) {
		.profile {
			margin: 5rem;
		}

		.avatar {
			display: inline;
		}

		.name {
			text-align: left;
		}

		.username {
			text-align: left;
		}

		.description {
			text-align: left;
		}

		.social {
			justify-content: left;
		}
	}
</style>
