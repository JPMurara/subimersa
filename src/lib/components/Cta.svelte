<script>
	import { openWhatsApp } from '../../utils/whatsappUtils';

	function handleClick() {
		openWhatsApp();
	}
</script>

<div
	class="flex flex-col lg:max-w-4xl xl:max-w-7xl mx-auto rounded-xl m-6 py-6 bg-cover bg-center px-12"
	style="background-image: url('/bg-fundo-mar.jpeg');"
>
	<button
		on:click={handleClick}
		class="text-lg font-semiboldrounded-lg"
		title="Contato via WhatsApp"
	>
		<div class="w-full text-center">
			<h2 class="!text-2xl xl:!text-4xl py-6">Entre em contato conosco clicando aqui</h2>
			<p class="xl:!text-2xl font-semibold px-4 mb-6 text-white md:text-black">
				Descubra a emoção da pesca mais radical e sustentável conectando-se com a natureza
				subaquática de uma forma única
			</p>
		</div>
	</button>
</div>
