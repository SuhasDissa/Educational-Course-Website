<script lang="ts">
	import ModuleProgress from '../../components/ModuleProgress.svelte';

	export let data;
	let user = data.user;
</script>

<div class="mx-auto max-w-screen-xl px-8 py-20 grid grid-cols-2 gap-8">
	<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg">
		<h1 class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-3xl font-bold">
			{user.name}
		</h1>
		<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose pt-4 sm:pt-8">
			School : {user.school}
		</h2>
		<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose pt-4 sm:pt-8">
			Phone: {user.phone}
		</h2>
		<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose pt-4 sm:pt-8">
			ID No. : {user.id_no}
		</h2>
		<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose pt-4 sm:pt-8">
			Username : {user.username}
		</h2>
		<form class="pt-8" method="post" action="/logout">
			<button
				type="submit"
				class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
				>Logout</button
			>
		</form>
	</div>
	<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg">
		<h1 class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-4xl font-bold">
			My progress
		</h1>
		<ol class="space-y-4 w-72 pt-8">
			<li>
				<ModuleProgress progress={2} name={'Module 1'} />
			</li>
			<li>
				<ModuleProgress progress={2} name={'Module 2'} />
			</li>
			<li>
				<ModuleProgress progress={2} name={'Module 3'} />
			</li>
			<li>
				<ModuleProgress progress={1} name={'Module 4'} />
			</li>
			<li>
				<ModuleProgress progress={0} name={'Module 5'} />
			</li>
			<li>
				<ModuleProgress progress={0} name={'Module 6'} />
			</li>
			<li>
				<ModuleProgress progress={0} name={'Module 7'} />
			</li>
			<li>
				<ModuleProgress progress={0} name={'Module 8'} />
			</li>
		</ol>
	</div>
</div>
