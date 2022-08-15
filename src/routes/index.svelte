<script>
	import '$lib/global.css';
	import Profile from '$lib/components/profile.svelte';
</script>

<div class="grid-container">
	<Profile />
	<p>aaa</p>
</div>

<style>
	:global(body) {
		background-color: #1a202c;
		color: #cbd5e0;
		font: inherit;
		font-family: Fira Code;
		font-weight: normal;
		font-style: normal;
	}
	.grid-container {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
