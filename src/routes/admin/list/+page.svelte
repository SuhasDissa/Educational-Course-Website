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

	import type { AuthUser } from '@prisma/client';
	import StarProgress from '../../../components/StarProgress.svelte';
</script>

<div class="mx-auto flex h-full content-center justify-center px-4 pb-16 pt-16 sm:pt-8">
	<div class="card w-full bg-base-100 p-4 shadow-xl">
		<div class="flex flex-row gap-8 overflow-x-auto">
			<h5 class="p-6 text-2xl font-bold">
				Registered Users ({count})
			</h5>
			<div class="hidden flex-row items-center justify-between gap-16 sm:flex">
				<form action="/admin/list">
					<input
						name="q"
						value={query != null ? query : ''}
						type="text"
						placeholder="Search Name or Id No."
						class="input input-bordered w-full max-w-xs"
					/>
				</form>
				{#if query == null}
					<div class="join">
						<form action="/admin/list">
							<button
								class="btn join-item btn-sm"
								disabled={page === 1}
								value={page - 1}
								name="page">Previous</button
							>
							{#each Array(totalPages) as pg, index}
								<button
									class="btn join-item btn-sm {page === index + 1 ? 'btn-active' : ''}"
									name="page"
									value={index + 1}>{index + 1}</button
								>
							{/each}
							<button
								class="btn join-item btn-sm"
								disabled={page === totalPages}
								value={page + 1}
								name="page">Next</button
							>
						</form>
					</div>
				{/if}
			</div>
		</div>

		<div class="divider mt-2"></div>

		<div class="overflow-x-auto">
			<table class="table table-sm">
				<thead class="">
					<tr>
						<th scope="col"> Name </th>
						<th scope="col"> School </th>
						<th scope="col"> Phone No. </th>
						<th scope="col"> Id No. </th>
						<th scope="col"> Modules </th>
						<th scope="col"> Practical </th>
						<th scope="col"> Role </th>
						<th scope="col">
							<span class="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{#each users as user}
						<tr class="">
							<td class=""> {user.name} </td>
							<td class=""> {user.school} </td>
							<td class=""> {user.phone} </td>
							<td class=""> {user.username} </td>
							<td class=""> <StarProgress progress={user.progress} /> </td>
							<td class="">
								{#if user.progress?.practical}
									<span>✅</span>
								{:else}
									<span>❌</span>
								{/if}
							</td>
							<td class="">
								{#if user.role == 'admin'}
									<div class="badge badge-warning gap-2">Admin</div>
								{:else}
									<div class="badge badge-info gap-2">User</div>
								{/if}</td
							>
							<td class="">
								<a href="/admin/edit/{user.id}" class="btn btn-outline btn-sm"> Edit User </a>
								<a href="/admin/certificate/{user.id}" class="btn btn-outline btn-sm">
									View Certificate
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
