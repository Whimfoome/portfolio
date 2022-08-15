<script lang="ts">
	export let name: string;
	export let image: string;
	export let link: string;
	export let vertical: boolean = false;

	let imgStyle = vertical ? 'width: 50%; justify-self: center;' : 'width: 100%';
	let linkProvided = link.length !== 0;

	let buttonText = 'Read More';
	let opened = false;

	function clickedButton() {
		opened = !opened;
		buttonText = opened ? 'Read Less' : 'Read More';
	}
</script>

<div class="project">
	<div class="overlay">
		<img alt="{name} Image" src={image} style={imgStyle} />
		<p class="title">{name}</p>
		{#if linkProvided}
			<div class="star">
				<a
					class="github-button"
					href={link}
					data-color-scheme="no-preference: light; light: light; dark: light;"
					data-icon="octicon-star"
					data-size="large"
					data-show-count="true"
					aria-label="Star {name} on GitHub"
					target="_blank"
				>
					Star
				</a>
			</div>
		{/if}
	</div>

	<p class="overlay-text">
		<slot>
			<em>No description</em>
		</slot>
		{#if opened}
			<slot name="more-desc" />
		{/if}

		<br /><br />
		{#if linkProvided}
			<a href={link} target="_blank">{buttonText}</a>
		{:else}
			<button on:click|preventDefault={clickedButton}><b>{buttonText}</b></button>
		{/if}
	</p>
</div>

<style>
	.project {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 0.5rem;
	}

	.overlay {
		margin: 1rem 1rem 1rem 0rem;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr;
	}

	img {
		grid-column: 1/3;
		grid-row: 1;
		border: 1px solid #fff;
		border-radius: 10px;
	}

	.title {
		grid-column: 1/2;
		grid-row: 1;
		justify-self: start;
		margin: 0.75rem;
		color: white;
		font-weight: bold;
		font-size: 21px;
		text-shadow: -2px -2px 2px #000, 2px -2px 2px #000, -2px 2px 2px #000, 2px 2px 2px #000;
	}

	.star {
		grid-column: 2/3;
		grid-row: 1;
		justify-self: end;
		margin: 0.75rem;
	}

	.overlay-text {
		margin: 2rem 0.5rem;
	}

	a:link {
		color: white;
		background-color: transparent;
		font-style: italic;
		text-decoration: none;
	}

	a:visited {
		color: white;
		background-color: transparent;
		font-style: italic;
		text-decoration: none;
	}

	a:hover {
		color: #cbd5e0;
		background-color: transparent;
		font-style: italic;
		text-decoration: none;
	}

	a:active {
		color: #cbd5e0;
		background-color: transparent;
		font-style: italic;
		text-decoration: none;
	}

	button {
		font-family: 'Fira Code';
		font-size: 16px;
		background: none !important;
		background-color: transparent;
		border: none;
		padding: 0 !important;
		color: white;
		text-decoration: none;
		cursor: pointer;
	}
</style>
