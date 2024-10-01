<script>
	import constants from '$lib/constants.json';
	import { openWhatsApp } from '../../utils/whatsappUtils';

	function handleClick() {
		openWhatsApp();
	}
</script>

<header class="sticky top-0">
	<nav
		class="flex flex-col md:flex-row items-center justify-around py-2 bg-cover bg-center"
		style="background-image: url('/bg-fundo-mar.jpeg');"
	>
		<div class="mb-2 md:mb-0">
			<a href="/" class="flex items-center gap-4 md:gap-8">
				<img src="/logo-removebg.png" alt="subimersa logo" class="w-24" />
				<p class="">Subimersa Curso de Pesca Submarina</p>
			</a>
		</div>

		<div class="flex gap-8 mb-1 md:mb-0">
			<a href="/sobre" title="Sobre {constants.name_long}">Sobre</a>
			<a href="/cursos" title="Nossos Cursos">Cursos</a>
			<button on:click={handleClick} title="Contato via WhatsApp">Contato</button>
			<a href={constants.online_store} title="Conheça nossos Produtos">Loja Virtual</a>
		</div>
	</nav>
</header>
