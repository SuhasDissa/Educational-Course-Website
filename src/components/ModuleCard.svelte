<script lang="ts">
	import type { Module } from '$lib/server/types';

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
	href={progress == 0 ? '#' : `/module/${module.id}`}
	class="flex flex-col max-w-sm rounded-lg drop-shadow duration-100 dark:bg-slate-800 overflow-hidden border {colors}"
>
	<div class="p-6 w-full flex flex-row justify-between">
		<h5 class="text-2xl font-bold tracking-tight">
			{module.name}
		</h5>
		{#if progress == 2}
			<svg
				class="w-8 h-8"
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
				class="rtl:rotate-180 w-8 h-8"
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
		class="grow p-6 max-h-48 overflow-hidden font-normal text-slate-500 dark:text-slate-400 text-lg sm:text-xl"
	>
		{module.description}
	</p>
</a>
