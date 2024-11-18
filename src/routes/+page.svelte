<script lang="ts">
	import { Hero, Services, About, Why, Faq, Cta, Testimonials, Head } from '$lib/components';

	const meta = {
		metaTitle: 'Subimersa | Curso de Pesca Submarina e Apneia',
		metaDescription:
			'A Subimersa oferece cursos completos de pesca submarina em apneia, ministrados por instrutores certificados. Transforme sua experiência na pesca subaquática com segurança e excelência.'
	};
</script>

<Head data={meta}><title>{meta.metaTitle}</title></Head>
<Hero />
<Services />
<About />
<Cta />
<Why />
<Faq />
<Cta />
<Testimonials />
