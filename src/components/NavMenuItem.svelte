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
		? 'text-white bg-slate-500 md:bg-transparent md:text-slate-500 dark:text-white md:dark:text-slate-500'
		: 'text-slate-900 hover:bg-slate-300 md:hover:bg-transparent md:border-0 md:hover:text-slate-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent'} block py-2 pl-3 pr-4 rounded md:bg-transparent font-bold md:p-0"
	aria-current="page">{name}</a
>
