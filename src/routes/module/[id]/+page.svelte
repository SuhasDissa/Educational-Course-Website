<script lang="ts">
	import type { Module } from '$lib/server/types.js';

	export let data;
	let module: Module = data.module;
</script>

<div class="mx-auto max-w-screen-xl px-8 pt-16 flex flex-col justify-center content-center h-full gap-10">
	<h1
		class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-4xl font-bold text-center"
	>
		{module.name}
	</h1>
	<div class="bg-slate-200 dark:bg-slate-800 p-0 sm:p-4 rounded-lg">
		<iframe
			title={module.name}
			class="w-full h-full aspect-video"
			src={module.url}
			frameborder="0"
		/>
	</div>
</div>
