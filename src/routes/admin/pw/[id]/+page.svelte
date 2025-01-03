<script lang="ts">
	export let data;
	let user = data.user;
	import { t } from '$lib/i18n';
</script>

<div class="flex w-full content-center justify-center px-8 pb-16 pt-16 sm:pt-8">
	<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
		<div class="mb-6">
			<h5 class="text-3xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
				Change Password
			</h5>
		</div>
		<div class="mb-6">
			<label for="username" class="text-md mb-2 block font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.id_no')}</label
			>
			<input
				value={user.username}
				name="username"
				id="username"
				class="text-md block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 uppercase text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				disabled
				required
			/>
		</div>
		<div class="mb-6">
			<label for="password" class="mb-2 block text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.password')}</label
			>
			<input
				name="password"
				type="password"
				id="password"
				class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				required
			/>
		</div>
		<button
			type="submit"
			class="text-md w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 sm:w-auto dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>Save</button
		>
	</form>
</div>
