<script lang="ts">
	export let data;
	let progress = data.progress;
	let progressPercent = data.progressPercent;

	import { t } from '$lib/i18n';
	import ProgressBar from '../../components/ProgressBar.svelte';
</script>

<div class="mx-auto max-w-screen-xl px-8 pt-20">
	<div class="stats stats-vertical w-full shadow lg:stats-horizontal">
		<div class="stat">
			<div class="stat-figure text-secondary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#5f6368"
					><path
						d="M40-272q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240v-32Zm800 112H738q11-18 16.5-38.5T760-240v-40q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v40q0 33-23.5 56.5T840-160ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"
					/></svg
				>
			</div>
			<div class="stat-title">{$t('stat.total')}</div>
			<div class="stat-value">{data.allCount}</div>
		</div>

		<div class="stat">
			<div class="stat-figure text-secondary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#5f6368"
					><path
						d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
					/></svg
				>
			</div>
			<div class="stat-title">{$t('stat.finished_users')}</div>
			<div class="stat-value">{progress.module8}</div>
		</div>

		<div class="stat">
			<div class="stat-figure text-secondary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#5f6368"
					><path
						d="M480-440q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0-80q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0 40Zm0-315-240 90v189q0 54 15 105t41 96q42-21 88-33t96-12q50 0 96 12t88 33q26-45 41-96t15-105v-189l-240-90Zm0 515q-36 0-70 8t-65 22q29 30 63 52t72 34q38-12 72-34t63-52q-31-14-65-22t-70-8Zm0 196q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"
					/></svg
				>
			</div>
			<div class="stat-title">{$t('stat.admin')}</div>
			<div class="stat-value">{data.adminCount}</div>
		</div>
	</div>
</div>
<div class="mx-auto max-w-screen-xl px-8 pt-8">
	<div class="card flex flex-row items-center justify-between bg-base-100 p-4 shadow">
		<div>
			<h3 class="font-bold">Click here to show list</h3>
		</div>
		<a href="/admin/list" class="btn btn-sm">Show List</a>
	</div>
</div>
<div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-8 pb-20 pt-8">
	<div class="card bg-base-100 p-10 shadow">
		<h1 class="mb-8 text-xl font-bold text-slate-700 sm:text-2xl md:text-4xl dark:text-slate-300">
			{$t('stat.progress')}
		</h1>
		<ProgressBar
			label="Module 1"
			progressPercent={progressPercent.module1}
			progressNumber={progress.module1}
		/>
		<ProgressBar
			label="Module 2"
			progressPercent={progressPercent.module2}
			progressNumber={progress.module2}
		/>
		<ProgressBar
			label="Module 3"
			progressPercent={progressPercent.module3}
			progressNumber={progress.module3}
		/>
		<ProgressBar
			label="Module 4"
			progressPercent={progressPercent.module4}
			progressNumber={progress.module4}
		/>
		<ProgressBar
			label="Module 5"
			progressPercent={progressPercent.module5}
			progressNumber={progress.module5}
		/>
		<ProgressBar
			label="Module 6"
			progressPercent={progressPercent.module6}
			progressNumber={progress.module6}
		/>
		<ProgressBar
			label="Module 7"
			progressPercent={progressPercent.module7}
			progressNumber={progress.module7}
		/>
		<ProgressBar
			label="Module 8"
			progressPercent={progressPercent.module8}
			progressNumber={progress.module8}
		/>
		<ProgressBar
			label="Practical"
			progressPercent={progressPercent.practical}
			progressNumber={progress.practical}
		/>
	</div>
</div>
