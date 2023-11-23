<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
</script>

<div class="font-sans antialiased bg-slate-100 dark:bg-slate-900 min-h-screen pt-16">
	<Navigation />

	<!-- Page Content -->
	<main>
		<slot />
	</main>
</div>
