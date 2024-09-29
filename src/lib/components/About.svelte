<script>
	import constants from '$lib/constants.json';
	import Icon from '@iconify/svelte';
</script>

<section class="bg-blue-6">
	<div class="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
		<!-- Row -->
		<div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
			<img
				class="my-16 lg:max-w-md 2xl:max-w-lg lg:mb-0 hidden lg:flex rounded-lg"
				src="subimersa_1.jpeg"
				alt="pescador no barco com seu peixe"
			/>
			<div class="text-gray-500 sm:text-lg">
				<h2 class="my-4 text-center">
					Sobre a {constants.name_short}
				</h2>
				<div class="flex justify-center">
					<img
						class="lg:hidden my-6 max-w-xs sm:max-w-sm lg:max-w-md 2xl:max-w-lg lg:mb-0 rounded-lg"
						src="subimersa_1.jpeg"
						alt="pescador no barco com seu peixe"
					/>
				</div>
				<p class="mb-8">
					Aqui vai uma breve descricao sobre vc e a subimersa, bem resumida, ha uma pagina 'sobre'
					onde voce pode escrever em detalhes.
				</p>
				<p class="mb-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis blanditiis
					alias, quibusdam harum exercitationem sunt corrupti cumque dignissimos, et quaerat fugit
					quam maxime tempore sed officia? Magni, adipisci at.
				</p>
				<!-- List -->
				<ul
					role="list"
					class="pt-8 my-7 space-y-5 border-t border-gray-300 flex flex-col items-center"
				>
					<li class="flex space-x-3">
						<!-- Icon -->
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600" />
						<span class="text-base font-medium leading-tight text-gray-900"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600" />
						<span class="text-base font-medium leading-tight text-gray-900"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600" />
						<span class="text-base font-medium leading-tight text-gray-900"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit</span
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
