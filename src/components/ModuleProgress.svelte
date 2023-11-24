<script lang="ts">
	export let progress: number;
	export let name: string;

	let colors: string;
	if (progress == 2) {
		colors =
			'text-green-700 bg-green-50 border-green-300 dark:border-green-800 dark:text-green-400';
	} else if (progress == 1) {
		colors = 'text-blue-700 bg-blue-100  border-blue-300 dark:border-blue-800 dark:text-blue-400';
	} else {
		colors =
			'text-slate-900 bg-slate-100 border-slate-300 dark:border-slate-700 dark:text-slate-400';
	}
</script>

<div class="w-full p-4 rounded-lg dark:bg-slate-800 border {colors}" role="alert">
	<div class="flex items-center justify-between">
		<h3 class="font-medium">{name}</h3>
		{#if progress == 2}
			<svg
				class="w-4 h-4"
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
				class="rtl:rotate-180 w-4 h-4"
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
</div>
