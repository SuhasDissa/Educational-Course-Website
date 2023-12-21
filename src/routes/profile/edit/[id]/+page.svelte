<script lang="ts">
	export let data;
	let user = data.user;
	import { t } from '$lib/i18n';
</script>

<div class="flex justify-center content-center w-full pb-16 px-8 pt-16 sm:pt-8">
	<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
		<input value={user.id} name="id" type="hidden" required />
		<div class="mb-6">
			<h5 class="text-3xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
				Edit User
			</h5>
		</div>
		<div
			class="p-4 mb-4 text-md text-yellow-800 rounded-lg bg-slate-50 dark:bg-slate-800 dark:text-yellow-400"
			role="alert"
		>
			{$t('use_english')}
		</div>
		<div class="mb-6">
			<label for="name" class="block mb-2 text-md font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.name')}</label
			>
			<input
				value={user.name}
				name="name"
				id="name"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-md rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="school" class="block mb-2 text-md font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.school')}</label
			>
			<input
				value={user.school}
				name="school"
				id="school"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-md rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="phone" class="block mb-2 text-md font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.phone')}</label
			>
			<input
				value={user.phone}
				name="phone"
				id="phone"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-md rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<button
			type="submit"
			class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>Save</button
		>
	</form>
</div>
