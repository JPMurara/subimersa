<script>
	import Icon from '@iconify/svelte';

	const services = [
		{
			title: 'Lorem ipsum dolor sit ame',
			subtitle: 'Curso de Pesca Sub',
			link: '/cursos'
		},
		{
			title: 'Atividades Subaquaticas',
			subtitle: 'Curso de Apneia para Surfistas',
			link: '/cursos'
		},
		{
			title: 'Lorem ipsum dolor sit ame',
			subtitle: 'Treinamento em Piscina',
			link: '/cursos'
		},
		{
			title: 'Lorem ipsum dolor sit ame',
			subtitle: 'Saidas para o mar',
			link: ''
		},
		{
			title: 'Loja Online',
			subtitle: 'Venda de Equipamentos',
			link: 'https://imersastore.lojazap.com/'
		}
	];
</script>

<section class="bg-white dark:bg-gray-900 px-12">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
			<div class="flex flex-col items-center justify-center">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
					Nossos Servicos
				</h2>
				<p class="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maxime iusto tenetur
					reiciendis, repellendus, obcaecati velit magni tempora exercitationem minima corrupti sunt
					laborum ab. Quaerat necessitatibus quo aliquid cumque unde!
				</p>
			</div>
			<div>
				{#each services as service}
					<a
						href={service.link}
						class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 shadow dark:bg-gray-800 dark:hover:bg-gray-700 border-blue-3 dark:border-primary-500 hover:bg-gray-50 max-w-md mx-auto"
					>
						<div>
							<span
								class="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
								>{service.title}</span
							>
							<span class="text-xl font-semibold text-primary-600 dark:text-primary-500"
								>{service.subtitle}</span
							>
						</div>
						<Icon icon="material-symbols:chevron-right" class="text-blue-3 text-5xl" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
