<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="mx-auto max-w-screen-xl px-8 pt-16 flex flex-col justify-center content-center h-full">
	<h1
		class="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-4xl font-bold text-center"
	>
		{$t('need_account')}
	</h1>
	<section class="pt-16 flex flex-col sm:flex-row justify-evenly gap-8">
		<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg flex flex-col">
			<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose">
				{$t('already_account')}
			</h2>
			<div class="pt-8 w-full text-center">
				<a
					href="/login"
					type="submit"
					class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
					>{$t('login_button')}</a
				>
			</div>
		</div>
		<div class="bg-slate-200 dark:bg-slate-800 p-10 rounded-lg flex flex-col">
			<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose">
				{$t('no_account')}
			</h2>
			<div class="pt-8 w-full text-center">
				<a
					href="/register"
					type="submit"
					class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
					>{$t('register_button')}</a
				>
			</div>
		</div>
	</section>
</div>
