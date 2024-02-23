<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="flex w-full content-center justify-center px-8 pb-16 pt-16 sm:pt-8">
	<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
		<div
			class="text-md mb-4 rounded-lg bg-slate-50 p-4 text-yellow-800 dark:bg-slate-800 dark:text-yellow-400"
			role="alert"
		>
			{$t('use_english')}
		</div>
		<div class="mb-6">
			<label for="name" class="mb-2 block text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.name')}</label
			>
			<input
				name="name"
				id="name"
				class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="username" class="mb-2 block text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.id_no')}</label
			>
			<input
				name="username"
				id="username"
				class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm uppercase text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
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
		<div class="mb-6">
			<label for="phone" class="mb-2 block text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.phone')}</label
			>
			<input
				name="phone"
				id="phone"
				class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="school" class="mb-2 block text-sm font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.school')}</label
			>
			<input
				name="school"
				id="school"
				class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				required
			/>
		</div>

		<button
			type="submit"
			class="w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
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
