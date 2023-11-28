<script lang="ts">
	import HomeCarousel from '../components/HomeCarousel.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="mx-auto max-w-screen-xl px-8 py-8 flex flex-col justify-center content-center h-full">
	<section class="pt-10 flex flex-col sm:flex-row justify-evenly">
		<img class="h-32 object-contain" src="images/uvaflag.png" alt="" srcset="" />
		<div class="text-center w-full pt-4 sm:pt-0">
			<h1
				class="text-slate-900 dark:text-slate-100 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
			>
				{$t('title')}
			</h1>
			<h2
				class="pt-4 text-slate-700 dark:text-slate-400 font-bold text-md sm:text-lg md:text-xl lg:text-2xl"
			>
				{$t('subtitle')}
			</h2>
		</div>
		<img class="h-32 object-contain hidden sm:block" src="images/unicef2.png" alt="" srcset="" />
	</section>
	<section class="pt-10">
		<HomeCarousel />
	</section>
</div>
