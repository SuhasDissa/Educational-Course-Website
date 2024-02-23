<script>
	import NavMenuItem from './NavMenuItem.svelte';
	import { t, locale, locales } from '$lib/i18n';
	let open = false;
</script>

<nav class="fixed left-0 top-0 z-50 w-full border-slate-200 bg-slate-100 dark:bg-slate-900">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-end p-4">
		<button
			on:click={() => (open = !open)}
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 md:hidden"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-5 w-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div class="hidden w-full bg-slate-100 dark:bg-slate-900 md:block md:w-auto">
			<ul class="flex flex-row space-x-8 p-0 font-medium dark:bg-slate-900">
				<li>
					<NavMenuItem name={$t('home')} path={'/'} />
				</li>
				<li>
					<NavMenuItem name={$t('my_progress')} path={'/profile'} />
				</li>
				<li>
					<NavMenuItem name={$t('modules')} path={'/modules'} />
				</li>
				<li>
					<NavMenuItem name={$t('about')} path={'/about'} />
				</li>
				<li>
					<select
						class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm font-bold text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
						bind:value={$locale}
					>
						{#each locales as l}
							<option value={l.id}>{l.name}</option>
						{/each}
					</select>
				</li>
			</ul>
		</div>
	</div>
</nav>

<aside
	class="{open
		? 'translate-x-0'
		: 'translate-x-full'} fixed right-0 top-0 z-10 h-full w-64 pt-16 transition-transform sm:translate-x-full"
	aria-label="Sidebar"
>
	<ul
		class="flex h-full flex-col border-l border-gray-100 bg-slate-200 p-4 pt-4 font-medium dark:border-gray-700 dark:bg-slate-800"
	>
		<li>
			<NavMenuItem
				name={$t('home')}
				path={'/'}
				on:click={() => {
					open = false;
				}}
			/>
		</li>
		<li>
			<NavMenuItem
				name={$t('my_progress')}
				path={'/profile'}
				on:click={() => {
					open = false;
				}}
			/>
		</li>
		<li>
			<NavMenuItem
				name={$t('modules')}
				path={'/modules'}
				on:click={() => {
					open = false;
				}}
			/>
		</li>
		<li>
			<NavMenuItem
				name={$t('about')}
				path={'/about'}
				on:click={() => {
					open = false;
				}}
			/>
		</li>
		<li>
			<select
				class="mt-4 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm font-bold text-slate-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
				bind:value={$locale}
			>
				{#each locales as l}
					<option value={l.id}>{l.name}</option>
				{/each}
			</select>
		</li>
	</ul>
</aside>
