<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
</script>

<div
	class="relative w-full h-96 rounded-xl overflow-hidden bg-contain bg-no-repeat bg-right duration-300"
	style="background-image:url('{imageUrl}');"
>
	<div class="h-full w-full p-10 bg-gradient-to-r dark:from-slate-800 from-slate-300 from-60%">
		<h1 class="text-slate-700 dark:text-slate-300 text-2xl sm:text-3xl md:text-4xl font-bold w-[60%]">
			{title}
		</h1>
		<p class=" text-slate-400 text-lg sm:text-xl md:text-2xl font-bold max-w-prose pt-4 sm:pt-8  w-[60%]">
			{description}
		</p>
	</div>
</div>
