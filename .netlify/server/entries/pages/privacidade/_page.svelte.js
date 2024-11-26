import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
import "../../../chunks/functions.js";
import { H as Head } from "../../../chunks/Head.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const meta = {
    metaTitle: "Política de Privacidade | Subimersa",
    metaDescription: "Saiba como a Subimersa protege seus dados pessoais e garante a segurança das suas informações. Leia nossa Política de Privacidade para entender nossos compromissos com você."
  };
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title>`;
    }
  })} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="flex flex-col max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto rounded-xl m-6 py-6 bg-cover bg-center px-12" data-svelte-h="svelte-1h98clw"><header><h1 class="!text-2xl">Política de Privacidade e Segurança</h1></header> <section><h2 class="!text-xl">1. Introdução</h2> <p class="!text-base">A Subimersa valoriza a privacidade de nossos usuários e está comprometida em protegê-la. Esta
			política descreve as práticas de coleta, uso e proteção de informações pessoais que você
			fornece ao usar nosso site. Ao acessar ou usar nosso site, você concorda com os termos desta
			política.</p></section> <section><h2 class="!text-xl">2. Coleta de Informações</h2> <p class="!text-base">Coletamos informações que você nos fornece ao se registrar em um curso, preencher um
			formulário ou se comunicar conosco. As informações podem incluir, mas não se limitam a, seu
			nome, endereço de e-mail, número de telefone e detalhes de pagamento.</p></section> <section><h2 class="!text-xl">3. Uso de Informações</h2> <p class="!text-base">Usamos as informações coletadas para: Processar inscrições e pagamentos de cursos; Comunicar
			informações importantes relacionadas aos cursos; Melhorar nossos serviços e conteúdo do site;
			Cumprir obrigações legais ou regulamentares.</p></section> <section><h2 class="!text-xl">4. Compartilhamento de Informações</h2> <p class="!text-base">Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto
			conforme necessário para fornecer os serviços solicitados ou quando requerido por lei.</p></section> <section><h2 class="!text-xl">5. Segurança das Informações</h2> <p class="!text-base">Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas
			informações pessoais contra acesso, alteração, divulgação ou destruição não autorizados.
			Mantemos suas informações pessoais pelo tempo que for necessário para cumprir os propósitos
			descritos nesta política, a menos que um período de retenção mais longo seja exigido ou
			permitido por lei.</p></section> <section><h2 class="!text-xl">6. Acesso e Controle de suas Informações</h2> <p class="!text-base">Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que mantemos.
			Para exercer esses direitos, entre em contato conosco através das informações fornecidas na
			seção de contato do nosso site.</p></section> <section><h2 class="!text-xl">7. Alterações à Política de Privacidade</h2> <p class="!text-base">Podemos atualizar esta política de tempos em tempos. A versão mais recente será sempre
			publicada em nosso site. Encorajamos você a revisar periodicamente esta página para quaisquer
			mudanças.</p></section> <section><h2 class="!text-xl">8. Contato</h2> <p class="!text-base">Se você tiver dúvidas ou preocupações sobre nossa política de privacidade ou práticas de
			segurança, por favor entre em contato conosco através da nossa página de contato.</p></section> <footer><p class="!text-base">© 2024 Subimersa. Todos os direitos reservados.</p></footer></div>`;
});
export {
  Page as default
};
