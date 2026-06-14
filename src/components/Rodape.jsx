import BotaoWhatsApp from './BotaoWhatsApp.jsx'
import { mensagemGeral } from '../lib/whatsapp.js'

export default function Rodape() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t-4 border-terracota bg-linho">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-tinta">Vamos conversar</h2>
            <p className="mt-3 max-w-md text-lg text-tinta-suave">
              Encontre lojas, fábricas e bancas pessoalmente em Ibitinga ou fale com o Turismo local pelo WhatsApp.
            </p>

            <dl className="mt-6 space-y-3 text-tinta-suave">
              <div>
                <dt className="font-bold text-tinta">Feirinha</dt>
                <dd>Praça da Matriz · Centro - Ibitinga-SP</dd>
              </div>
              <div>
                <dt className="font-bold text-tinta">Funcionamento</dt>
                <dd>Sábados pela manhã, com bancas de artesanato e bordados</dd>
              </div>
            </dl>

            <BotaoWhatsApp
              numero="5516982220435"
              mensagem={mensagemGeral()}
              rotulo="Falar a gente pelo WhatsApp"
              className="mt-6"
            >
              Falar com a Gente
            </BotaoWhatsApp>
          </div>

          <div className="rounded-2xl bg-papel p-6 text-sm leading-relaxed text-tinta-suave shadow-carta sm:p-8">
            <p className="font-display text-lg font-bold text-tinta">Projeto de extensão universitária</p>
            <p className="mt-3">
              Atividade Extensionista II - Tecnologia Aplicada à Inclusão Digital
              <br />
              CST em Análise e Desenvolvimento de Sistemas
              <br />
              Centro Universitário Internacional UNINTER - Escola Superior Politécnica
            </p>
            <p className="mt-4">
              <span className="font-bold text-tinta">Autores</span>
              <br />
              Mateus Galacini Spinelli - RU 4119307
              <br />
              Pedro Henrique Bonini Pizzi - RU 4119344
            </p>
            <p className="mt-4 border-t border-tinta/10 pt-4 text-xs text-tinta-suave/80">
              Catálogo acadêmico com curadoria de informações públicas. Sites, contatos, endereços e imagens foram usados a partir de canais oficiais, guias comerciais e perfis públicos indicados nas próprias páginas das empresas.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-tinta-suave">
          © 2026 Ibitinga Ponto a Ponto · Feito ponto a ponto, com linha e código.
        </p>
      </div>
    </footer>
  )
}
