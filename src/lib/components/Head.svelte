<script>
	import constants from '$lib/constants.json';

	export let data;

	$: metaTitle = data.metaTitle;
	$: metaDescription = data.metaDescription;

	const siteName = constants.name_long;
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="x-ua-compatible" content="ie=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="preload" href="/bg-fundo-mar.jpeg" as="image" />
	<link rel="preload" href="/testimonials/testimonial_1.mp4" as="video" />
	<link rel="preload" href="/testimonials/testimonial_2.mp4" as="video" />
	<link rel="preload" href="/testimonials/testimonial_3.mp4" as="video" />
	<link rel="preload" href="/testimonials/testimonial_4.mp4" as="video" />
	<link rel="preload" href="/testimonials/testimonial_5.mp4" as="video" />

	<meta name="description" content={metaDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.subimersa.com.br" />

	<slot />
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content="https://www.subimersa.com.br/logo.jpg" />
	<meta property="og:image:alt" content="Subimersa - Curso de Pesca Submarina e Apneia" />
	<meta property="og:site_name" content={siteName} />
	<meta
		name="keywords"
		content="pesca subaquática, apneia, cursos de pesca, pesca submarina, treinamento em apneia"
	/>

	<script async type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "SportsActivityLocation",
			"name": "Subimersa Curso de Pesca Submarina",
			"logo": "https://www.subimersa.com.br/logo-removebg.png",
			"image": "https://www.subimersa.com.br/subimersa_20.jpeg",
			"url": "https://www.subimersa.com.br",
			"priceRange": "A partir de R$ 100",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Joinville",
				"addressRegion": "SC",
				"addressCountry": "BR"
			},
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "+55-47-99277-2800",
				"contactType": "Atendimento ao Cliente",
				"availableLanguage": ["Português"]
			},
			"telephone": "+55-47-99277-2800",
			"memberOf": [
				{
					"@type": "Organization",
					"name": "Confederação Brasileira de Pesca e Desportos Subaquáticos",
					"url": "https://www.cbpds.org.br"
				},
				{
					"@type": "Organization",
					"name": "Confederação Mundial de Atividades Subaquáticas",
					"url": "https://www.cmas.org"
				}
			],
			"sameAs": [
				"https://www.instagram.com/subimersa",
				"https://www.facebook.com/subimersa",
				"https://astrozdigital.hotmart.host/nova-pagina-3fbcbe41-c10f-47c2-8fee-de4303f77de5"
			],
			"description": "A Subimersa oferece cursos completos de pesca subaquática em apneia, ministrados por instrutores certificados com mais de 20 anos de experiência.",
			"makesOffer": [
				{
					"@type": "Course",
					"name": "Curso Completo de Pesca Subaquática em Apneia",
					"description": "Este curso oferece uma imersão completa no mundo da pesca subaquática, cobrindo desde a teoria até a prática em ambientes controlados e mar aberto.",
					"provider": {
						"@type": "Organization",
						"name": "Subimersa",
						"url": "https://www.subimersa.com.br/cursos"
					},
					"offers": {
						"@type": "Offer",
						"price": "100",
						"category": "Paid",
						"priceCurrency": "BRL",
						"availability": "http://schema.org/InStock",
						"validFrom": "2024-01-01"
					},
					"hasCourseInstance": [
						{
							"@type": "CourseInstance",
							"courseMode": "Online",
							"courseWorkload": "P20H",
							"courseSchedule": {
								"@type": "Schedule",
								"repeatCount": 10,
								"repeatFrequency": "P1W",
								"startDate": "2024-01-15",
								"endDate": "2025-12-15"
							},
							"instructor": {
								"@type": "Person",
								"name": "Thiago Barbi dos Reis"
							}
						}
					]
				},
				{
					"@type": "Course",
					"name": "Curso de Apneia - Surf e Atividades Subaquáticas",
					"description": "Focado em aprimorar a apneia para surfistas e entusiastas de atividades subaquáticas, este curso aborda técnicas de respiração e controle mental.",
					"provider": {
						"@type": "Organization",
						"name": "Subimersa",
						"url": "https://www.subimersa.com.br/cursos"
					},
					"offers": {
						"@type": "Offer",
						"price": "100",
						"category": "Paid",
						"priceCurrency": "BRL",
						"availability": "http://schema.org/InStock",
						"validFrom": "2024-01-01"
					},
					"hasCourseInstance": [
						{
							"@type": "CourseInstance",
							"courseMode": "Online",
							"courseWorkload": "P15H",
							"courseSchedule": {
								"@type": "Schedule",
								"repeatCount": 8,
								"repeatFrequency": "P2W",
								"startDate": "2024-02-01",
								"endDate": "2024-12-31"
							},
							"instructor": {
								"@type": "Person",
								"name": "Thiago Barbi dos Reis"
							}
						}
					]
				}
			]
		}
	</script>
</svelte:head>
