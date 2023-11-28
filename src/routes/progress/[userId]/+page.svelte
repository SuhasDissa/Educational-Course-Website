<script lang="ts">
	export let data;
	let user = data.user;
	let modules = data.modules;
	import { t } from '$lib/i18n';
	import ModuleProgressCard from '../../../components/ModuleProgress.svelte';
</script>

<div class="mx-auto max-w-screen-xl px-8 py-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
	<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg">
		<h1 class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-3xl font-bold">
			{user.name}
		</h1>
		<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl max-w-prose pt-4 sm:pt-8">
			{$t('user.school')}
		</h2>
		<p
			class="text-slate-500 dark:text-slate-300 text-lg sm:text-xl md:text-3xl max-w-prose pt-4 sm:pt-8"
		>
			{user.school}
		</p>
		<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl max-w-prose pt-4 sm:pt-8">
			{$t('user.phone')}
		</h2>
		<p
			class="text-slate-500 dark:text-slate-300 text-lg sm:text-xl md:text-3xl max-w-prose pt-4 sm:pt-8"
		>
			{user.phone}
		</p>
		<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl max-w-prose pt-4 sm:pt-8">
			{$t('user.id_no')}
		</h2>
		<p
			class="text-slate-500 dark:text-slate-300 text-lg sm:text-xl md:text-3xl max-w-prose pt-4 sm:pt-8"
		>
			{user.username}
		</p>
	</div>
	<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg">
		<h1 class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-4xl font-bold">
			{$t('progress')}
		</h1>
		<ol class="space-y-4 w-full pt-8">
			{#each modules as module}
				<li>
					<ModuleProgressCard {module} />
				</li>
			{/each}
		</ol>
	</div>
	<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg">
		<h1 class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-4xl font-bold">
			{$t('practical_lesson')}
		</h1>
		<h2 class="text-slate-400 text-lg sm:text-xl md:text-3xl font-normal max-w-prose pt-4 sm:pt-8">
			{#if user.progress?.practical}
				{$t('practical_completed')}
			{:else}
				{$t('practical_not_completed')}
			{/if}
		</h2>
	</div>
</div>
