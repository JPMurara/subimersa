<script>
	import constants from '$lib/constants.json';
</script>

<header class="sticky top-0">
	<nav
		class="flex flex-col md:flex-row items-center justify-around py-2 bg-cover bg-center"
		style="background-image: url('/bg-fundo-mar.jpeg');"
	>
		<div class="mb-2 md:mb-0">
			<a href="/" class="flex items-center gap-4 md:gap-8">
				<img src="/bw-logo.svg" alt="subimersa logo" class="w-24" />
				<h1 class="font-poetsen-one">SUBIMERSA Curso de Pesca Submarina</h1>
			</a>
		</div>

		<div class="flex gap-8 font-poetsen-one mb-1 md:mb-0">
			<a href="/sobre">Sobre</a>
			<a href="/cursos">Cursos</a>
			<a href="/contato">Contato</a>
			<a href={constants.online_store}>Loja Virtual</a>
		</div>
	</nav>
</header>
