<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import { onMount } from 'svelte';
	import { locale } from '$lib/i18n';

	onMount(async () => {
		const storedLocale = localStorage.getItem('locale');
		if (storedLocale) {
			locale.set(storedLocale);
		}
		locale.subscribe((value) => {
			localStorage.setItem('locale', value);
		});
	});
</script>

<div class="font-sans antialiased bg-slate-100 dark:bg-slate-900 min-h-screen pt-16">
	<Navigation />

	<!-- Page Content -->
	<main>
		<slot />
	</main>
</div>
