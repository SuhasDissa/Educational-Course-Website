<script lang="ts">
	import type { Module } from '$lib/server/types';
	import ModuleCard from '../../components/ModuleCard.svelte';
	export let data: { modules: Module[] };

	import { t } from '$lib/i18n';
	let modules = data.modules;
</script>

<div class="mx-auto max-w-screen-xl px-8 py-8">
	<h2 class="text-2xl font-bold text-slate-600 dark:text-slate-400 sm:text-3xl md:text-5xl">
		{$t('all_modules')}
	</h2>
	<div class="grid grid-flow-row grid-cols-1 gap-4 pt-4 sm:grid-cols-2 sm:pt-8 md:grid-cols-3">
		{#each modules as module}
			<ModuleCard {module} />
		{/each}
	</div>
</div>
