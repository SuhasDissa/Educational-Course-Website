<script lang="ts">
	import { page } from '$app/stores';
	let browserPath: string;
	$: browserPath = $page.url.pathname;

	export let name: string;
	export let path: string;
</script>

<a on:click href={path} class="{browserPath == path ? '' : ''} font-bold" aria-current="page"
	>{name}</a
>
