<script>
	import Icon from '@iconify/svelte';
</script>

<section class="bg-gray-50">
	<div class="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
		<!-- Row -->
		<div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
			<img
				class="my-16 lg:max-w-md 2xl:max-w-lg lg:mb-0 hidden lg:flex rounded-lg"
				src="subimersa_1.jpeg"
				alt="instrutor Thiago Barbi dos Reis no barco com seu peixe"
			/>
			<div class="text-gray-500 sm:text-lg">
				<h2 class="my-4 text-center">Sobre a Subimersa</h2>
				<div class="flex justify-center">
					<img
						class="lg:hidden my-6 max-w-xs rounded-lg"
						src="subimersa_1.jpeg"
						alt="instrutor Thiago Barbi dos Reis no barco com seu peixe"
					/>
				</div>
				<p class="mb-8 !text-xl">
					Thiago Barbi dos Reis, fundador da Subimersa, possui mais de 20 anos de experiência em
					Pesca Subaquática em Apneia. Instrutor certificado pela CMAS, já formou mais de 500 alunos
					nos últimos 4 anos, comprometido em transmitir seus conhecimentos e garantir a segurança
					de seus alunos
				</p>
				<!-- List -->
				<ul role="list" class="pt-8 my-7 space-y-5 border-t border-gray-300 flex flex-col">
					<li class="flex space-x-3">
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600 hidden md:block" />
						<p class="text-base font-medium leading-tight text-gray-900">
							Terceiro colocado no Mundial de Clubes 2024
						</p>
					</li>
					<li class="flex space-x-3">
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600 hidden md:block" />
						<p class="text-base font-medium leading-tight text-gray-900">
							Recorde Brasileiro: Peixe Pampo Sernambiguara de 22,8 kg
						</p>
					</li>
					<li class="flex space-x-3">
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600 hidden md:block" />
						<p class="text-base font-medium leading-tight text-gray-900">
							Recorde Catarinense: Peixe Pesca Amarela de 19 kg e Xaréu Branco de 15,6 kg
						</p>
					</li>
					<li class="flex space-x-3">
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600 hidden md:block" />
						<p class="text-base font-medium leading-tight text-gray-900">
							Recorde pessoal: Peixe Caranha de 68 kg
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
