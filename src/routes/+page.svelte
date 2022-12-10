<script>
	import Profile from '$lib/components/profile.svelte';
	import Project from '$lib/components/project.svelte';

	import {
		prWom,
		prFps,
		prInvSys,
		prGnomeSwitcher,
		prFmanime,
		prSimpleFileConverter
	} from '$lib/projects';
</script>

<svelte:head>
	<!-- GitHub Buttons -->
	<script async defer src="https://buttons.github.io/buttons.js"></script>
</svelte:head>

<div class="grid-container">
	<Profile />

	<div class="projects">
		<h2>## Games</h2>
		<Project {...prWom}>
			World of Monkeys is a mobile game being made in Godot engine using C# as primary language. For
			3D creation (characters, models, maps), Blender is being used, for 2D - GIMP and Krita.
			<span slot="more-desc">
				<br /><br />
				It's a 3D Side-scrolling RPG game about Monkeys focused on platforming and exploring while encountering
				enemies and allies. <br /><br />
				Some of the systems include:<br />
				- Custom Character Controller - a kinematic player controller for platforming, smooth movement
				(acceleration and deceleration), smooth camera follow, handles slopes, variable jump, coyote
				timer, jump buffer and more<br />
				- Dynamic Inventory System<br />
				- Quest System<br />
				- UI controls for comfortable mobile experience<br />
				- Combat and AI<br />
				- Save/Load, Checkpoints, Level Loader
			</span>
		</Project>
		<Project {...prFps}>
			Engine: Godot, <br />
			Language: GDScript
		</Project>
		<Project {...prInvSys}>
			Engine: Godot, <br />
			Language: GDScript, (C# - not public)
		</Project>

		<h2>## Apps</h2>
		<Project {...prFmanime}>
			Fmanime is a cross-platform Japanese animation (Anime) and comics (Manga) player/reader.
			<br /><br />
			Built with Flutter framework, Dart language.
			<br /><br />
			It scrapes data from popular anime and manga websites. <br />
			You can add them to your library and track/sync changes with MyAnimeList.
		</Project>
		<Project {...prSimpleFileConverter}>
			Easy and quick conversion of many files at once to a new format. This includes videos (mp4,
			avi, webm...), images (png, jpg, webp...), audio (mp3, wav, ogg...).
			<br /><br />
			Supported platforms: Windows, Linux, MacOS
			<br /><br />
			Made with SvelteKit and Tauri (Lightweight Electron alternative in Rust)
		</Project>
		<Project {...prGnomeSwitcher}>
			Platform: Linux with GNOME, <br />
			Language: Rust
		</Project>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		background-color: #1a202c;
		color: #cbd5e0;
		font: inherit;
		font-family: Fira Code;
		font-weight: normal;
		font-style: normal;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr;
		margin-bottom: 5rem;
	}

	h2 {
		color: white;
	}

	.projects {
		margin-top: 0rem;
		margin-left: 5rem;
		margin-right: 5rem;
	}

	/* For desktop: */
	@media screen and (min-width: 1100px) {
		.grid-container {
			grid-template-columns: 2fr 5fr;
		}

		.projects {
			margin-top: 5rem;
			margin-left: 0rem;
		}

		:global(body) {
			margin: 8px;
		}
	}
</style>
