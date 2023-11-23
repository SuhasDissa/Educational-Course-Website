<script lang="ts">
	import type { Module } from '$lib/server/types';

	export let module: Module;
</script>

<a
	href={module.url}
	class="flex flex-col max-w-sm bg-slate-50 rounded-lg drop-shadow hover:-translate-y-2 hover:drop-shadow-xl duration-100 dark:bg-slate-800 dark:hover:bg-slate-700 overflow-hidden hover:scale-[1.01]"
>
	<h5 class="p-6 text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
		{module.name}
	</h5>
	<p
		class="grow p-6 max-h-48 overflow-hidden font-normal text-slate-500 dark:text-slate-400"
		style="mask-image: linear-gradient(to bottom, black 60%, transparent 100%);"
	>
		{module.description}
	</p>
</a>
