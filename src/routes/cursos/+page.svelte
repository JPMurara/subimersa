<script>
	import { Button, Modal } from 'flowbite-svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	let firstModal = false;
	let secondModal = false;
	let thirdModal = false;
</script>

<Navbar />
<section class="">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<h1 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">
				Nossos Cursos
			</h1>
		</div>
	</div>
</section>
<section class="bg-white">
	<div
		class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
	>
		<div class="font-light text-gray-500 sm:text-lg">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
				Curso Completo de Pesca Subaquática em Apneia
			</h2>
			<p class="mb-4">
				Este curso oferece uma imersão completa no mundo da pesca subaquática, cobrindo desde a
				teoria até a prática em ambientes controlados e mar aberto. Na parte teórica, os alunos
				aprenderão sobre a história da pesca sub, a legislação e as licenças necessárias, além da
				ética e sustentabilidade no esporte. O curso inclui técnicas de apneia, como o controle do
				reflexo de imersão, exercícios psicológicos, estratégias de pesca e uma análise detalhada
				sobre o comportamento dos peixes. Também exploramos a fisiologia dos peixes, técnicas de
				caça subaquática e a física dos movimentos necessários para uma pesca eficiente. A teoria é
				complementada com o aprendizado sobre como ler o mar, marés, correntes e a influência de
				fatores naturais como a lua, vento e temperatura.
			</p>
			<Button on:click={() => (firstModal = true)} class="text-black">Saiba mais...</Button>
			<Modal
				title="Na primeira etapa do curso, sao explorados:"
				bind:open={firstModal}
				outsideclose
			>
				<ul class="pl-4">
					<li>História de Pesca Sub</li>
					<li>Legislação e licenças</li>
					<li>Ética e Sustentabilidade do Esporte</li>
					<li>Desafios</li>
					<li>Fisiológica da Apneia</li>
					<li>Técnicas Respiratórias</li>
					<li>Técnicas Psicológica da apneia</li>
					<li>Aprendendo a ativar o reflexo de Imersão (sistema Parassimpático)</li>
					<li>Controle do Reflexo de conservação (bloqueando o sistema Simpático)</li>
					<li>Exercícios mentais e psicológicos para apneia</li>
					<li>Tipos de Compensação</li>
					<li>Diferença de ambiente Terra/Água e como usar a nosso favor</li>
					<li>Técnicas de Pesca de Toca</li>
					<li>Técnica de pesca de Caída ou Profundidade</li>
					<li>Técnica de Pesca de Espera</li>
					<li>Técnica de Pesca Espuma</li>
					<li>Ativando o instinto de caçador (os detalhes que fazem toda a diferença)</li>
					<li>Física dos movimentos</li>
					<li>
						Aprendendo a fazer as leituras do mar (Correntes, Marés, Luas, vento, temperatura e
						pressão ATM)
					</li>
					<li>Estratégia de pesca e como montá-la</li>
					<li>Sons que atraem e sons que afastam os peixes</li>
					<li>Cores que atraem e cores que afastam os peixes</li>
					<li>Equipamentos e técnicas, quais usá-los e como usá-los</li>
					<li>Fisiologia dos peixes (entendendo o comportamento)</li>
					<li>Técnicas de como atrair e pescar os principais peixes esportivos</li>
					<li>Segurança / Riscos</li>
					<li>Pontos de pesca</li>
					<li>Navegação e segurança</li>
					<li>Tecnologia a nosso favor</li>
				</ul>
			</Modal>
		</div>
		<div>
			<img class="w-full rounded-lg" src="https://placehold.co/600x400" alt="office content 1" />
		</div>
	</div>
	<div
		class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
	>
		<div>
			<img class="w-full rounded-lg" src="https://placehold.co/600x400" alt="office content 1" />
		</div>
		<div class="font-light text-gray-500 sm:text-lg">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
				Prática em Piscina e no Seco
			</h2>
			<p class="mb-4">
				A parte prática do curso em piscina e em ambiente seco é focada em aprimorar a apneia, tanto
				estática quanto dinâmica. O aluno irá treinar movimentos específicos da pesca subaquática,
				técnicas de respiração, aquecimento dos músculos respiratórios e exercícios de alongamento.
				Além disso, são abordadas práticas essenciais de segurança, como salvamento e resgate, além
				do manuseio correto dos equipamentos. A prática em piscina permite a aplicação dos conceitos
				aprendidos na teoria, com exercícios que ajudam a melhorar o desempenho tanto dentro quanto
				fora da água. O foco está em desenvolver a resistência física e mental necessária para a
				pesca subaquática.
			</p>
			<Button on:click={() => (secondModal = true)} class="text-black">Saiba mais...</Button>
			<Modal title="Prática em piscina e no seco:" bind:open={secondModal} outsideclose>
				<ul class="pl-4">
					<li>Apneia Estática</li>
					<li>Apneia Dinâmica</li>
					<li>Física dos movimentos de pesca sub</li>
					<li>Exercícios para melhorar a apneia dentro da água</li>
					<li>Exercícios para melhorar a apneia no seco</li>
					<li>Alongamentos importantes</li>
					<li>Aquecimento dos músculos respiratórios</li>
					<li>Salvamento e Resgate</li>
					<li>Manuseio dos equipamentos com segurança</li>
					<li>Exercícios mentais e psicológicos para apneia</li>
					<li>Exercícios de equalização</li>
				</ul>
			</Modal>
		</div>
	</div>
	<div
		class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
	>
		<div class="font-light text-gray-500 sm:text-lg">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
				Prática em Mar Aberto
			</h2>
			<p class="mb-4">
				Na fase final do curso, os alunos terão a oportunidade de colocar em prática todos os
				ensinamentos em mar aberto, sempre com acompanhamento individualizado. Aqui, as técnicas de
				pesca são aplicadas em cenários reais, onde os alunos irão corrigir movimentos, explorar
				pontos de pesca em ilhas oceânicas e vivenciar a experiência da pesca em profundidade. Essa
				prática em mar aberto é essencial para consolidar as habilidades aprendidas e preparar o
				aluno para a pesca subaquática em diferentes condições e ambientes, garantindo uma
				experiência completa e segura.
			</p>
			<Button on:click={() => (thirdModal = true)} class="text-black">Saiba mais...</Button>
			<Modal title="Prática em mar aberto:" bind:open={thirdModal} outsideclose>
				<ul class="pl-4">
					<li>Acompanhamento individual por aluno</li>
					<li>Aplicação das técnicas de pesca</li>
					<li>Correção dos movimentos</li>
					<li>Exploração de pontos de pesca em ilhas oceânicas</li>
					<li>Experiência em pesca de profundidade</li>
				</ul>
			</Modal>
		</div>
		<div>
			<img class="w-full rounded-lg" src="https://placehold.co/600x400" alt="office content 1" />
		</div>
	</div>
</section>
