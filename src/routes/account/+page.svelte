<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="mx-auto flex h-full max-w-screen-xl flex-col content-center justify-center px-8 pt-16">
	<h1
		class="text-center text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-4xl"
	>
		{$t('need_account')}
	</h1>
	<section class="flex flex-col justify-evenly gap-8 pt-16 sm:flex-row">
		<div class="flex flex-col rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
			<h2 class="max-w-prose text-xl font-bold text-slate-400 sm:text-2xl md:text-4xl">
				{$t('already_account')}
			</h2>
			<div class="w-full pt-8 text-center">
				<a
					href="/login"
					type="submit"
					class="w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
					>{$t('login_button')}</a
				>
			</div>
		</div>
		<div class="flex flex-col rounded-lg bg-slate-200 p-10 dark:bg-slate-800">
			<h2 class="max-w-prose text-xl font-bold text-slate-400 sm:text-2xl md:text-4xl">
				{$t('no_account')}
			</h2>
			<div class="w-full pt-8 text-center">
				<a
					href="/register"
					type="submit"
					class="w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
					>{$t('register_button')}</a
				>
			</div>
		</div>
	</section>
</div>
