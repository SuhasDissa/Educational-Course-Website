<script lang="ts">
	import HomeCarousel from '../components/HomeCarousel.svelte';
</script>

<div class="mx-auto max-w-screen-xl px-8 py-8 flex flex-col justify-center content-center h-full">
	<section class="pt-10 flex flex-row justify-evenly">
		<img class="h-32 hidden sm:block" src="images/uvaflag.png" alt="" srcset="" />
		<img class="h-32 w-auto" src="images/banner.png" alt="" srcset="" />
		<img class="h-32 hidden sm:block" src="images/unicef.png" alt="" srcset="" />
	</section>
	<section class="pt-10">
		<HomeCarousel />
	</section>
</div>
