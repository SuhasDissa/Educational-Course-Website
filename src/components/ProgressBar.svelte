<script lang="ts">
	export let label: string;
	export let progressPercent: string;
	export let progressNumber: number;
</script>

<div class="mb-1 flex justify-between">
	<span class="text-lg font-medium">{label}</span>
	<span class="text-lg font-medium">{progressPercent}% ({progressNumber})</span>
</div>
<progress class="progress mb-4 h-4 w-full" value={progressPercent} max="100"></progress>
