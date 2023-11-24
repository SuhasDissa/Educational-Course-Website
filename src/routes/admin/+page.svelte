<script lang="ts">
	export let data;
	let users = data.users;

	import { t } from '$lib/i18n';
</script>

<div class="mx-auto max-w-screen-xl px-8 py-8 flex flex-col justify-center content-center h-full">
	<h1 class="p-6 text-4xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
		{$t('admin_page')}
	</h1>
	<section class="pt-10 flex flex-col">
		<h5 class="p-6 text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
			Registered Users
		</h5>
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-800">
			<table class="w-full text-md text-left rtl:text-right text-slate-500 dark:text-slate-400">
				<thead class="text-slate-700 bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
					<tr>
						<th scope="col" class="px-6 py-3"> Name </th>
						<th scope="col" class="px-6 py-3">Username </th>
						<th scope="col" class="px-6 py-3"> School </th>
						<th scope="col" class="px-6 py-3"> Phone No. </th>
						<th scope="col" class="px-6 py-3"> National Id No. </th>
						<th scope="col" class="px-6 py-3"> Role </th>
						<th scope="col" class="px-6 py-3">
							<span class="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{#each users as user}
						<tr
							class="border-b dark:border-slate-700 font-medium text-slate-900 whitespace-nowrap dark:text-slate-100"
						>
							<th scope="row" class="px-6 py-4">
								{user.name}
							</th>
							<td class="px-6 py-4"> {user.username} </td>
							<td class="px-6 py-4"> {user.school} </td>
							<td class="px-6 py-4"> {user.phone} </td>
							<td class="px-6 py-4"> {user.id_no} </td>
							<td class="px-6 py-4">
								{#if user.role == 'admin'}
									<span
										class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
										>Admin</span
									>
								{:else}
									<span
										class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
										>User</span
									>
								{/if}</td
							>
							<td class="px-6 py-4 text-right">
								<a
									href="/admin/edit/{user.id}"
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									<span class="material-symbols-rounded"> edit </span>
									Edit User
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</div>
