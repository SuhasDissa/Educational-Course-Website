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

<div class="min-h-screen bg-slate-100 pt-16 font-sans antialiased dark:bg-slate-900">
	<Navigation />

	<!-- Page Content -->
	<main>
		<slot />
	</main>
</div>
