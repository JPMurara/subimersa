<script>
	let currentIndex = 0;

	function prevImage() {
		currentIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
	}

	function nextImage() {
		currentIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
	}

	const videos = [
		{ author: 'Hudson', video: '/testimonials/testimonial_1.mp4' },
		{ author: 'Cristian', video: '/testimonials/testimonial_2.mp4' },
		{ author: 'Lucas', video: '/testimonials/testimonial_3.mp4' },
		{ author: 'Pedro Paulo', video: '/testimonials/testimonial_4.mp4' },
		{ author: 'Mauricio', video: '/testimonials/testimonial_5.mp4' }
	];
</script>

<div class="carousel">
	{#if videos.length > 0}
		<div class="carousel-inner">
			<video src={videos[currentIndex].video} controls autoplay loop></video>
			<div class="author">Testimonial by: {videos[currentIndex].author}</div>
		</div>

		<button class="prev" on:click={prevImage}>&#10094;</button>
		<button class="next" on:click={nextImage}>&#10095;</button>
	{:else}
		<p>No videos available at the moment.</p>
	{/if}
</div>

<style>
	.carousel {
		position: relative;
		max-width: 600px;
		margin: auto;
		overflow: hidden;
	}

	.carousel-inner {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	video {
		width: 100%;
		max-height: 400px;
		object-fit: cover;
		border-radius: 10px;
	}

	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -22px;
		padding: 16px;
		color: white;
		font-weight: bold;
		font-size: 18px;
		transition: 0.6s ease;
		border: none;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
	}

	.prev {
		left: 0;
	}

	.next {
		right: 0;
	}

	.prev:hover,
	.next:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>
