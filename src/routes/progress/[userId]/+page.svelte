<script lang="ts">
	export let data;
	let user = data.user;
	let modules = data.modules;
	import { t } from '$lib/i18n';
	import ModuleProgressCard from '../../../components/ModuleProgress.svelte';
</script>

<div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 sm:grid-cols-2">
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="text-xl font-bold text-slate-700 sm:text-2xl md:text-3xl dark:text-slate-300">
			{user.name}
		</h1>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('user.school')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 sm:pt-8 sm:text-xl md:text-3xl dark:text-slate-300"
		>
			{user.school}
		</p>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('user.phone')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 sm:pt-8 sm:text-xl md:text-3xl dark:text-slate-300"
		>
			{user.phone}
		</p>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('user.id_no')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 sm:pt-8 sm:text-xl md:text-3xl dark:text-slate-300"
		>
			{user.username}
		</p>
	</div>
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="text-xl font-bold text-slate-700 sm:text-2xl md:text-4xl dark:text-slate-300">
			{$t('progress')}
		</h1>
		<ol class="w-full space-y-4 pt-8">
			{#each modules as module}
				<li>
					<ModuleProgressCard {module} />
				</li>
			{/each}
		</ol>
	</div>
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="text-xl font-bold text-slate-700 sm:text-2xl md:text-4xl dark:text-slate-300">
			{$t('practical_lesson')}
		</h1>
		<h2 class="max-w-prose pt-4 text-lg font-normal text-slate-400 sm:pt-8 sm:text-xl md:text-3xl">
			{#if user.progress?.practical}
				{$t('practical_completed')}
			{:else}
				{$t('practical_not_completed')}
			{/if}
		</h2>
	</div>
</div>
