import { useState } from 'react'
import { IconeBusca, IconeFechar, IconeMenu } from './Icones.jsx'

const LINKS = [
  { href: '#catalogo', texto: 'Catálogo' },
  { href: '#lojas', texto: 'Empresas' },
  { href: '#eventos', texto: 'Eventos' },
  { href: '#turismo', texto: 'Turismo' },
  { href: '#projeto', texto: 'O projeto' },
]

const marcaBanner = './imagens/marca/ibitinga-ponto-a-ponto-banner.jpg'
const marcaSimbolo = './imagens/marca/ibitinga-ponto-a-ponto-simbolo.jpg'

function Marca() {
  return (
    <a href="#topo" className="group flex min-w-0 items-center" aria-label="Ibitinga Ponto a Ponto - início">
      <img
        src={marcaBanner}
        alt="Ibitinga Ponto a Ponto - Capital do Bordado"
        className="hidden h-auto w-[300px] max-w-[34vw] object-contain mix-blend-multiply lg:block xl:w-[360px]"
        decoding="async"
      />

      <span className="flex min-w-0 items-center gap-3 lg:hidden">
        <img
          src={marcaSimbolo}
          alt=""
          className="h-14 w-14 shrink-0 rounded-full object-cover object-center"
          decoding="async"
        />
        <span className="min-w-0 leading-none">
          <span className="hidden text-[9px] font-bold uppercase tracking-[0.2em] text-terracota sm:block">
            Capital do Bordado
          </span>
          <span className="block whitespace-nowrap font-display text-lg font-bold text-tinta sm:text-xl">
            Ibitinga <span className="text-terracota">Ponto a Ponto</span>
          </span>
        </span>
      </span>
    </a>
  )
}

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="sticky top-0 z-40">
      <div className="bg-marinho px-4 py-1.5 text-center text-[11px] font-medium text-white/70 sm:text-xs">
        Vitrine com lojas, fábricas, eventos e contatos reais de Ibitinga ·{' '}
        <strong className="font-bold text-ouro">fontes públicas verificadas</strong>
      </div>

      <header className="border-b border-[#d8c8b6] bg-[#f4ecdf]/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6" aria-label="Navegação principal">
          <Marca />

          <a
            href="#catalogo"
            className="hidden max-w-[220px] flex-1 items-center gap-3 rounded-lg border border-[#d8c8b6] bg-white/70 px-4 py-2 text-sm font-semibold text-gray-600 transition-all hover:border-ouro/50 hover:text-marinho lg:flex"
          >
            <IconeBusca className="h-5 w-5 text-gray-400" />
            <span className="whitespace-nowrap">Buscar no catálogo</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-lg px-3 text-sm font-bold text-gray-600 transition-colors hover:bg-white/60 hover:text-marinho"
                >
                  {l.texto}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="ml-2 inline-flex h-10 items-center rounded-lg bg-terracota px-5 text-sm font-bold text-white transition-colors hover:bg-[#a44a33]"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-tinta hover:bg-white/60 md:hidden"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          >
            {aberto ? <IconeFechar /> : <IconeMenu />}
          </button>
        </nav>

        {aberto && (
          <ul id="menu-mobile" className="border-t border-[#d8c8b6] bg-[#f4ecdf] px-4 pb-4 md:hidden">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="flex min-h-[48px] items-center border-b border-tinta/5 font-bold text-gray-700 hover:text-marinho"
                >
                  {l.texto}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setAberto(false)}
                className="mt-4 flex min-h-[48px] items-center justify-center rounded-lg bg-terracota font-bold text-white"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        )}
      </header>
    </div>
  )
}
