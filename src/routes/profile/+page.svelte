<script lang="ts">
	export let data;
	let user = data.user;
</script>

<div class="mx-auto max-w-screen-xl px-8 py-20">
	<div class="sm:px-8 pt-8 sm:pt-0">
		<h1 class="text-slate-700 dark:text-slate-300 text-3xl sm:text-4xl md:text-5xl font-bold">
			Name : {user.name}
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
</div>
