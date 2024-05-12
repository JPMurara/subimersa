<script>
	import Icon from '@iconify/svelte';
</script>

<footer class="flex flex-col md:flex-row justify-around bg-gray-300 px-4 pb-10">
	<div class="my-4">
		<!-- logo and company name -->
		<div class="mb-4">
			<a href="/" class="flex items-center gap-4 md:gap-8">
				<img
					src="/logo-removebg.png"
					alt="subimersa logo"
					class="w-32 rounded-full hidden md:block"
				/>
				<h1 class="font-poetsen-one">SUBIMERSA Curso de Pesca Submarina</h1>
			</a>
		</div>

		<!-- company info column -->
		<div class="max-w-sm">
			<div class="flex flex-col">
				<div class="my-1">
					<p class="font-semibold">
						Telefone: <a href="tel:0424424424" title="ligue para subimersa">0424424424</a>
					</p>
				</div>
				<div class="my-1">
					<p class="font-semibold">email: <a href="mailto:email@email.com">email@email.com</a></p>
				</div>
				<div class="my-1">
					<p class="font-semibold">
						Certificação: <a href="https://www.cmas.org/" title="certificado cmas" target="_blank"
							>CMAS reg. MPS/22/0015</a
						>
					</p>
				</div>
				<hr />
				<div class="flex items-center justify-evenly my-2">
					<div>
						<a
							href="https://www.instagram.com/subimersa/"
							title="Subimersa Instagram"
							target="_blank"
						>
							<Icon icon="mdi:instagram" class="text-6xl" />
						</a>
					</div>
					<div>
						<a
							href="https://www.facebook.com/p/Subimersa-100067130615379/"
							title="Subimersa Facebook"
							target="_blank"><Icon icon="ic:baseline-facebook" class="text-6xl" /></a
						>
					</div>
					<div>
						<a href="https://imersastore.lojazap.com/" title="Imersa Store" target="_blank" class=""
							><img src="logo-imersa-store-removebg.png" alt="logo imersa loja" class="h-24" /></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- site map -->
	<div class="flex flex-col gap-8 font-poetsen-one justify-center">
		<a href="/sobre" title="Sobre">Sobre</a>
		<a href="/cursos" title="Cursos">Cursos</a>
		<a href="/contato" title="Contato">Contato</a>
		<a href="https://imersastore.lojazap.com/" target="_blank" title="Imersa Store">Imersa Store</a>
		<a href="/termos-condicoes" title="Termos e Condicoes">Termos e Condicoes</a>
		<a href="/privacidade" title="Seguranca e Privacidade">Seguranca e Privacidade</a>
	</div>
</footer>
