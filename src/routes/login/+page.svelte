<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="flex w-full content-center justify-center px-8 pb-16 pt-16 sm:pt-8">
	<div class="card bg-base-100 p-6 shadow-xl">
		<div class="text-xl font-semibold">{$t('login_button')}</div>

		<div class="divider mt-2"></div>
		<div class="pb-6 pt-4">
			<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
				<div class="mb-6">
					<label for="username" class="mb-2 block text-sm font-bold">{$t('user.id_no')}</label>
					<input
						name="username"
						id="username"
						class="input input-bordered w-full uppercase"
						placeholder=""
						required
					/>
				</div>
				<div class="mb-6">
					<label for="password" class="mb-2 block text-sm font-bold">{$t('user.password')}</label>
					<input
						name="password"
						type="password"
						id="password"
						class="input input-bordered w-full"
						placeholder=""
						required
					/>
				</div>

				<button type="submit" class="btn">{$t('login_button')}</button>
				<div class="my-6">
					<p class="text-md font-bold">
						{$t('no_account')}
						<a href="/register" class="font-normal underline">{$t('register_here')}</a>
					</p>
				</div>
			</form>
		</div>
	</div>
</div>
