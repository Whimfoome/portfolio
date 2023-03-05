<script>
	import Profile from '$lib/components/profile.svelte';
	import Project from '$lib/components/project.svelte';

	import {
		prWom,
		prFps,
		prInvSys,
		prSwiftMarket,
		prFmanime,
		prSimpleFileConverter,
		prGnomeSwitcher
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
			A 3D Side-scrolling RPG platformer mobile game made in Godot.
			<br /><br />
			Some of the systems include:<br />
			- Custom Character Controller - a kinematic player controller for platforming, smooth movement
			(acceleration and deceleration), smooth camera follow, handles slopes, variable jump, coyote timer,
			jump buffer and more<br />
			- Dynamic Inventory System<br />
			- Quest System<br />
			- UI controls for comfortable mobile experience<br />
			- Combat and AI<br />
			- Save/Load, Checkpoints, Level Loader
			<span slot="more-desc">
				<br /><br />
				Used technologies include: <br />
				- Engine: Godot with C# <br />
				-- 3D, GUI, Physics, Signals, Particles, Custom resources, AI, Input, Audio, Shaders, etc...
				<br />
				- Models and Animations: Blender
			</span>
		</Project>
		<Project {...prFps}>
			FPS template for Godot to give starter content for a new or already existing project! Written
			in GDScript.
			<br /><br />
			Includes: <br />
			- Smooth Movement (Acceleration and Deceleration) <br />
			- Smooth Camera Rotation <br />
			- Handles Slopes <br />
			- Optional Sprinting <br />
			- Air Control <br />
			- Highly Modular <br />
			- Easily Adjustable from the Inspector <br />
			- Joypad Controller Support
		</Project>
		<Project {...prInvSys}>
			Slot-based Inventory System for Godot to manage and organize in-game items efficiently. Can be
			used with GDScript or C#.
			<br /><br />
			Includes: <br />
			- Clean and intuitive interface <br />
			- Item Stacking, Drag & Drop <br />
			- Data from custom resources that can be edited in the inspector or in code <br />
			- Modular for a cohesive development experience <br />
			- Highly scalable and customizable, allowing complex item interactions <br />
			- Simple examples for integration
		</Project>

		<h2>## Apps</h2>
		<Project {...prSwiftMarket}>
			Custom E-commerce solution with a headless CMS integration and Stripe payments, providing
			better performance and faster development time.
			<br /><br />
			Used technologies include: <br />
			- Frontend: SvelteKit, TailwindCSS <br />
			- Backend: Strapi (headless CMS) <br />
			- Payments: Stripe
		</Project>
		<Project {...prFmanime}>
			A cross-platform Japanese animation (Anime) and comics (Manga) player/reader.
			<br /><br />
			The data is gathered from popular anime and manga websites. <br />
			You can track and watch different series from your library.
			<br /><br />
			Used technologies include: <br />
			- Flutter with Dart <br />
			- HiveDB <br />
			- Custom Data Scraping
		</Project>
		<Project {...prSimpleFileConverter}>
			Easy and quick conversion of many files at once to a new format. This includes videos (mp4,
			avi, webm...), images (png, jpg, webp...), audio (mp3, wav, ogg...).
			<br /><br />
			Supported platforms: Windows, Linux, MacOS
			<br /><br />
			Used technologies include: <br />
			- SvelteKit with TypeScript <br />
			- Tauri with Rust <br />
			- FFmpeg
		</Project>
		<Project {...prGnomeSwitcher}>
			Transform the GNOME Desktop Environment experience with many configurational changes that make
			it look like a traditional desktop.
			<br /><br />
			Used technologies include: <br />
			- GTK <br />
			- Rust <br />
			- Bash
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
