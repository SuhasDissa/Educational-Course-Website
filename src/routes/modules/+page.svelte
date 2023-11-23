<script lang="ts">
	import type { Module } from '$lib/server/types';
	import ModuleCard from '../../components/ModuleCard.svelte';
	export let data: { modules: Module[] };
	let modules = data.modules;
</script>

<div class="mx-auto max-w-screen-xl px-8 py-8">
	<h2 class="text-slate-600 dark:text-slate-400 text-2xl sm:text-3xl md:text-5xl font-bold">
		All Modules
	</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 pt-4 sm:pt-8">
		{#each modules as module}
			<ModuleCard {module} />
		{/each}
	</div>
</div>
