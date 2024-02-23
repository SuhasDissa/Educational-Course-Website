<script lang="ts">
	export let data;
	let user = data.user;
	import { t } from '$lib/i18n';
</script>

<div class="flex w-full content-center justify-center px-8 pb-16 pt-16 sm:pt-8">
	<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
		<input value={user.id} name="id" type="hidden" required />
		<div class="mb-6">
			<h5 class="text-3xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
				Edit User
			</h5>
		</div>
		<div
			class="text-md mb-4 rounded-lg bg-slate-50 p-4 text-yellow-800 dark:bg-slate-800 dark:text-yellow-400"
			role="alert"
		>
			{$t('use_english')}
		</div>
		<div class="mb-6">
			<label for="name" class="text-md mb-2 block font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.name')}</label
			>
			<input
				value={user.name}
				name="name"
				id="name"
				class="text-md block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="school" class="text-md mb-2 block font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.school')}</label
			>
			<input
				value={user.school}
				name="school"
				id="school"
				class="text-md block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="phone" class="text-md mb-2 block font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.phone')}</label
			>
			<input
				value={user.phone}
				name="phone"
				id="phone"
				class="text-md block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				required
			/>
		</div>
		<button
			type="submit"
			class="text-md w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
			>Save</button
		>
	</form>
</div>
