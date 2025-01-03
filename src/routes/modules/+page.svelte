<script lang="ts">
	import type { Module } from '$lib/server/types';
	import ModuleCard from '../../components/ModuleCard.svelte';
	export let data: { modules: Module[] };

	import { t } from '$lib/i18n';
	let modules = data.modules;
</script>

<div class="mx-auto max-w-screen-xl px-8 pb-16 pt-16 sm:pt-8">
	<div class="card bg-base-100 p-6 shadow-xl">
		<div class="text-xl font-semibold">{$t('all_modules')}</div>

		<div class="divider mt-2"></div>

		<div class="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each modules as module}
				<ModuleCard {module} />
			{/each}
		</div>
	</div>
</div>
