<script lang="ts">
	export let data;
	let users: AuthUser[];
	let count: number;
	let query: string | null;
	let page: number;
	let totalPages: number;

	$: users = data.users;
	$: count = data.count;
	$: query = data.query;
	$: page = data.page;
	$: totalPages = data.totalPages;

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
			<h5 class="p-6 text-2xl font-bold text-slate-700 dark:text-slate-300">
				Registered Users ({count})
			</h5>
			<div class="hidden flex-row items-center justify-between gap-16 sm:flex">
				<form action="/admin/list">
					<input
						name="q"
						value={query != null ? query : ''}
						class="block rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm leading-5 text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
						placeholder="Search Name or Id No."
					/>
				</form>
				{#if query == null}
					<nav aria-label="Page navigation">
						<form action="/admin/list">
							<ul class="inline-flex h-10 -space-x-px text-base">
								<li>
									<button
										class="ms-0 flex h-10 cursor-default items-center justify-center rounded-s-lg border border-e-0 border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
										disabled={page === 1}
										value={page - 1}
										name="page">Previous</button
									>
								</li>
								{#each Array(totalPages) as pg, index}
									<li>
										<button
											class="flex h-10 items-center justify-center border border-slate-300 px-4 leading-tight {page ===
											index + 1
												? 'bg-blue-50 text-slate-600 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-400'
												: 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white'}"
											name="page"
											value={index + 1}
										>
											{index + 1}
										</button>
									</li>
								{/each}
								<li>
									<button
										class="flex h-10 items-center justify-center rounded-e-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
										disabled={page === totalPages}
										value={page + 1}
										name="page">Next</button
									>
								</li>
							</ul>
						</form>
					</nav>
				{/if}
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
