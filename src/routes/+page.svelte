<script lang="ts">
	import HomeCarousel from '../components/HomeCarousel.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="mx-auto flex h-full max-w-screen-xl flex-col content-center justify-center px-8 py-8">
	<section class="flex flex-col justify-evenly pt-10 sm:flex-row">
		<img class="h-32 object-contain" src="images/uvaflag.png" alt="" srcset="" />
		<div class="w-full pt-4 text-center sm:pt-0">
			<h1
				class="text-lg font-bold text-slate-900 dark:text-slate-100 sm:text-xl md:text-2xl lg:text-3xl"
			>
				{$t('title')}
			</h1>
			<h2
				class="text-md pt-4 font-bold text-slate-700 dark:text-slate-400 sm:text-lg md:text-xl lg:text-2xl"
			>
				{$t('subtitle')}
			</h2>
		</div>
		<img class="hidden h-32 object-contain sm:block" src="images/unicef2.png" alt="" srcset="" />
	</section>
	<section class="pt-10">
		<HomeCarousel />
	</section>
</div>
