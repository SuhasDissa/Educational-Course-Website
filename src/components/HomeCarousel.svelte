<script lang="ts">
	import ImageBanner from './ImageBanner.svelte';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	// images
	import childen1 from '../images/children/01.webp';
	import childen2 from '../images/children/02.webp';
	import childen3 from '../images/children/03.webp';
	import childen4 from '../images/children/04.webp';
	import childen5 from '../images/children/05.webp';
	import childen6 from '../images/children/06.webp';
	import childen7 from '../images/children/07.webp';

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
	let images = [childen1, childen2, childen3, childen4, childen5, childen6, childen7];
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
