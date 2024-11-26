import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
import "../../../chunks/functions.js";
import { H as Head } from "../../../chunks/Head.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const meta = {
    metaTitle: " Termos e Condições | Subimersa",
    metaDescription: "Leia os Termos e Condições de uso do site e dos serviços da Subimersa. Entenda as regras e políticas que regem nossas operações e cursos."
  };
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title>`;
    }
  })} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="flex flex-col max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto rounded-xl m-6 py-6 bg-cover bg-center px-12" data-svelte-h="svelte-17ccl9j"><header><h1 class="!text-2xl">Termos e Condições de Uso</h1></header> <section><h2 class="!text-xl">1. Aceitação dos Termos</h2> <p class="!text-base">Ao acessar e usar este site, você aceita e concorda em estar vinculado pelos termos e
			condições estabelecidos neste documento. Se você não concordar com algum destes termos, não
			utilize este site.</p></section> <section><h2 class="!text-xl">2. Modificações dos Termos</h2> <p class="!text-base">Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão
			em vigor imediatamente após a publicação no site. Sua utilização contínua do site após
			quaisquer modificações constituirá seu consentimento em tais mudanças.</p></section> <section><h2 class="!text-xl">3. Descrição dos Serviços</h2> <p class="!text-base">Oferecemos cursos de pesca submarina e apneia que são detalhados nas respectivas páginas de
			cursos. Cada curso tem uma descrição específica, requisitos e preço que podem ser encontrados
			no site.</p></section> <section><h2 class="!text-xl">4. Política de Cancelamento e Reembolso</h2> <p class="!text-base">Os pedidos de cancelamento de curso devem ser feitos com pelo menos [X] dias de antecedência
			em relação à data de início do curso. Reembolsos serão processados conforme as condições
			detalhadas na política de reembolso.</p></section> <section><h2 class="!text-xl">5. Direitos de Propriedade Intelectual</h2> <p class="!text-base">Todo o conteúdo presente no site, incluindo textos, gráficos, logos e imagens, é propriedade
			da Subimersa e está protegido por leis de direitos autorais e marcas registradas.</p></section> <section><h2 class="!text-xl">6. Uso Aceitável</h2> <p class="!text-base">Você concorda em não usar o site de maneira que possa danificar, desabilitar ou prejudicar o
			site ou interferir no uso e aproveitamento do site por outros usuários.</p></section> <section><h2 class="!text-xl">7. Limitação de Responsabilidade</h2> <p class="!text-base">A Subimersa não será responsável por quaisquer danos diretos, indiretos, incidentais,
			especiais ou consequentes resultantes do uso ou da incapacidade de usar nosso site ou nossos
			serviços.</p></section> <section><h2 class="!text-xl">8. Legislação Aplicável</h2> <p class="!text-base">Estes termos serão regidos e interpretados de acordo com as leis federais e do Estado de Santa
			Catarina, sem considerar conflitos de disposições legais.</p></section> <section><h2 class="!text-xl">9. Contato</h2> <p class="!text-base">Para quaisquer questões ou esclarecimentos sobre estes termos, entre em contato conosco
			através da página de contato do site.</p></section> <footer><p class="!text-base">© 2024 Subimersa. Todos os direitos reservados.</p></footer></div>`;
});
export {
  Page as default
};
