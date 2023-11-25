<script lang="ts">
	import type { Module } from '$lib/server/types.js';
	import { t } from '$lib/i18n';

	export let data;
	let module: Module = data.module;
</script>

<div
	class="mx-auto max-w-screen-xl px-8 pt-16 flex flex-col justify-center content-center h-full gap-10"
>
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
	<form class="pt-8" method="post" action="finish">
		<input type="hidden" value={module.id} name="id" />
		<button
			type="submit"
			class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>{$t('finish_module')}</button
		>
	</form>
</div>
