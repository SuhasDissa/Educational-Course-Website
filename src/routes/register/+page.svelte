<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="flex justify-center content-center w-full pb-16 px-8 pt-16 sm:pt-8">
	<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
		<div class="mb-6">
			<label for="name" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.name')}</label
			>
			<input
				name="name"
				id="name"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="username" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.id_no')}</label
			>
			<input
				name="username"
				id="username"
				class="bg-slate-50 border uppercase border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="password" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.password')}</label
			>
			<input
				name="password"
				type="password"
				id="password"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="phone" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.phone')}</label
			>
			<input
				name="phone"
				id="phone"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="school" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.school')}</label
			>
			<input
				name="school"
				id="school"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>

		<button
			type="submit"
			class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>{$t('register_button')}</button
		>
		<div class="my-6">
			<p class="text-md font-bold text-slate-500 dark:text-slate-400">
				{$t('already_account')}
				<a href="/login" class="font-bold text-slate-700 hover:underline dark:text-slate-200"
					>{$t('login_here')}</a
				>
			</p>
		</div>
	</form>
</div>
