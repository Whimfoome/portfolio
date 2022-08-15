<script>
	import avatar from '$lib/assets/avatar.png';
	import logo_github from '$lib/assets/logo-github.png';
	import logo_twitter from '$lib/assets/logo-twitter.png';
	import logo_youtube from '$lib/assets/logo-youtube.png';
	import logo_linkedin from '$lib/assets/logo-linkedin.png';
</script>

<div class="profile">
	<img class="avatar" alt="Avatar" src={avatar} />
	<h2 class="name">Dimitar Dimitrov</h2>
	<h3 class="username">Whimfoome</h3>
	<p class="description">
		I like making games
		<br /><br />
		Experienced with Unreal Engine, Godot and a bit of Unity
		<br /><br />
		Love contributing to open-source projects
	</p>
	<div class="social">
		<a href="https://github.com/Whimfoome" target="_blank">
			<img src={logo_github} alt="GitHub" />
		</a>
		<a href="https://twitter.com/Whimfoome1" target="_blank">
			<img src={logo_twitter} alt="Twitter" />
		</a>
		<a href="https://www.youtube.com/channel/UC-st0HrCRVScIW75sCGpH_Q" target="_blank">
			<img src={logo_youtube} alt="YouTube" />
		</a>
		<a href="https://www.linkedin.com/in/dimitar-dimitrov-9a7730235" target="_blank">
			<img src={logo_linkedin} alt="LinkedIn" />
		</a>
	</div>
</div>

<style>
	.profile {
		margin: 5rem;
		overflow-wrap: break-word;
	}

	.avatar {
		width: 16.25rem;
		height: 16.25rem;
		border-radius: 50%;
	}

	.name {
		color: white;
		margin-top: 1.25rem;
		margin-bottom: 0rem;
	}

	.username {
		margin: 0rem;
		font-weight: 300;
	}

	.description {
		color: white;
		padding-bottom: 0.65em;
	}

	a {
		padding-right: 0.5em;
	}
</style>
