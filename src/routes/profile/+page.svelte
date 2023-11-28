<script lang="ts">
	import ModuleProgress from '../../components/ModuleProgress.svelte';

	export let data;
	let user = data.user;
	let modules = data.modules;
	import { t } from '$lib/i18n';
</script>

{#if user.role == 'admin'}
	<div class="bg-slate-200 dark:bg-slate-800 p-10 flex flex-row justify-between align-middle">
		<h2 class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-4xl font-bold">
			{$t('you_are_admin')}
		</h2>
		<a
			href="/admin"
			type="submit"
			class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>{$t('admin_page')}</a
		>
	</div>
{/if}
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
		<form class="pt-8" method="post" action="/logout">
			<button
				type="submit"
				class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
				>Logout</button
			>
		</form>
	</div>
	<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg">
		<h1 class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-4xl font-bold">
			{$t('my_progress')}
		</h1>
		<ol class="space-y-4 w-full pt-8">
			{#each modules as module}
				<li>
					<ModuleProgress {module} />
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
	<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg">
		<h1 class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-4xl font-bold">
			{$t('certificate')}
		</h1>
		{#if user.progress?.practical}
			<div class="pt-8 w-full text-center">
				<a
					href="/certificate"
					class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
					>{$t('view_certificate')}</a
				>
			</div>
		{:else}
			<h2
				class="text-slate-400 text-lg sm:text-xl md:text-3xl font-normal max-w-prose pt-4 sm:pt-8"
			>
				{$t('practical_for_certificate')}
			</h2>
		{/if}
	</div>
</div>
