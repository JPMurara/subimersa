import { c as create_ssr_component } from "./ssr.js";
const Cta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col lg:max-w-4xl xl:max-w-7xl mx-auto rounded-xl m-6 py-6 bg-cover bg-center px-12" style="background-image: url('/bg-fundo-mar.jpeg');"><button class="text-lg font-semiboldrounded-lg" title="Contato via WhatsApp" data-svelte-h="svelte-6nnv9z"><div class="w-full text-center"><h2 class="!text-2xl xl:!text-4xl py-6">Entre em contato conosco clicando aqui</h2> <p class="xl:!text-2xl font-semibold px-4 mb-6 text-white md:text-black">Descubra a emoção da pesca mais radical e sustentável conectando-se com a natureza
				subaquática de uma forma única</p></div></button></div>`;
});
export {
  Cta as C
};
