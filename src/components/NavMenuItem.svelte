<script lang="ts">
	import { page } from '$app/stores';
	let browserPath: string;
	$: browserPath = $page.url.pathname;

	export let name: string;
	export let path: string;
</script>

<a
	on:click
	href={path}
	class="{browserPath == path
		? 'bg-slate-500 text-white dark:text-white md:bg-transparent md:text-slate-500 md:dark:text-slate-500'
		: 'text-slate-900 hover:bg-slate-300 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-slate-500 md:dark:hover:bg-transparent'} block rounded py-2 pl-3 pr-4 font-bold md:bg-transparent md:p-0"
	aria-current="page">{name}</a
>
