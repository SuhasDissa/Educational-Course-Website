<script lang="ts">
	export let data;
	let user = data.user;
</script>

<div class="flex justify-center content-center w-full pb-16 px-8 pt-16 sm:pt-8">
	<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
		<input value={user.id} name="id" type="hidden" required />
		<div class="mb-6">
			<h5 class="text-3xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
				Delete User
			</h5>
		</div>
		<button
			type="submit"
			class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
			>Delete</button
		>
	</form>
</div>
