<script lang="ts">
	import { onMount } from 'svelte';
	import ImageBanner from '../components/ImageBanner.svelte';
	let slides = [
		{
			title: 'අපගේ දැක්ම',
			description: 'පරිපුර්ණ අධ්‍යාපනයක් තුළින් විශිෂ්ට දරු පරපුරක්'
		},
		{
			title: 'අපගේ මෙහෙවර',
			description:
				'යමබර හා පුළුල් අධ්‍යාපන ක්‍රියාවලියක් සම්පාදනය කිරීම තුළින් ඌව පළාතේ විශිෂ්ට දරු පරපුරක් බිහීකිරීම සදහා අධ්‍යාපන ක්ෂේත්‍රයේ සියලු භෞතික,මානව හා මුල්‍ය සම්පත් කාර්යක්ෂමව හා ඵලදායී ලෙස මෙහෙයවීමයි.'
		},
		{
			title: 'සාදරයෙන් පිළිගනිමු',
			description:
				'බහුතල ඉගෙනුම් ක්‍රමවේදය පිළිබඳ මාර්ගගත ගුරු පුහුණු පාඨමාලාවට ඔබව සාදරයෙන් පිළිගනිමු'
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
			title={slides[currentSlide].title}
			description={slides[currentSlide].description}
			imageUrl={images[currentImage]}
		/>
	</section>
</div>
