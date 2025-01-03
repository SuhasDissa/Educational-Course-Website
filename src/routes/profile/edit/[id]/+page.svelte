<script lang="ts">
	export let data;
	let user = data.user;
	import { t } from '$lib/i18n';
</script>

<div class="flex w-full content-center justify-center px-8 pb-16 pt-16 sm:pt-8">
	<div class="card bg-base-100 p-6 shadow-xl">
		<div class="text-xl font-semibold">Edit User</div>

		<div class="divider mt-2"></div>
		<div class="alert" role="alert">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
			{$t('use_english')}
		</div>
		<div class="pb-6 pt-4">
			<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
				<input value={user.id} name="id" type="hidden" required />

				<div class="mb-6">
					<label for="name" class="text-md mb-2 block font-bold">{$t('user.name')}</label>
					<input
						value={user.name}
						name="name"
						id="name"
						class="input input-bordered w-full"
						placeholder=""
						required
					/>
				</div>
				<div class="mb-6">
					<label for="school" class="text-md mb-2 block font-bold">{$t('user.school')}</label>
					<input
						value={user.school}
						name="school"
						id="school"
						class="input input-bordered w-full"
						placeholder=""
						required
					/>
				</div>
				<div class="mb-6">
					<label for="phone" class="text-md mb-2 block font-bold">{$t('user.phone')}</label>
					<input
						value={user.phone}
						name="phone"
						id="phone"
						class="input input-bordered w-full"
						placeholder=""
						required
					/>
				</div>
				<button type="submit" class="btn float-right">Save</button>
			</form>
		</div>
	</div>
</div>
