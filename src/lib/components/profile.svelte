<script>
	import avatar from '$lib/assets/avatar.webp?enhanced';
	// @ts-ignore
	import GrommetIconsGithub from '~icons/grommet-icons/github';
	// @ts-ignore
	import GrommetIconsLinkedin from '~icons/grommet-icons/linkedin';
	// @ts-ignore
	import GrommetIconsMail from '~icons/grommet-icons/mail';
</script>

<div class="profile">
	<enhanced:img class="avatar" alt="Avatar" src={avatar} />
	<h2 class="name">Dimitar Dimitrov</h2>
	<h3 class="username">Whimfoome</h3>
	<p class="description">I make things work. Passionate about Svelte, Godot, Rust, Linux.</p>
	<div class="social">
		<a href="mailto:whimfoome@protonmail.com" title="Mail">
			<GrommetIconsMail style="font-size: 2em; color: white" />
		</a>
		<a href="https://github.com/Whimfoome" target="_blank" rel="noreferrer" title="GitHub Social">
			<GrommetIconsGithub style="font-size: 2em; color: white" />
		</a>
		<a
			href="https://www.linkedin.com/in/dimitar-dimitrov1/"
			target="_blank"
			rel="noreferrer"
			title="LinkedIn Social"
		>
			<GrommetIconsLinkedin style="font-size: 2em; color: white" />
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
