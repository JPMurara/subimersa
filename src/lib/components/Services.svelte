<script>
	import Icon from '@iconify/svelte';

	// services data
	const services = [
		{
			subtitle: 'Curso Completo de Pesca Sub',
			link: '/cursos'
		},
		{
			subtitle: 'Curso Apneia - Surf e Atividades Subaquáticas',
			link: '/cursos'
		},
		{
			subtitle: 'Curso Deep Master - Pesca Profunda',
			link: '/cursos'
		},
		{
			subtitle: 'Curso - Preparacao Física e Mental',
			link: '/cursos'
		},
		{
			subtitle: 'Curso - Equipamentos e Preparação',
			link: '/cursos'
		},
		{
			subtitle: 'Venda de Equipamentos',
			link: 'https://imersastore.lojazap.com/'
		},
		{
			subtitle: 'Trips de Pesca',
			link: '/contato'
		}
	];
</script>

<section class="bg-white px-12">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
			<div class="flex flex-col items-center justify-center">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Nossos Servicos</h2>
				<p class="mb-4 text-gray-500 sm:text-xl">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maxime iusto tenetur
					reiciendis, repellendus, obcaecati velit magni tempora exercitationem minima corrupti sunt
					laborum ab. Quaerat necessitatibus quo aliquid cumque unde!
				</p>
			</div>
			<div>
				{#each services as service}
					<a
						href={service.link}
						class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 shadow border-blue-3 hover:bg-gray-50 max-w-md mx-auto"
					>
						<div>
							<span class="text-xl font-semibold text-primary-600">{service.subtitle}</span>
						</div>
						<Icon icon="material-symbols:chevron-right" class="text-blue-3 text-5xl" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
