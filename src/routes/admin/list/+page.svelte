<script lang="ts">
	export let data;
	let users: AuthUser[];
	let count: number;
	let query: string | null;
	let page: number;
	let rowsPerPage: number;

	$: users = data.users;
	$: count = data.count;
	$: query = data.query;
	$: page = data.page;
	$: rowsPerPage = data.rowsPerPage;

	import { t } from '$lib/i18n';
	import type { AuthUser } from '@prisma/client';
	import StarProgress from '../../../components/StarProgress.svelte';
</script>

<div class="mx-auto flex h-full flex-col content-center justify-center px-8 py-8">
	<h1 class="p-6 text-4xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
		{$t('admin_page')}
	</h1>
	<section class="flex flex-col pt-10">
		<div class="flex flex-row gap-8">
			<h5 class="p-6 text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
				Registered Users ({count})
			</h5>
			<div class="hidden flex-row items-center sm:flex">
				<form action="/admin/list">
					<input
						name="q"
						value={query != null ? query : ''}
						class="block rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm leading-5 text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
						placeholder="Search Name or Id No."
					/>
				</form>
				<!--
				<nav aria-label="Page navigation">
					<ul class="inline-flex -space-x-px text-base h-10">
						<li>
							<a
								href="#"
								class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>Previous</a
							>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>1</a
							>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>2</a
							>
						</li>
						<li>
							<a
								href="#"
								aria-current="page"
								class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
								>3</a
							>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>4</a
							>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>5</a
							>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>Next</a
							>
						</li>
					</ul>
				</nav>
				-->
			</div>
		</div>

		<div class="relative overflow-x-auto rounded-lg shadow-md dark:bg-slate-800">
			<table class="text-md w-full text-left text-slate-500 rtl:text-right dark:text-slate-400">
				<thead class="bg-slate-50 text-slate-700 dark:bg-slate-700 dark:text-slate-400">
					<tr>
						<th scope="col" class="px-6 py-3"> Name </th>
						<th scope="col" class="px-6 py-3"> School </th>
						<th scope="col" class="px-6 py-3"> Phone No. </th>
						<th scope="col" class="px-6 py-3"> Id No. </th>
						<th scope="col" class="px-6 py-3"> Modules </th>
						<th scope="col" class="px-6 py-3"> Practical </th>
						<th scope="col" class="px-6 py-3"> Role </th>
						<th scope="col" class="px-6 py-3">
							<span class="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{#each users as user}
						<tr
							class="whitespace-nowrap border-b font-medium text-slate-900 dark:border-slate-700 dark:text-slate-100"
						>
							<td class="narrow-col px-6 py-4"> {user.name} </td>
							<td class="narrow-col px-6 py-4"> {user.school} </td>
							<td class="px-6 py-4"> {user.phone} </td>
							<td class="px-6 py-4"> {user.username} </td>
							<td class="px-6 py-4"> <StarProgress progress={user.progress} /> </td>
							<td class="px-6 py-4">
								{#if user.progress?.practical}
									<span>✅</span>
								{:else}
									<span>❌</span>
								{/if}
							</td>
							<td class="px-6 py-4">
								{#if user.role == 'admin'}
									<span
										class="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
										>Admin</span
									>
								{:else}
									<span
										class="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
										>User</span
									>
								{/if}</td
							>
							<td class="button-col px-6 py-4 text-right">
								<a
									href="/admin/edit/{user.id}"
									class="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									<span class="material-symbols-rounded"> edit </span>
									Edit User
								</a>
								<a
									href="/admin/certificate/{user.id}"
									class="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									<span class="material-symbols-rounded"> license </span>
									View Certificate
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</div>

<style>
	table {
		width: 100%;
	}
	table td.narrow-col {
		overflow: hidden;
		word-wrap: break-word;
		text-overflow: ellipsis;
		max-width: 250px;
	}
</style>
