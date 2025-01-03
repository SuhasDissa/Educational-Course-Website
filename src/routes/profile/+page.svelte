<script lang="ts">
	import ModuleProgress from '../../components/ModuleProgress.svelte';

	export let data;
	let user = data.user;
	let modules = data.modules;
	import { t } from '$lib/i18n';
</script>

{#if user.role == 'admin'}
	<div class="px-4 pb-0 pt-8">
		<div role="alert" class="alert bg-base-100 shadow">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="h-6 w-6 shrink-0 stroke-info"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<div>
				<h3 class="font-bold">{$t('you_are_admin')}</h3>
			</div>
			<a href="/admin" type="submit" class="btn btn-sm">{$t('admin_page')}</a>
		</div>
	</div>
{/if}
<div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 sm:grid-cols-2">
	<div class="card bg-base-100 p-6 shadow-xl">
		<div class="text-xl font-semibold">{$t('profile')}</div>
		<div class="divider mt-2"></div>

		<div class="mb-6">
			<label for="name" class="mb-2 block text-sm font-bold">{$t('user.name')}</label>
			<input
				id="name"
				disabled
				class="input input-bordered w-full"
				value={user.name}
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="username" class="mb-2 block text-sm font-bold">{$t('user.id_no')}</label>
			<input
				disabled
				id="username"
				value={user.username}
				class="input input-bordered w-full uppercase"
				placeholder=""
			/>
		</div>
		<div class="mb-6">
			<label for="phone" class="mb-2 block text-sm font-bold">{$t('user.phone')}</label>
			<input
				disabled
				value={user.phone}
				id="phone"
				class="input input-bordered w-full"
				placeholder=""
			/>
		</div>
		<div class="mb-6">
			<label for="school" class="mb-2 block text-sm font-bold">{$t('user.school')}</label>
			<input
				disabled
				value={user.school}
				id="school"
				class="input input-bordered w-full"
				placeholder=""
			/>
		</div>

		<div class="flex flex-row gap-8 pt-8">
			<form method="post" action="/logout">
				<button type="submit" class="btn">Logout</button>
			</form>
			<a href="/profile/edit/{user.id}" class="btn">Edit</a>
		</div>
	</div>
	<div class="card bg-base-100 p-6 shadow-xl">
		<div class="text-xl font-semibold">{$t('my_progress')}</div>

		<div class="divider mt-2"></div>
		<ol class="w-full space-y-4">
			{#each modules as module}
				<li>
					<ModuleProgress {module} />
				</li>
			{/each}
		</ol>
	</div>
	<div class="card bg-base-100 p-6 shadow-xl">
		<div class="text-xl font-semibold">{$t('practical_lesson')}</div>
		<div class="divider mt-2"></div>

		<h2 class="max-w-prose text-lg font-normal sm:text-xl md:text-2xl">
			{#if user.progress?.practical}
				{$t('practical_completed')}
			{:else}
				{$t('practical_not_completed')}
			{/if}
		</h2>
	</div>
	<div class="card bg-base-100 p-6 shadow-xl">
		<div class="text-xl font-semibold">{$t('certificate')}</div>
		<div class="divider mt-2"></div>

		{#if user.progress?.practical}
			<div class="w-full text-center">
				<a href="/certificate" class="btn">{$t('view_certificate')}</a>
			</div>
		{:else}
			<h2 class="max-w-prose text-lg font-normal sm:text-xl md:text-3xl">
				{$t('practical_for_certificate')}
			</h2>
		{/if}
	</div>
</div>
