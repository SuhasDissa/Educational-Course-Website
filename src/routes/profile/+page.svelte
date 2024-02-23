<script lang="ts">
	import ModuleProgress from '../../components/ModuleProgress.svelte';

	export let data;
	let user = data.user;
	let modules = data.modules;
	import { t } from '$lib/i18n';
</script>

{#if user.role == 'admin'}
	<div class="flex flex-row justify-between bg-slate-200 p-10 align-middle dark:bg-slate-800">
		<h2 class="text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-4xl">
			{$t('you_are_admin')}
		</h2>
		<a
			href="/admin"
			type="submit"
			class="rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>{$t('admin_page')}</a
		>
	</div>
{/if}
<div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 sm:grid-cols-2">
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-3xl">
			{user.name}
		</h1>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('user.school')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 dark:text-slate-300 sm:pt-8 sm:text-xl md:text-3xl"
		>
			{user.school}
		</p>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('user.phone')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 dark:text-slate-300 sm:pt-8 sm:text-xl md:text-3xl"
		>
			{user.phone}
		</p>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('user.id_no')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 dark:text-slate-300 sm:pt-8 sm:text-xl md:text-3xl"
		>
			{user.username}
		</p>
		<div class="flex flex-row gap-8 pt-8">
			<form method="post" action="/logout">
				<button
					type="submit"
					class="w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
					>Logout</button
				>
			</form>
			<a
				href="/profile/edit/{user.id}"
				class="w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
				>Edit</a
			>
		</div>
	</div>
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-4xl">
			{$t('my_progress')}
		</h1>
		<ol class="w-full space-y-4 pt-8">
			{#each modules as module}
				<li>
					<ModuleProgress {module} />
				</li>
			{/each}
		</ol>
	</div>
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-4xl">
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
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-4xl">
			{$t('certificate')}
		</h1>
		{#if user.progress?.practical}
			<div class="w-full pt-8 text-center">
				<a
					href="/certificate"
					class="w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
					>{$t('view_certificate')}</a
				>
			</div>
		{:else}
			<h2
				class="max-w-prose pt-4 text-lg font-normal text-slate-400 sm:pt-8 sm:text-xl md:text-3xl"
			>
				{$t('practical_for_certificate')}
			</h2>
		{/if}
	</div>
</div>
