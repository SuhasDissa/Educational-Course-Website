<script lang="ts">
	export let data;
	let user = data.user;
	import { t } from '$lib/i18n';
</script>

<div class="flex w-full flex-col content-center items-center px-8 pb-16 pt-16 sm:pt-8">
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
		<div class="mb-6">
			<label for="username" class="text-md mb-2 block font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.id_no')}</label
			>
			<input
				value={user.username}
				name="username"
				id="username"
				class="text-md block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 uppercase text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<h3 class=" text-md mb-2 font-bold text-slate-900 dark:text-slate-200">Role</h3>
			<ul
				class="w-full items-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-white sm:flex"
			>
				<li
					class="w-full border-b border-slate-200 dark:border-slate-600 sm:border-b-0 sm:border-r"
				>
					<div class="flex items-center ps-3">
						<input
							id="user-radio"
							type="radio"
							checked={user.role == 'user'}
							value="user"
							name="role"
							class="h-8 w-8 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-blue-600 dark:focus:ring-offset-slate-700"
						/>
						<label
							for="user-radio"
							class="text-md ms-2 w-full py-3 font-bold text-slate-900 dark:text-slate-300"
							>User
						</label>
					</div>
				</li>
				<li class="w-full dark:border-slate-600">
					<div class="flex items-center ps-3">
						<input
							id="admin-radio"
							type="radio"
							value="admin"
							checked={user.role == 'admin'}
							name="role"
							class="h-8 w-8 border-slate-300 bg-slate-100 text-yellow-600 accent-yellow-600 focus:ring-2 focus:ring-yellow-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-yellow-600 dark:focus:ring-offset-slate-700"
						/>
						<label
							for="admin-radio"
							class="text-md ms-2 w-full py-3 font-bold text-slate-900 dark:text-slate-300"
							>Admin</label
						>
					</div>
				</li>
			</ul>
		</div>
		<div class="mb-6">
			<h3 class=" text-md mb-2 font-bold text-slate-900 dark:text-slate-200">Practical Lesson</h3>
			<ul
				class="w-full items-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-white sm:flex"
			>
				<li
					class="w-full border-b border-slate-200 dark:border-slate-600 sm:border-b-0 sm:border-r"
				>
					<div class="flex items-center ps-3">
						<input
							id="incomplete-radio"
							type="radio"
							checked={user.progress?.practical == false}
							value="false"
							name="practical"
							class="h-8 w-8 border-slate-300 bg-slate-100 text-red-600 accent-red-600 focus:ring-2 focus:ring-red-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-red-600 dark:focus:ring-offset-slate-700"
						/>
						<label
							for="incomplete-radio"
							class="text-md ms-2 w-full py-3 font-bold text-slate-900 dark:text-slate-300"
							>Incomplete
						</label>
					</div>
				</li>
				<li class="w-full dark:border-slate-600">
					<div class="flex items-center ps-3">
						<input
							id="complete-radio"
							type="radio"
							value="true"
							checked={user.progress?.practical == true}
							name="practical"
							class="h-8 w-8 border-slate-300 bg-slate-100 text-green-600 accent-green-600 focus:ring-2 focus:ring-green-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-green-600 dark:focus:ring-offset-slate-700"
						/>
						<label
							for="complete-radio"
							class="text-md ms-2 w-full py-3 font-bold text-slate-900 dark:text-slate-300"
							>Complete</label
						>
					</div>
				</li>
			</ul>
		</div>
		<button
			type="submit"
			class="text-md w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
			>Save</button
		>
	</form>
	<div class="mt-20 w-full max-w-xl">
		<div class="mb-6">
			<h5 class="text-3xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
				Advanced Options
			</h5>
		</div>
		<a
			href="/admin/pw/{user.id}"
			class="text-md w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:w-auto"
			>Change Password</a
		>
		<a
			href="/admin/delete/{user.id}"
			class="text-md w-full rounded-lg bg-red-700 px-5 py-2.5 text-center font-bold text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 sm:w-auto"
			>Delete Usesr</a
		>
	</div>
</div>
