<script lang="ts">
	export let data;
	let progress = data.progress;
	let progressPercent = data.progressPercent;

	import { t } from '$lib/i18n';
	import ProgressBar from '../../components/ProgressBar.svelte';
</script>

<div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 sm:grid-cols-2">
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-4xl">
			{$t('stat.users')}
		</h1>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('stat.total')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 dark:text-slate-300 sm:pt-8 sm:text-xl md:text-3xl"
		>
			{data.allCount}
		</p>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('stat.finished_users')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 dark:text-slate-300 sm:pt-8 sm:text-xl md:text-3xl"
		>
			{progress.module8}
		</p>
		<h2 class="max-w-prose pt-4 text-xl text-slate-400 sm:pt-8 sm:text-2xl md:text-4xl">
			{$t('stat.admin')}
		</h2>
		<p
			class="max-w-prose pt-4 text-lg text-slate-500 dark:text-slate-300 sm:pt-8 sm:text-xl md:text-3xl"
		>
			{data.adminCount}
		</p>
		<div class="flex flex-row gap-8 pt-8">
			<a
				href="/admin/list"
				class="w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
				>Show List</a
			>
		</div>
	</div>
	<div class="rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
		<h1 class="mb-8 text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-4xl">
			{$t('stat.progress')}
		</h1>
		<ProgressBar
			label="Module 1"
			progressPercent={progressPercent.module1}
			progressNumber={progress.module1}
		/>
		<ProgressBar
			label="Module 2"
			progressPercent={progressPercent.module2}
			progressNumber={progress.module2}
		/>
		<ProgressBar
			label="Module 3"
			progressPercent={progressPercent.module3}
			progressNumber={progress.module3}
		/>
		<ProgressBar
			label="Module 4"
			progressPercent={progressPercent.module4}
			progressNumber={progress.module4}
		/>
		<ProgressBar
			label="Module 5"
			progressPercent={progressPercent.module5}
			progressNumber={progress.module5}
		/>
		<ProgressBar
			label="Module 6"
			progressPercent={progressPercent.module6}
			progressNumber={progress.module6}
		/>
		<ProgressBar
			label="Module 7"
			progressPercent={progressPercent.module7}
			progressNumber={progress.module7}
		/>
		<ProgressBar
			label="Module 8"
			progressPercent={progressPercent.module8}
			progressNumber={progress.module8}
		/>
		<ProgressBar
			label="Practical"
			progressPercent={progressPercent.practical}
			progressNumber={progress.practical}
		/>
	</div>
</div>
