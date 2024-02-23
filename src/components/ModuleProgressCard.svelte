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
			'text-green-700 bg-green-50 border-green-300 dark:border-green-800 dark:text-green-400';
	} else {
		colors =
			'text-slate-900 bg-slate-100 border-slate-300 dark:border-slate-700 dark:text-slate-400 cursor-default';
	}
</script>

<div class="block w-full rounded-lg border p-4 dark:bg-slate-800 {colors}">
	<div class="flex items-center justify-between">
		<div class="">
			<h3 class="font-bold">{module.name}</h3>
			<h3 class="font-medium">{module.description[loc]}</h3>
		</div>
		{#if progress == 2}
			<svg
				class="h-4 w-4"
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
		{/if}
	</div>
</div>
