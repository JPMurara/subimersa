import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { c as constants, I as Icon } from "../../chunks/Icon.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="sticky top-0" data-svelte-h="svelte-fnzpj6"><nav class="flex flex-col md:flex-row items-center justify-around py-2 bg-cover bg-center" style="background-image: url('/bg-fundo-mar.jpeg');"><div class="mb-2 md:mb-0"><a href="/" class="flex items-center gap-4 md:gap-8"><img src="/logo.jpg" alt="subimersa logo" class="w-24 rounded-full"> <h1 class="font-poetsen-one">SUBIMERSA Curso de Pesca Submarina</h1></a></div> <div class="flex gap-8 font-poetsen-one mb-1 md:mb-0"><a href="/sobre">Sobre</a> <a href="/cursos">Cursos</a> <a href="/contato">Contato</a> <a${add_attribute("href", constants.online_store, 0)}>Loja Virtual</a></div></nav></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex flex-col md:flex-row justify-around bg-gray-200 px-4 pb-10"><div class="my-4"> <div class="mb-4"><a href="/" class="flex items-center gap-4 md:gap-8"><img src="/logo-removebg.png" alt="subimersa logo" class="w-32 rounded-full hidden md:block"> <h1 class="font-poetsen-one">${escape(constants.name_long)}</h1></a></div>  <div class="max-w-sm"><div class="flex flex-col"><div class="my-1"><p class="font-semibold">Telefone: <a href="${"tel:" + escape(constants.telephone, true)}" title="ligue para subimersa">${escape(constants.telephone)}</a></p></div> <div class="my-1"><p class="font-semibold">Email: <a href="${"mailto:" + escape(constants.email, true)}">${escape(constants.email)}</a></p></div> <div class="my-1" data-svelte-h="svelte-epc3t7"><p class="font-semibold">Certificação: <a${add_attribute("href", constants.cmas, 0)} title="certificado cmas" target="_blank">CMAS reg. MPS/22/0015</a></p></div> <hr> <div class="flex items-center justify-evenly my-2"><div><a${add_attribute("href", constants.instagram, 0)} title="Subimersa Instagram" target="_blank">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:instagram", class: "text-6xl" }, {}, {})}</a></div> <div><a${add_attribute("href", constants.facebook, 0)} title="Subimersa Facebook" target="_blank">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ic:baseline-facebook",
      class: "text-6xl"
    },
    {},
    {}
  )}</a></div> <div data-svelte-h="svelte-1h14wxf"><a${add_attribute("href", constants.online_store, 0)} title="Imersa Store" target="_blank" class=""><img src="logo-imersa-store-removebg.png" alt="logo imersa loja" class="h-24"></a></div></div></div></div></div>  <div class="flex flex-col gap-8 font-poetsen-one justify-center" data-svelte-h="svelte-rnirwp"><a href="/sobre" title="Sobre">Sobre</a> <a href="/cursos" title="Cursos">Cursos</a> <a href="/contato" title="Contato">Contato</a> <a${add_attribute("href", constants.online_store, 0)} target="_blank" title="Imersa Store">Imersa Store</a> <a href="/termos-condicoes" title="Termos e Condicoes">Termos e Condicoes</a> <a href="/privacidade" title="Seguranca e Privacidade">Seguranca e Privacidade</a></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
