import { c as create_ssr_component, e as escape, a as add_attribute, d as each, v as validate_component, f as compute_rest_props, s as setContext, g as getContext, b as subscribe } from "../../chunks/ssr.js";
import "../../chunks/functions.js";
import { c as constants } from "../../chunks/constants.js";
import { I as Icon } from "../../chunks/Icon.js";
import { w as writable } from "../../chunks/index.js";
import { F as Frame, i as is_void } from "../../chunks/Frame.js";
import { twMerge } from "tailwind-merge";
import { C as Cta } from "../../chunks/Cta.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="bg-cover bg-center" style="background-image: url('/bg-fundo-mar.jpeg');"><header class=""><nav class="flex flex-col xl:flex-row items-center justify-around py-2"><div class="mb-2 md:mb-0" data-svelte-h="svelte-12862h4"><a href="/" class="flex items-center gap-4 md:gap-8"><img src="/logo-removebg.png" alt="subimersa logo" class="w-20 md:w-28 xl:w-36"> <p class="text-3xl font-semibold hidden lg:block"><span class="font-bold">Subimersa</span> | Curso de Pesca Submarina</p> <div class="flex flex-col items-center lg:hidden"><p class="text-3xl font-bold">Subimersa</p> <p class="text-xl font-semibold">Curso de Pesca Submarina</p></div></a></div> <div class="flex gap-8 mb-1 md:mb-0"><a href="/sobre" class="text-lg font-semibold" title="${"Sobre " + escape(constants.name_long, true)}" data-svelte-h="svelte-1982rs9">Sobre</a> <a href="/cursos" class="text-lg font-semibold" title="Nossos Cursos" data-svelte-h="svelte-1qldtvb">Cursos</a> <button class="text-lg font-semibold" title="Contato via WhatsApp" data-svelte-h="svelte-1g29qft">Contato</button> <a${add_attribute("href", constants.online_store, 0)} class="text-lg font-semibold" title="Conheça nossos Produtos" data-svelte-h="svelte-1e73qqw">Loja Virtual</a></div></nav></header> <section class="pt-10 md:pt-0"><div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"><div class="place-self-center text-center lg:text-left lg:col-span-7 lg:pl-4 pt-0 lg:-mt-20"><h1 class="max-w-2xl mb-8 !text-3xl lg:!text-4xl xl:!text-5xl" data-svelte-h="svelte-10olic9">Curso de Pesca Subaquática em Apneia</h1> <p class="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-10 !text-xl md:!text-3xl" data-svelte-h="svelte-1mqysck">Descubra a emoção da pesca mais radical e sustentável conectando-se com a natureza
					subaquática de uma forma única</p>  <div class="flex justify-center lg:justify-start gap-8 lg:gap-4"><a href="/cursos" title="Cursos" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-blue-1 focus:ring-4 focus:ring-gray-100 bg-blue-3" data-svelte-h="svelte-o3x1py">Cursos</a> <button title="Contato" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-blue-1 focus:ring-4 focus:ring-gray-100 bg-blue-3" data-svelte-h="svelte-hcbmxe">Contato</button></div>  <div class="flex justify-center items-center lg:justify-start gap-8 pt-8" data-svelte-h="svelte-1vrxsge"><div class="max-w-20 lg:max-w-28 xl:max-w-32"><img src="/CBPDS.gif" alt="Confederação Brasileira de Pesca e Desportos Subaquáticos"></div> <div class="max-w-32 lg:max-w-48 xl:max-w-56"><img src="/CMAS.png" alt="Confederacao Mundial de Atividades Subaquáticas"></div></div></div> <div class="place-self-center max-w-xs sm:max-w-sm lg:max-w-md 2xl:max-w-2xl my-10 lg:mt-0 lg:col-span-5" data-svelte-h="svelte-fudrcj"><img src="subimersa_20.jpeg" alt="pescador e sua garoupa" class="rounded-3xl lg:rounded-full"></div></div></section></div>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const services = [
    {
      subtitle: "Curso Completo de Pesca Sub",
      link: "/cursos"
    },
    {
      subtitle: "Curso Apneia - Surf e Atividades Subaquáticas",
      link: "/cursos"
    },
    {
      subtitle: "Curso Deep Master - Pesca Profunda",
      link: "/cursos"
    },
    {
      subtitle: "Curso - Preparacao Física e Mental",
      link: "/cursos"
    },
    {
      subtitle: "Curso - Equipamentos e Preparação",
      link: "/cursos"
    },
    {
      subtitle: "Venda de Equipamentos",
      link: "https://imersastore.lojazap.com/"
    },
    { subtitle: "Trips de Pesca", link: "" }
  ];
  return `<section class="bg-white px-12"><div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"><div class="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0"><div class="flex flex-col items-center justify-center" data-svelte-h="svelte-n2fkju"><h2 class="mb-4">Nossos Servicos</h2> <p class="mb-4 text-gray-500 sm:text-xl">Oferecemos uma ampla variedade de cursos e atividades voltados para o mundo da pesca
					subaquática e atividades relacionadas. Nossos treinamentos são desenvolvidos para garantir
					que você se sinta preparado e seguro, tanto em águas profundas quanto em atividades
					recreativas. Contamos com instrutores certificados e uma infraestrutura de qualidade, para
					que você tenha a melhor experiência possível. Explore nossas opções e descubra como
					podemos ajudar você a se tornar um especialista em pesca subaquática e apneia.</p></div> <div>${each(services, (service) => {
    return `<a${add_attribute("href", service.link, 0)} class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 shadow border-blue-3 hover:bg-gray-50 max-w-md mx-auto transform transition-transform duration-300 hover:scale-105"><div><span class="text-xl font-semibold text-primary-600">${escape(service.subtitle)}</span></div> ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "material-symbols:chevron-right",
        class: "text-blue-3 text-5xl"
      },
      {},
      {}
    )} </a>`;
  })}</div></div></div></section>`;
});
const Why = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"><div data-svelte-h="svelte-1thgyhz"><h2 class="mb-4">Porque Contratar Nossos Servicos</h2> <p class="mb-4 font-semibold">Nossos cursos de pesca subaquática e apneia são ideais para todos os níveis, combinando
				teoria e prática, e proporcionando o conhecimento e a confiança para se destacar na água.</p> <p class="mb-4 font-semibold">Além dos aspectos técnicos, você aprenderá práticas de segurança e métodos de pesca
				sustentável, sempre com uma abordagem prática que garante uma experiência segura e
				responsável.</p></div> <div class="grid grid-cols-1 gap-4 mt-8"><ul class="pt-8 my-7 space-y-5"><div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-1erdodx"><span class="text-base font-semibold leading-tight">Mais de 20 anos de experiência em pesca subaquática e apneia.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-hqq6r3"><span class="text-base font-semibold leading-tight">Certificação pela CMAS, uma organização mundialmente reconhecida em atividades
							subaquáticas.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-v59102"><span class="text-base font-semibold leading-tight">Treinamento individualizado em ambientes controlados e em mar aberto.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-1bd9i39"><span class="text-base font-semibold leading-tight">Aprenda métodos de pesca sustentável e ética no esporte.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-d99k2e"><span class="text-base font-semibold leading-tight">Curso completo que abrange desde a teoria até a prática em mar aberto.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-3ljqtj"><span class="text-base font-semibold leading-tight">Aulas focadas no aprimoramento da apneia estática e dinâmica.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-uozsa5"><span class="text-base font-semibold leading-tight">Suporte completo em técnicas de resgate e segurança.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-n8vac5"><span class="text-base font-semibold leading-tight">Instrutor com recordes nacionais e internacionais.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-106itpi"><span class="text-base font-semibold leading-tight">Acompanhamento personalizado para cada aluno.</span></li></div> <div class="flex"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "typcn:tick",
      class: "bg-blue-3 rounded-lg text-white"
    },
    {},
    {}
  )}</div> <li class="flex space-x-3 mx-2" data-svelte-h="svelte-rfqxvs"><span class="text-base font-semibold leading-tight">Garantia de aprendizado seguro e eficaz para todos os níveis de habilidade.</span></li></div></ul></div></div></section>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-gray-50"><div class="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6"> <div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16"><img class="my-16 lg:max-w-md 2xl:max-w-lg lg:mb-0 hidden lg:flex rounded-lg" src="subimersa_1.jpeg" alt="instrutor Thiago Barbi dos Reis no barco com seu peixe"> <div class="text-gray-500 sm:text-lg"><h2 class="my-4 text-center" data-svelte-h="svelte-s6c60k">Sobre a Subimersa</h2> <div class="flex justify-center" data-svelte-h="svelte-15xopoa"><img class="lg:hidden my-6 max-w-xs rounded-lg" src="subimersa_1.jpeg" alt="instrutor Thiago Barbi dos Reis no barco com seu peixe"></div> <p class="mb-8 !text-xl" data-svelte-h="svelte-zgqmm8">Thiago Barbi dos Reis, fundador da Subimersa, possui mais de 20 anos de experiência em
					Pesca Subaquática em Apneia. Instrutor certificado pela CMAS, já formou mais de 500 alunos
					nos últimos 4 anos, comprometido em transmitir seus conhecimentos e garantir a segurança
					de seus alunos</p>  <ul role="list" class="pt-8 my-7 space-y-5 border-t border-gray-300 flex flex-col"><li class="flex space-x-3">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:diving-scuba-flag",
      class: "text-red-600 hidden md:block"
    },
    {},
    {}
  )} <p class="text-base font-medium leading-tight text-gray-900" data-svelte-h="svelte-18pa8nt">Terceiro colocado no Mundial de Clubes 2024</p></li> <li class="flex space-x-3">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:diving-scuba-flag",
      class: "text-red-600 hidden md:block"
    },
    {},
    {}
  )} <p class="text-base font-medium leading-tight text-gray-900" data-svelte-h="svelte-1xyo1cg">Recorde Brasileiro: Peixe Pampo Sernambiguara de 22,8 kg</p></li> <li class="flex space-x-3">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:diving-scuba-flag",
      class: "text-red-600 hidden md:block"
    },
    {},
    {}
  )} <p class="text-base font-medium leading-tight text-gray-900" data-svelte-h="svelte-ez7it4">Recorde Catarinense: Peixe Pesca Amarela de 19 kg e Xaréu Branco de 15,6 kg</p></li> <li class="flex space-x-3">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:diving-scuba-flag",
      class: "text-red-600 hidden md:block"
    },
    {},
    {}
  )} <p class="text-base font-medium leading-tight text-gray-900" data-svelte-h="svelte-1mm80p7">Recorde pessoal: Peixe Caranha de 68 kg</p></li></ul></div></div></div></section>`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass"]);
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClass = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  frameClass = twMerge(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: frameClass }, { color: "none" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentClass;
  let $$unsubscribe_selected;
  let { tag = "h2" } = $$props;
  let { open = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { inactiveClass = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { paddingFlush = "py-5" } = $$props;
  let { paddingDefault = "p-5" } = $$props;
  let { textFlushOpen = "text-gray-900 dark:text-white" } = $$props;
  let { textFlushDefault = "text-gray-500 dark:text-gray-400" } = $$props;
  let { borderClass = "border-s border-e group-first:border-t" } = $$props;
  let { borderOpenClass = "border-s border-e" } = $$props;
  let { borderBottomClass = "border-b" } = $$props;
  let { borderSharedClass = "border-gray-200 dark:border-gray-700" } = $$props;
  let { classActive = void 0 } = $$props;
  let { classInactive = void 0 } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.paddingFlush === void 0 && $$bindings.paddingFlush && paddingFlush !== void 0)
    $$bindings.paddingFlush(paddingFlush);
  if ($$props.paddingDefault === void 0 && $$bindings.paddingDefault && paddingDefault !== void 0)
    $$bindings.paddingDefault(paddingDefault);
  if ($$props.textFlushOpen === void 0 && $$bindings.textFlushOpen && textFlushOpen !== void 0)
    $$bindings.textFlushOpen(textFlushOpen);
  if ($$props.textFlushDefault === void 0 && $$bindings.textFlushDefault && textFlushDefault !== void 0)
    $$bindings.textFlushDefault(textFlushDefault);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.borderOpenClass === void 0 && $$bindings.borderOpenClass && borderOpenClass !== void 0)
    $$bindings.borderOpenClass(borderOpenClass);
  if ($$props.borderBottomClass === void 0 && $$bindings.borderBottomClass && borderBottomClass !== void 0)
    $$bindings.borderBottomClass(borderBottomClass);
  if ($$props.borderSharedClass === void 0 && $$bindings.borderSharedClass && borderSharedClass !== void 0)
    $$bindings.borderSharedClass(borderSharedClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0)
    $$bindings.classActive(classActive);
  if ($$props.classInactive === void 0 && $$bindings.classInactive && classInactive !== void 0)
    $$bindings.classInactive(classInactive);
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  $$unsubscribe_selected();
  return `${((tag$1) => {
    return tag$1 ? `<${tag} class="group">${is_void(tag$1) ? "" : `<button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``} ${open ? `${slots.arrowup ? slots.arrowup({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg> `}` : `${slots.arrowdown ? slots.arrowdown({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg> `}`}</button>`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} ${open ? `<div><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``} `;
});
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      class: "max-w-2xl lg:max-w-3xl mx-auto my-16"
    },
    {},
    {
      default: () => {
        return `<h2 class="text-center mb-4" data-svelte-h="svelte-93appb">Perguntas Frequentes</h2> ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          header: () => {
            return `<span slot="header" class="text-2xl" data-svelte-h="svelte-1i8vrnt">O que é o pesca subaquática?</span>`;
          },
          default: () => {
            return `<div class="py-5 border-gray-200" data-svelte-h="svelte-1day2b7"><p class="mb-2 text-gray-500 !text-xl">A pesca subaquática é uma atividade esportiva que combina a prática de mergulho livre (em
				apneia) com a pesca esportiva mais seletiva e sustentável do planeta.</p> <p class="mb-2 text-gray-500">É uma experiência única que permite explorar o mundo subaquático e ter contato direto com a
				natureza, e animais incríveis que lá vivem.</p> <p class="mb-2 text-gray-500">Oferece desafios físicos e mentais, além de proporcionar momentos de grande satisfação e
				emoção.</p></div>`;
          }
        })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "mt-2" }, {}, {
          header: () => {
            return `<span slot="header" class="text-2xl" data-svelte-h="svelte-14nibrm">Quais os benefícios da pesca subaquática?</span>`;
          },
          default: () => {
            return `<div class="py-5 border-gray-200" data-svelte-h="svelte-sluspu"><p class="mb-2 text-gray-500">Benefícios físicos: Melhora da resistência física, força muscular, coordenação motora,
				flexibilidade, aumento da capacidade cárdio respiratória</p> <p class="text-gray-500">Benefícios mentais: Redução do estresse, aumento da concentração, da autoconfiança,
				relaxamento, paz de espírito e aumento capacidade de raciocínio.</p> <p class="text-gray-500">Conexão com a natureza: Possibilidade de explorar ambientes aquáticos, observar a vida
				marinha, conhecer ilhas rios e lagos inexplorados e ter uma experiência única com a
				natureza.</p> <p class="text-gray-500">Coleta do Próprio Alimento: além de ser uma incrível e prazerosa forma de pescar seu próprio
				peixe de maneira respeitosa e sustentável, proporcionando momentos especiais para você e sua
				família.</p></div>`;
          }
        })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "mt-2" }, {}, {
          header: () => {
            return `<span slot="header" class="text-2xl" data-svelte-h="svelte-y1c295">Como posso me inscrever no curso de pesca subaquática?</span>`;
          },
          default: () => {
            return `<div class="py-5 border-gray-200"><p class="mb-2 text-gray-500">Entre em contato conosco através do nosso <button class="text-lg font-bold" title="Contato via WhatsApp" data-svelte-h="svelte-1a8pl6u">WhatsApp clicando aqui</button></p></div>`;
          }
        })}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})} ${validate_component(Why, "Why").$$render($$result, {}, {}, {})} ${validate_component(Faq, "Faq").$$render($$result, {}, {}, {})} ${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
