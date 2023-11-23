<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';
	import ImageBanner from '../components/ImageBanner.svelte';
	let slides = [
		{
			title: 'home.vision',
			description: 'home.vision_description'
		},
		{
			title: 'home.mission',
			description: 'home.mission_description'
		},
		{
			title: 'home.welcome',
			description: 'home.welcome_description'
		}
	];
	let images = [
		'images/children/01.jpg',
		'images/children/02.jpg',
		'images/children/03.jpg',
		'images/children/04.jpg',
		'images/children/05.jpg',
		'images/children/06.jpg',
		'images/children/07.jpg'
	];
	let currentSlide = 0;
	let currentImage = 0;

	onMount(() => {
		const interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
			currentImage = (currentImage + 1) % images.length;
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="mx-auto max-w-screen-xl px-8 py-8 flex flex-col justify-center content-center h-full">
	<section class="pt-10 flex flex-row justify-evenly">
		<img class="h-32" src="images/uvaflag.png" alt="" srcset="" />
		<img class="h-32" src="images/banner.png" alt="" srcset="" />
		<img class="h-32" src="images/unicef.png" alt="" srcset="" />
	</section>
	<section class="pt-10 flex flex-row justify-evenly">
		<ImageBanner
			title={$t(slides[currentSlide].title)}
			description={$t(slides[currentSlide].description)}
			imageUrl={images[currentImage]}
		/>
	</section>
</div>
