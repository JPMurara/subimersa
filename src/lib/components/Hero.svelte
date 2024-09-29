<script>
	import constants from '$lib/constants.json';
	import { openWhatsApp } from '../../utils/whatsappUtils';

	function handleClick() {
		openWhatsApp();
	}
</script>

<div class="bg-cover bg-center" style="background-image: url('/bg-fundo-mar.jpeg');">
	<header class="">
		<nav class="flex flex-col md:flex-row items-center justify-around py-2">
			<div class="mb-2 md:mb-0">
				<a href="/" class="flex items-center gap-4 md:gap-8">
					<img src="/logo-removebg.png" alt="subimersa logo" class="w-24" />
					<h1 class="font-poetsen-one">SUBIMERSA Curso de Pesca Submarina</h1>
				</a>
			</div>

			<div class="flex gap-8 font-poetsen-one mb-1 md:mb-0">
				<a href="/sobre" title="Sobre {constants.name_long}">Sobre</a>
				<a href="/cursos" title="Nossos Cursos">Cursos</a>
				<button on:click={handleClick} title="Contato via WhatsApp">Contato</button>
				<a href={constants.online_store} title="Conheça nossos Produtos">Loja Virtual</a>
			</div>
		</nav>
	</header>

	<section class="pt-10 md:pt-0">
		<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div
				class="mr-auto place-self-center text-center lg:text-left lg:col-span-7 lg:pl-4 pt-0 lg:-mt-20"
			>
				<h1
					class="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
				>
					Curso de Pesca Subaquática em Apneia
				</h1>
				<p class="max-w-2xl mb-6 font-semibold text-gray-600 lg:mb-10 md:text-3xl lg:text-4xl">
					Descubra a emoção da pesca mais Radical e Sustentável conectando-se com a natureza
					subaquática de uma forma única
				</p>

				<!-- buttons -->
				<div class="flex justify-center lg:justify-start gap-8 lg:gap-4">
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
					<a
						href="/agenda"
						title="Agenda"
						class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-blue-1 focus:ring-4 focus:ring-gray-100 bg-blue-3"
					>
						Agenda
					</a>
				</div>

				<!-- logos -->
				<div class="flex justify-center items-center lg:justify-start gap-8 pt-8">
					<div class="max-w-20 lg:max-w-28 xl:max-w-32">
						<img
							src="/CBPDS.gif"
							alt="Confederação Brasileira de Pesca e Desportos Subaquáticos"
							class=""
						/>
					</div>
					<div class="max-w-32 lg:max-w-48 xl:max-w-56">
						<img src="/CMAS.png" alt="Confederacao Mundial de Atividades Subaquáticas" />
					</div>
				</div>
			</div>
			<div
				class="place-self-center max-w-xs sm:max-w-sm lg:max-w-md 2xl:max-w-2xl my-10 lg:mt-0 lg:col-span-5"
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
