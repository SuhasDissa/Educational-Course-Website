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
		<div class="mb-6">
			<label for="username" class="block mb-2 text-md font-bold text-slate-900 dark:text-slate-200"
				>{$t('user.id_no')}</label
			>
			<input
				value={user.username}
				name="username"
				id="username"
				class="bg-slate-50 border border-slate-300 text-slate-900 uppercase text-md rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<h3 class=" mb-2 text-md font-bold text-slate-900 dark:text-slate-200">Role</h3>
			<ul
				class="items-center w-full text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-lg sm:flex dark:bg-slate-700 dark:border-slate-600 dark:text-white"
			>
				<li
					class="w-full border-b border-slate-200 sm:border-b-0 sm:border-r dark:border-slate-600"
				>
					<div class="flex items-center ps-3">
						<input
							id="user-radio"
							type="radio"
							checked={user.role == 'user'}
							value="user"
							name="role"
							class="w-8 h-8 text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-700 dark:focus:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500"
						/>
						<label
							for="user-radio"
							class="w-full py-3 ms-2 text-md font-bold text-slate-900 dark:text-slate-300"
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
							class="w-8 h-8 text-yellow-600 accent-yellow-600 bg-slate-100 border-slate-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-slate-700 dark:focus:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500"
						/>
						<label
							for="admin-radio"
							class="w-full py-3 ms-2 text-md font-bold text-slate-900 dark:text-slate-300"
							>Admin</label
						>
					</div>
				</li>
			</ul>
		</div>
		<div class="mb-6">
			<h3 class=" mb-2 text-md font-bold text-slate-900 dark:text-slate-200">Practical Lesson</h3>
			<ul
				class="items-center w-full text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-lg sm:flex dark:bg-slate-700 dark:border-slate-600 dark:text-white"
			>
				<li
					class="w-full border-b border-slate-200 sm:border-b-0 sm:border-r dark:border-slate-600"
				>
					<div class="flex items-center ps-3">
						<input
							id="incomplete-radio"
							type="radio"
							checked={user.progress?.practical == false}
							value="false"
							name="practical"
							class="w-8 h-8 text-red-600 accent-red-600 bg-slate-100 border-slate-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-slate-700 dark:focus:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500"
						/>
						<label
							for="incomplete-radio"
							class="w-full py-3 ms-2 text-md font-bold text-slate-900 dark:text-slate-300"
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
							class="w-8 h-8 text-green-600 accent-green-600 bg-slate-100 border-slate-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-slate-700 dark:focus:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500"
						/>
						<label
							for="complete-radio"
							class="w-full py-3 ms-2 text-md font-bold text-slate-900 dark:text-slate-300"
							>Complete</label
						>
					</div>
				</li>
			</ul>
		</div>
		<button
			type="submit"
			class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>Save</button
		>
	</form>
</div>
