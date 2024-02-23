<script lang="ts">
	import type { Module } from '$lib/server/types';
	import { locale } from '$lib/i18n';
	let loc = 'si';

	locale.subscribe((locale) => {
		loc = locale;
	});

	export let module: Module;
	let progress = module.progress;
	let colors: string;
	if (progress == 2) {
		colors =
			'text-green-700 bg-green-50 border-green-300 dark:border-green-800 dark:text-green-400 dark:hover-bg-slate-700 hover:-translate-y-2 hover:drop-shadow-xl hover:scale-[1.01]';
	} else if (progress == 1) {
		colors =
			'text-blue-700 bg-blue-50 border-blue-300 dark:border-blue-800 dark:text-blue-400 dark:hover-bg-slate-700 hover:-translate-y-2 hover:drop-shadow-xl hover:scale-[1.01]';
	} else {
		colors =
			'text-slate-900 bg-slate-50 border-slate-300 dark:border-slate-800 dark:text-slate-400 cursor-default';
	}
</script>

<a
	href={progress == 0 ? '#' : `${module.url[loc]}`}
	class="flex max-w-sm flex-col overflow-hidden rounded-lg border drop-shadow duration-100 dark:bg-slate-800 {colors}"
>
	<div class="flex w-full flex-row justify-between p-6">
		<h5 class="text-2xl font-bold tracking-tight">
			{module.name}
		</h5>
		{#if progress == 2}
			<svg
				class="h-8 w-8"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 16 12"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5.917 5.724 10.5 15 1.5"
				/>
			</svg>
		{:else if progress == 1}
			<svg
				class="h-8 w-8 rtl:rotate-180"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		{/if}
	</div>
	<p
		class="max-h-48 grow overflow-hidden p-6 text-lg font-normal text-slate-500 dark:text-slate-400 sm:text-xl"
	>
		{module.description[loc]}
	</p>
</a>
