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

<section>
	<div
		class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
	>
		<div>
			<h2 class="mb-4">Veja o que nossos alunos falam sobre nós</h2>
			<p class="mb-4 font-semibold text-gray-500">
				Confira os depoimentos dos nossos alunos e veja como o curso transformou suas experiências
				na pesca subaquática. Independentemente do nível, todos encontram no curso o suporte
				necessário para aprimorar suas habilidades e viver essa aventura de forma segura.
			</p>
		</div>
		<div class="gap-4 mt-8 carousel">
			<div class="carousel-inner w-full">
				<video
					src={videos[currentIndex].video}
					controls
					autoplay
					loop
					controlslist="nodownload"
					class="w-full h-auto object-cover rounded-lg"
				>
					<track kind="captions" />
				</video>
			</div>
			<div
				class="absolute bottom-20 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg"
			>
				Aluno: {videos[currentIndex].author}
			</div>
			<button class="prev" on:click={prevImage}>&#10094;</button>
			<button class="next" on:click={nextImage}>&#10095;</button>
		</div>
	</div>
</section>

<style>
	.carousel {
		position: relative;
		margin: auto;
		overflow: hidden;
	}

	.carousel-inner {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60%;
	}

	video {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 10px;
	}

	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: auto;
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
