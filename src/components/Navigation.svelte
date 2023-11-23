<script>
	import NavMenuItem from './NavMenuItem.svelte';
	let open = false;
</script>

<nav class="bg-slate-100 dark:bg-slate-900 border-slate-200 fixed top-0 left-0 w-full z-50">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
		<button
			on:click={() => (open = !open)}
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
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
		<div class="hidden w-full md:block md:w-auto bg-slate-100 dark:bg-slate-900">
			<ul class="font-medium flex p-0 flex-row space-x-8 dark:bg-slate-900">
				<li>
					<NavMenuItem name={'Home'} path={'/'} />
				</li>
				<li>
					<NavMenuItem name={'Profile'} path={'/profile'} />
				</li>
				<li>
					<NavMenuItem name={'Modules'} path={'/modules'} />
				</li>
				<li>
					<NavMenuItem name={'About Us'} path={'/about'} />
				</li>
			</ul>
		</div>
	</div>
</nav>

<aside
	class="{open
		? 'translate-x-0'
		: 'translate-x-full'} h-full fixed right-0 top-0 pt-16 w-64 z-10 transition-transform sm:translate-x-full"
	aria-label="Sidebar"
>
	<ul
		class="h-full font-medium flex flex-col p-4 pt-4 bg-slate-200 dark:bg-slate-800 border-l border-gray-100 dark:border-gray-700"
	>
		<li>
			<NavMenuItem
				name={'Home'}
				path={'/'}
				on:click={() => {
					open = false;
				}}
			/>
		</li>
		<li>
			<NavMenuItem
				name={'Profile'}
				path={'/profile'}
				on:click={() => {
					open = false;
				}}
			/>
		</li>
		<li>
			<NavMenuItem
				name={'Modules'}
				path={'/modules'}
				on:click={() => {
					open = false;
				}}
			/>
		</li>
		<li>
			<NavMenuItem
				name={'About Us'}
				path={'/about'}
				on:click={() => {
					open = false;
				}}
			/>
		</li>
	</ul>
</aside>
