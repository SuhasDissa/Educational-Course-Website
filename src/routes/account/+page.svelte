<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="flex w-full content-center justify-center px-8 pb-16 pt-16 sm:pt-8">
	<div class="card bg-base-100 p-6 shadow-xl">
		<div class="text-xl font-semibold">{$t('need_account')}</div>

		<div class="divider mt-2"></div>

		<section class="flex flex-col justify-evenly gap-8 sm:flex-row">
			<div class="flex flex-col justify-between sm:w-1/2">
				<h2 class="max-w-prose text-lg font-bold sm:text-xl md:text-2xl">
					{$t('already_account')}
				</h2>
				<div class="w-full pt-8 text-center">
					<a href="/login" type="submit" class="btn">{$t('login_button')}</a>
				</div>
			</div>
			<div class="divider lg:divider-horizontal">OR</div>
			<div class="flex flex-col justify-between sm:w-1/2">
				<h2 class="max-w-prose text-lg font-bold sm:text-xl md:text-2xl">
					{$t('no_account')}
				</h2>
				<div class="w-full pt-8 text-center">
					<a href="/register" type="submit" class="btn">{$t('register_button')}</a>
				</div>
			</div>
		</section>
	</div>
</div>
