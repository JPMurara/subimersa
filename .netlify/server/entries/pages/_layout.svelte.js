import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
import { c as constants } from "../../chunks/constants.js";
import "../../chunks/functions.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex flex-col md:flex-row justify-around bg-gray-200 px-4 pb-10"><div class="my-4"> <div class="mb-4"><a href="/" class="flex items-center gap-4 md:gap-8"><img src="/logo-removebg.png" alt="subimersa logo" class="w-32 rounded-full hidden md:block"> <h2 class="!text-3xl !font-semibold">${escape(constants.name_long)}</h2></a></div>  <div class="max-w-sm"><div class="flex flex-col"><div class="my-1"><button title="Contato via WhatsApp" class="font-semibold tracking-tight lg:text-xl flex items-center">Contato via WhatsApp
						${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "logos:whatsapp-icon",
      class: "text-2xl ml-2"
    },
    {},
    {}
  )}</button></div> <div class="my-1"><p class="font-semibold">Email: <a href="${"mailto:" + escape(constants.email, true)}">${escape(constants.email)}</a></p></div> <div class="my-1" data-svelte-h="svelte-epc3t7"><p class="font-semibold">Certificação: <a${add_attribute("href", constants.cmas, 0)} title="certificado cmas" target="_blank">CMAS reg. MPS/22/0015</a></p></div> <hr> <div class="flex items-center justify-evenly my-2"><div><a${add_attribute("href", constants.instagram, 0)} title="Subimersa Instagram" target="_blank">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:instagram", class: "text-6xl" }, {}, {})}</a></div> <div><a${add_attribute("href", constants.facebook, 0)} title="Subimersa Facebook" target="_blank">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ic:baseline-facebook",
      class: "text-6xl"
    },
    {},
    {}
  )}</a></div> <div data-svelte-h="svelte-1h14wxf"><a${add_attribute("href", constants.online_store, 0)} title="Imersa Store" target="_blank" class=""><img src="logo-imersa-store-removebg.png" alt="logo imersa loja" class="h-24"></a></div></div></div></div></div>  <div class="flex flex-col gap-8 justify-center font-semibold"><a href="/sobre" title="${"Sobre " + escape(constants.name_short, true)}" data-svelte-h="svelte-4uhheo">Sobre</a> <a href="/cursos" title="Nossos Cursos" data-svelte-h="svelte-ycgh7y">Cursos</a> <button title="Contato via WhatsApp" class="text-left" data-svelte-h="svelte-g9sbmn">Contato</button> <a${add_attribute("href", constants.online_store, 0)} target="_blank" title="Conheça nossos Produtos" data-svelte-h="svelte-qgk3py">Imersa Store</a> <a href="/termos-condicoes" title="Termos e Condicoes" data-svelte-h="svelte-1dotw2c">Termos e Condicoes</a> <a href="/privacidade" title="Seguranca e Privacidade" data-svelte-h="svelte-svkef4">Seguranca e Privacidade</a></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
