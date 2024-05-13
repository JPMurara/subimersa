<script>
	import constants from '$lib/constants.json';
	import Icon from '@iconify/svelte';
</script>

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
		<!-- Row -->
		<div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
			<img
				class="mb-4 lg:max-w-md 2xl:max-w-lg lg:mb-0 flex rounded-lg"
				src="subimersa_1.jpeg"
				alt="pescador com peixe"
			/>
			<div class="text-gray-500 sm:text-lg dark:text-gray-400">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
					Sobre a {constants.name_short}
				</h2>
				<p class="mb-8 font-light lg:text-xl">
					Aqui vai uma breve descricao sobre vc e a subimersa, bem resumida, ha uma pagina 'sobre'
					onde vc pode escrever em detalhes
				</p>
				<p class="mb-8 font-light lg:text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis blanditiis
					alias, quibusdam harum exercitationem sunt corrupti cumque dignissimos, et quaerat fugit
					quam maxime tempore sed officia? Magni, adipisci at.
				</p>
				<!-- List -->
				<ul role="list" class="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700">
					<li class="flex space-x-3">
						<!-- Icon -->
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600" />
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600" />
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<Icon icon="mdi:diving-scuba-flag" class="text-red-600" />
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit</span
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
