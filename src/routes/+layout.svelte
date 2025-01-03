<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import { onMount } from 'svelte';
	import { locale } from '$lib/i18n';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';

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

<ProgressBar class="text-slate-500" zIndex={100} />

<div class="min-h-screen bg-base-200 pt-16 font-sans antialiased">
	<Navigation />

	<!-- Page Content -->
	<main>
		<slot />
	</main>
</div>
