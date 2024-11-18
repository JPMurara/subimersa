<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { openWhatsApp } from '../../utils/whatsappUtils';

	function handleClick() {
		openWhatsApp();
	}
</script>

<div class="bg-gray-50">
	<Accordion class="max-w-2xl lg:max-w-3xl mx-auto my-16 py-16">
		<h2 class="text-center mb-4">Perguntas Frequentes</h2>
		<AccordionItem>
			<span slot="header" class="text-2xl">O que é o pesca subaquática?</span>
			<div class="py-5 border-gray-200">
				<p class="mb-2 text-gray-500 !text-xl">
					A pesca subaquática é uma atividade esportiva que combina a prática de mergulho livre (em
					apneia) com a pesca esportiva mais seletiva e sustentável do planeta.
				</p>
				<p class="mb-2 text-gray-500">
					É uma experiência única que permite explorar o mundo subaquático e ter contato direto com
					a natureza, e animais incríveis que lá vivem.
				</p>
				<p class="mb-2 text-gray-500">
					Oferece desafios físicos e mentais, além de proporcionar momentos de grande satisfação e
					emoção.
				</p>
			</div>
		</AccordionItem>
		<AccordionItem class="mt-2">
			<span slot="header" class="text-2xl">Quais os benefícios da pesca subaquática?</span>
			<div class="py-5 border-gray-200">
				<p class="mb-2 text-gray-500">
					Benefícios físicos: Melhora da resistência física, força muscular, coordenação motora,
					flexibilidade, aumento da capacidade cárdio respiratória
				</p>
				<p class="text-gray-500">
					Benefícios mentais: Redução do estresse, aumento da concentração, da autoconfiança,
					relaxamento, paz de espírito e aumento capacidade de raciocínio.
				</p>
				<p class="text-gray-500">
					Conexão com a natureza: Possibilidade de explorar ambientes aquáticos, observar a vida
					marinha, conhecer ilhas rios e lagos inexplorados e ter uma experiência única com a
					natureza.
				</p>
				<p class="text-gray-500">
					Coleta do Próprio Alimento: além de ser uma incrível e prazerosa forma de pescar seu
					próprio peixe de maneira respeitosa e sustentável, proporcionando momentos especiais para
					você e sua família.
				</p>
			</div>
		</AccordionItem>
		<AccordionItem class="mt-2">
			<span slot="header" class="text-2xl"
				>Como posso me inscrever no curso de pesca subaquática?</span
			>
			<div class="py-5 border-gray-200">
				<p class="mb-2 text-gray-500">
					Entre em contato conosco através do nosso <button
						on:click={handleClick}
						class="text-lg font-bold"
						title="Contato via WhatsApp">WhatsApp clicando aqui</button
					>
				</p>
			</div>
		</AccordionItem>
	</Accordion>
</div>
