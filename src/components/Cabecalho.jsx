import { useState } from 'react'
import { IconeBusca, IconeFechar, IconeMenu } from './Icones.jsx'

const LINKS = [
  { href: '#catalogo', texto: 'Catálogo' },
  { href: '#lojas', texto: 'Empresas' },
  { href: '#eventos', texto: 'Eventos' },
  { href: '#turismo', texto: 'Turismo' },
  { href: '#projeto', texto: 'O projeto' },
]

function Marca() {
  return (
    <a href="#topo" className="group flex items-center gap-2.5" aria-label="Ibitinga Ponto a Ponto - início">
      <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="#BD5D43" />
        <g stroke="#FFFDF9" strokeWidth="2.2" strokeLinecap="round">
          <line x1="9" y1="9" x2="15" y2="15" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="20" y1="14" x2="24" y2="18" />
          <line x1="24" y1="14" x2="20" y2="18" />
          <line x1="12" y1="20" x2="16" y2="24" />
          <line x1="16" y1="20" x2="12" y2="24" />
        </g>
      </svg>
      <span className="font-display text-lg font-bold leading-none text-tinta">
        Ibitinga<span className="text-terracota"> Ponto a Ponto</span>
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

      <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6" aria-label="Navegação principal">
          <Marca />

          <a
            href="#catalogo"
            className="hidden max-w-md flex-1 items-center gap-3 rounded-lg border border-transparent bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 transition-all hover:border-ouro/30 hover:text-marinho lg:flex"
          >
            <IconeBusca className="h-5 w-5 text-gray-400" />
            Buscar peça, empresa ou linha
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center rounded-lg px-3 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-100 hover:text-marinho"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-tinta hover:bg-terracota/10 md:hidden"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          >
            {aberto ? <IconeFechar /> : <IconeMenu />}
          </button>
        </nav>

        {aberto && (
          <ul id="menu-mobile" className="border-t border-tinta/10 bg-linho px-4 pb-4 md:hidden">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="flex min-h-[48px] items-center border-b border-tinta/5 font-bold text-gray-600 hover:text-marinho"
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
