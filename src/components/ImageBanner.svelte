<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
</script>

<div
	class="relative h-[30rem] w-full overflow-hidden rounded-xl bg-contain bg-bottom bg-no-repeat duration-300 sm:h-96 sm:bg-right"
	style="background-image:url('{imageUrl}');"
>
	<div
		class="h-full w-full bg-gradient-to-b from-slate-200 from-60% p-10 dark:from-slate-800 sm:bg-gradient-to-r"
	>
		<h1
			class="text-2xl font-bold text-slate-700 dark:text-slate-300 sm:w-[60%] sm:text-3xl md:text-4xl"
		>
			{title}
		</h1>
		<p
			class=" max-w-prose pt-4 text-lg font-bold text-slate-600 sm:w-[60%] sm:pt-8 sm:text-xl md:text-2xl"
		>
			{description}
		</p>
	</div>
</div>
