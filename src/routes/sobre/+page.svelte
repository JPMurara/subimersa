<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<section class="">
	<div class="mx-auto max-w-screen-xl pt-16">
		<div class="mx-auto max-w-screen-sm text-center">
			<h1 class="mb-4">Sobre a SUBIMERSA</h1>
		</div>
	</div>
</section>
<section class="bg-white">
	<div
		class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
	>
		<div class="font-light text-gray-500 sm:text-lg">
			<h2 class="mb-4">Nosso Instrutor</h2>
			<p class="mb-4">
				Com mais de 20 anos de experiência em Pesca Subaquática em Apneia, sou um entusiasta
				dedicado e apaixonado por essa modalidade. Ao longo dos anos, tive a oportunidade de
				explorar e pescar em diferentes regiões do Brasil, desde o litoral quente e profundo do
				Nordeste até as águas frias e turvas do Sul.
			</p>
			<p class="mb-4">
				Sou Instrutor Certificado pela CMAS (Confederação Mundial de Atividades Subaquáticas) e, nos
				últimos 4 anos, atuei como instrutor oficial de Pesca Subaquática, formando mais de 500
				alunos em cursos presenciais. Tenho um compromisso forte em compartilhar minhas experiências
				e conhecimentos, garantindo que cada aluno saia capacitado e seguro para praticar essa
				incrível atividade.
			</p>
			<div class="flex justify-center items-center lg:justify-start gap-8">
				<div class="max-w-20 lg:max-w-28 xl:max-w-32">
					<img src="/CBPDS.gif" alt="Confederação Brasileira de Pesca e Desportos Subaquáticos" />
				</div>
				<div class="max-w-32 lg:max-w-48 xl:max-w-56">
					<img src="/CMAS.png" alt="Confederacao Mundial de Atividades Subaquáticas" />
				</div>
			</div>
		</div>
		<div>
			<img
				class="w-9/12 md:w-6/12 lg:w-9/12 rounded-lg mx-auto mt-4 lg:mt-0"
				src="/subimersa_1.jpeg"
				alt="instrutor de pesca subaquática Thiago Barbi dos Reis"
			/>
		</div>
	</div>
	<div>
		<h2 class="mb-4 mt-8 text-center">Durante minha trajetória, acumulei títulos importantes</h2>
		<div
			class="gap-16 items-center pb-8 pt-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-6"
		>
			<div>
				<img
					class="lg:w-9/12 rounded-lg ml-8 !mx-auto hidden lg:block"
					src="subimersa_trofeis.jpg"
					alt="instrutor de pesca subaquática Thiago Barbi dos Reis exibindo seu trofeu"
				/>
			</div>

			<div class="font-light text-gray-500 sm:text-lg ml-10">
				<ul class="list-disc mt-4 lg:mt-0">
					<li class="py-1">Terceiro colocado no Mundial de Clubes 2024</li>
					<li class="py-1">Melhor tempo de Apneia Estática: 5:49 min</li>
					<li class="py-1">Melhor tempo de Apneia Dinâmica: 3:40 min</li>
					<li class="py-1">Maior profundidade alcançada em apneia: 45 metros</li>
					<li class="py-1">Recorde pessoal: Peixe Caranha de 68 kg</li>
					<li class="py-1">Recorde Brasileiro: Peixe Pampo Sernambiguara de 22,8 kg</li>
					<li class="py-1">
						Recorde Catarinense: Peixe Pesca Amarela de 19 kg e Xaréu Branco de 15,6 kg
					</li>
				</ul>
				<blockquote class="mt-4 px-6">
					"Com essa vasta experiência, meu objetivo é continuar contribuindo para a comunidade de
					pesca subaquática e ajudar novos praticantes a descobrirem essa modalidade de maneira
					responsável e apaixonada."
				</blockquote>
				<cite
					><strong>Thiago Barbi dos Reis</strong> - Instrutor de pesca subaquática e fundador da Subimersa</cite
				>
			</div>
		</div>
		<div class="mb-8">
			<img
				class="w-9/12 md:w-6/12 lg:w-9/12 rounded-lg ml-8 !mx-auto lg:hidden"
				src="subimersa_trofeis.jpg"
				alt="instrutor de pesca subaquática Thiago Barbi dos Reis exibindo seu trofeu"
			/>
		</div>
	</div>
</section>
