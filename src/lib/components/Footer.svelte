<script>
	import Icon from '@iconify/svelte';
	import constants from '$lib/constants.json';
</script>

<footer class="flex flex-col md:flex-row justify-around bg-gray-200 px-4 pb-10">
	<div class="my-4">
		<!-- logo and company name -->
		<div class="mb-4">
			<a href="/" class="flex items-center gap-4 md:gap-8">
				<img
					src="/logo-removebg.png"
					alt="subimersa logo"
					class="w-32 rounded-full hidden md:block"
				/>
				<h1 class="font-poetsen-one">{constants.name_long}</h1>
			</a>
		</div>

		<!-- company info column -->
		<div class="max-w-sm">
			<div class="flex flex-col">
				<div class="my-1">
					<p class="font-semibold">
						Telefone: <a href="tel:{constants.telephone}" title="ligue para subimersa"
							>{constants.telephone}</a
						>
					</p>
				</div>
				<div class="my-1">
					<p class="font-semibold">
						Email: <a href="mailto:{constants.email}">{constants.email}</a>
					</p>
				</div>
				<div class="my-1">
					<p class="font-semibold">
						Certificação: <a href={constants.cmas} title="certificado cmas" target="_blank"
							>CMAS reg. MPS/22/0015</a
						>
					</p>
				</div>
				<hr />
				<div class="flex items-center justify-evenly my-2">
					<div>
						<a href={constants.instagram} title="Subimersa Instagram" target="_blank">
							<Icon icon="mdi:instagram" class="text-6xl" />
						</a>
					</div>
					<div>
						<a href={constants.facebook} title="Subimersa Facebook" target="_blank"
							><Icon icon="ic:baseline-facebook" class="text-6xl" /></a
						>
					</div>
					<div>
						<a href={constants.online_store} title="Imersa Store" target="_blank" class=""
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
		<a href={constants.online_store} target="_blank" title="Imersa Store">Imersa Store</a>
		<a href="/termos-condicoes" title="Termos e Condicoes">Termos e Condicoes</a>
		<a href="/privacidade" title="Seguranca e Privacidade">Seguranca e Privacidade</a>
	</div>
</footer>
