<script lang="ts">
	export let label: string;
	export let progressPercent: string;
	export let progressNumber: number;
</script>

<div class="mb-1 flex justify-between">
	<span class="text-lg font-medium text-slate-700 dark:text-white">{label}</span>
	<span class="text-lg font-medium text-slate-700 dark:text-white">{progressPercent}% ({progressNumber})</span>
</div>
<div class="mb-4 h-4 w-full rounded-full bg-slate-300 dark:bg-slate-600">
	<div
		class="h-4 rounded-full bg-slate-600 dark:bg-slate-500"
		style="width: {progressPercent}%"
	></div>
</div>
