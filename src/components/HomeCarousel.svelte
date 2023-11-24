<script lang="ts">
	import ImageBanner from './ImageBanner.svelte';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';
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

<ImageBanner
	title={$t(slides[currentSlide].title)}
	description={$t(slides[currentSlide].description)}
	imageUrl={images[currentImage]}
/>
