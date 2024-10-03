<script>
	import constants from '$lib/constants.json';
	import { openWhatsApp } from '../../utils/whatsappUtils';

	function handleClick() {
		openWhatsApp();
	}
</script>

<header
	class="sticky top-0 bg-cover bg-center"
	style="background-image: url('/bg-fundo-mar.jpeg');"
>
	<nav class="flex flex-col xl:flex-row items-center justify-around py-2">
		<div class="mb-2 md:mb-0">
			<a href="/" class="flex items-center gap-4 md:gap-8">
				<img src="/logo-removebg.png" alt="subimersa logo" class="w-20 md:w-28 xl:w-36" />
				<p class="text-3xl font-semibold hidden lg:block">
					<span class="font-bold">Subimersa</span> | Curso de Pesca Submarina
				</p>
				<div class="flex flex-col items-center lg:hidden">
					<p class="text-3xl font-bold">Subimersa</p>
					<p class="text-xl font-semibold">Curso de Pesca Submarina</p>
				</div>
			</a>
		</div>

		<div class="flex gap-8 mb-1 md:mb-0">
			<a href="/sobre" class="text-lg font-semibold" title="Sobre {constants.name_long}">Sobre</a>
			<a href="/cursos" class="text-lg font-semibold" title="Nossos Cursos">Cursos</a>
			<button on:click={handleClick} class="text-lg font-semibold" title="Contato via WhatsApp"
				>Contato</button
			>
			<a href={constants.online_store} class="text-lg font-semibold" title="Conheça nossos Produtos"
				>Loja Virtual</a
			>
		</div>
	</nav>
</header>
