import { c as create_ssr_component, e as escape, a as add_attribute } from "./ssr.js";
import { c as constants } from "./functions.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="sticky top-0 bg-cover" style="background-image: url('/bg-fundo-mar.jpeg'); background-position: center"><nav class="flex sm:flex-col xl:flex-row items-center justify-around py-2"><div class="mb-2 md:mb-0" data-svelte-h="svelte-1id4659"><a href="/" class="flex items-center gap-4 md:gap-8"><img src="/logo-removebg.png" alt="subimersa logo" class="sm:w-20 md:w-28 xl:w-36"> <p class="text-3xl font-semibold hidden lg:block"><span class="font-bold">Subimersa</span> | Curso de Pesca Submarina</p> <div class="flex flex-col items-center lg:hidden"><p class="text-3xl font-bold">Subimersa</p> <p class="text-xl font-semibold">Curso de Pesca Submarina</p></div></a></div> <div class="flex gap-8 mb-1 md:mb-0"><a href="/sobre" class="text-lg font-semibold" title="${"Sobre " + escape(constants.name_long, true)}" data-svelte-h="svelte-1982rs9">Sobre</a> <a href="/cursos" class="text-lg font-semibold" title="Nossos Cursos" data-svelte-h="svelte-1qldtvb">Cursos</a> <button class="text-lg font-semibold" title="Contato via WhatsApp" data-svelte-h="svelte-1mdh9o3">Contato</button> <a${add_attribute("href", constants.online_store, 0)} target="_blank" class="text-lg font-semibold" title="Conheça nossos Produtos" data-svelte-h="svelte-1293ss1">Loja Virtual</a></div></nav></header>`;
});
export {
  Navbar as N
};
