<script>
	import constants from '$lib/constants.json';
	import { openWhatsApp } from '../../utils/whatsappUtils';

	function handleClick() {
		openWhatsApp();
	}
</script>

<!-- navbar -->
<div class="bg-cover bg-center" style="background-image: url('/bg-fundo-mar.jpeg');">
	<header>
		<nav class="flex sm:flex-col xl:flex-row items-center justify-around py-2">
			<div class="sm:mb-2 md:mb-0">
				<a href="/" class="flex items-center sm:gap-4 md:gap-8">
					<img src="/logo-removebg.png" alt="subimersa logo" class="sm:w-20 md:w-28 xl:w-36" />
					<p class="text-3xl font-semibold hidden lg:block">
						<span class="font-bold">Subimersa</span> | Curso de Pesca Submarina
					</p>
					<div class="flex flex-col items-center sm:block lg:hidden">
						<p class="text-3xl font-bold">Subimersa</p>
						<p class="text-xl font-semibold">Curso de Pesca Submarina</p>
					</div>
				</a>
			</div>

			<div class="flex gap-8 sm:mb-1 md:mb-0">
				<a href="/sobre" class="text-lg font-semibold" title="Sobre {constants.name_long}">Sobre</a>
				<a href="/cursos" class="text-lg font-semibold" title="Nossos Cursos">Cursos</a>
				<button on:click={handleClick} class="text-lg font-semibold" title="Contato via WhatsApp"
					>Contato</button
				>
				<a
					href={constants.online_store}
					target="_blank"
					class="text-lg font-semibold"
					title="Conheça nossos Produtos">Loja Virtual</a
				>
			</div>
		</nav>
	</header>

	<section class="sm:pt-10 md:pt-0">
		<div
			class="grid max-w-screen-xl sm:px-4 sm:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
		>
			<div
				class="place-self-center sm:text-center lg:text-left lg:col-span-7 lg:pl-4 pt-0 lg:-mt-20"
			>
				<h1 class="max-w-2xl mb-8 sm:!text-3xl lg:!text-4xl xl:!text-5xl">
					Curso de Pesca Subaquática em Apneia
				</h1>
				<p class="max-w-2xl font-semibold text-gray-700 sm:mb-6 lg:mb-10 sm:!text-xl md:!text-3xl">
					Descubra a emoção da pesca mais radical e sustentável conectando-se com a natureza
					subaquática de uma forma única
				</p>

				<!-- buttons -->
				<div class="flex sm:justify-center lg:justify-start sm:gap-8 lg:gap-4">
					<a
						href="/cursos"
						title="Cursos"
						class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-blue-1 focus:ring-4 focus:ring-gray-100 bg-blue-3"
					>
						Cursos
					</a>
					<button
						on:click={handleClick}
						title="Contato"
						class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-blue-1 focus:ring-4 focus:ring-gray-100 bg-blue-3"
					>
						Contato
					</button>
				</div>

				<!-- logos -->
				<div class="flex sm:justify-center items-center lg:justify-start gap-8 pt-8">
					<div class="sm:max-w-20 lg:max-w-28 xl:max-w-32">
						<img src="/CBPDS.gif" alt="Confederação Brasileira de Pesca e Desportos Subaquáticos" />
					</div>
					<div class="sm:max-w-32 lg:max-w-48 xl:max-w-56">
						<img src="/CMAS.png" alt="Confederacao Mundial de Atividades Subaquáticas" />
					</div>
				</div>
			</div>
			<div
				class="place-self-center sm:max-w-sm lg:max-w-md 2xl:max-w-2xl sm:my-10 lg:mt-0 lg:col-span-5"
			>
				<img
					src="subimersa_20.jpeg"
					alt="pescador e sua garoupa"
					class="rounded-3xl lg:rounded-full"
				/>
			</div>
		</div>
	</section>
</div>
