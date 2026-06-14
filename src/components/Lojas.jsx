import { useMemo, useRef, useState } from 'react'
import { corTipo, lojas, nomeTipo, tiposLoja } from '../data/lojas.js'
import { linkWhatsApp } from '../lib/whatsapp.js'
import { useModalA11y } from '../lib/useModalA11y.js'
import { IconeFechar } from './Icones.jsx'

function iniciais(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

function mensagemLoja(nome) {
  return `Olá! Vi a ${nome} no Ibitinga Ponto a Ponto e gostaria de mais informações.`
}

function CartaoSemImagem({ loja }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-marinho borda-ponto">
      <div className="px-6 text-center">
        <p className="font-grotesk text-2xl font-black leading-tight text-white">{loja.nome}</p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/60">{loja.selo}</p>
      </div>
    </div>
  )
}

function CardLoja({ loja, onAbrir }) {
  const estilo = corTipo[loja.tipo] || corTipo.loja
  const hrefAlternativo = loja.contatoUrl || loja.site || loja.catalogoUrl || loja.instagram || loja.fonteUrl
  const imagemContain = loja.imagemModo === 'contain'

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg">
      <div className="relative h-36 overflow-hidden bg-gray-100">
        {loja.imagem ? (
          <img
            src={loja.imagem}
            alt={`Referência visual de ${loja.nome}`}
            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
              imagemContain ? 'bg-white object-contain p-8' : 'object-cover'
            }`}
            loading="lazy"
          />
        ) : (
          <CartaoSemImagem loja={loja} />
        )}
        <span className={`absolute left-3 top-3 rounded px-2 py-0.5 text-[10px] font-bold uppercase ${estilo.bg} ${estilo.texto}`}>
          {nomeTipo[loja.tipo]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center gap-4">
          {loja.logo ? (
            <img src={loja.logo} alt={`Logo ${loja.nome}`} className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-gray-200" loading="lazy" />
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-marinho text-sm font-black text-white">
              {iniciais(loja.nome)}
            </div>
          )}
          <div>
            <h3 className="font-bold leading-tight text-marinho">{loja.nome}</h3>
            <p className="text-xs text-tinta-suave">{loja.bairro} · {loja.selo || 'Fonte pública'}</p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-tinta-suave line-clamp-3">{loja.descricao}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          <span className="rounded bg-ouro-escuro/10 px-2 py-0.5 text-[10px] font-bold text-ouro-escuro">{loja.selo}</span>
          {loja.especialidades.slice(0, 2).map((e) => (
            <span key={e} className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-tinta-suave">
              {e}
            </span>
          ))}
        </div>

        <div className="mb-6 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-gray-50 p-2 text-center">
            <p className="text-sm font-bold text-marinho">{loja.produtosResumo || 'Catálogo'}</p>
            <p className="text-[10px] text-gray-400">linha principal</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-2 text-center">
            <p className="text-sm font-bold text-marinho">{loja.canalResumo || (loja.atacado ? 'Atacado' : 'Varejo')}</p>
            <p className="text-[10px] text-gray-400">canal</p>
          </div>
        </div>

        <div className="mt-auto flex gap-2">
          <button
            type="button"
            onClick={() => onAbrir(loja)}
            className="min-h-[44px] flex-1 rounded-lg bg-terracota py-2 text-xs font-bold text-white transition-colors hover:bg-[#8a3a2d]"
          >
            Ver página
          </button>
          {loja.whatsapp ? (
            <a
              href={linkWhatsApp(loja.whatsapp, mensagemLoja(loja.nome))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-terracota py-2 text-xs font-bold text-terracota transition-colors hover:bg-terracota/5"
            >
              WhatsApp
            </a>
          ) : (
            <a
              href={hrefAlternativo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-terracota py-2 text-xs font-bold text-terracota transition-colors hover:bg-terracota/5"
            >
              {loja.site ? 'Site oficial' : 'Perfil'}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ModalLoja({ loja, onFechar }) {
  const fecharRef = useRef(null)
  useModalA11y(Boolean(loja), onFechar, fecharRef)

  if (!loja) return null

  const hrefAlternativo = loja.site || loja.catalogoUrl || loja.instagram || loja.contatoUrl || loja.fonteUrl

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-marinho/60 p-0 sm:items-center sm:p-4"
      onClick={onFechar}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-loja"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-carta-hover sm:rounded-3xl"
      >
        <button
          ref={fecharRef}
          type="button"
          onClick={onFechar}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-marinho shadow-carta hover:bg-gray-50"
        >
          <IconeFechar />
        </button>

        <div className="relative h-56 overflow-hidden bg-gray-100 sm:h-72">
          {loja.imagem ? (
            <img
              src={loja.imagem}
              alt=""
              className={`h-full w-full ${loja.imagemModo === 'contain' ? 'bg-white object-contain p-12' : 'object-cover'}`}
            />
          ) : (
            <CartaoSemImagem loja={loja} />
          )}
        </div>
        <div className="bg-marinho px-5 py-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ouro">{nomeTipo[loja.tipo]}</p>
          <h2 id="titulo-loja" className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {loja.nome}
          </h2>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg leading-relaxed text-tinta-suave">{loja.descricao}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {loja.especialidades.map((e) => (
                <span key={e} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-marinho">
                  {e}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {loja.catalogoUrl && (
                <a
                  href={loja.catalogoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-terracota px-4 py-3 text-sm font-bold text-white hover:bg-[#8a3a2d]"
                >
                  Abrir catálogo
                </a>
              )}
              {loja.whatsapp ? (
                <a
                  href={linkWhatsApp(loja.whatsapp, mensagemLoja(loja.nome))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-terracota px-4 py-3 text-sm font-bold text-terracota hover:bg-terracota/5"
                >
                  Chamar no WhatsApp
                </a>
              ) : (
                <a
                  href={hrefAlternativo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-terracota px-4 py-3 text-sm font-bold text-terracota hover:bg-terracota/5"
                >
                  {loja.site ? 'Site oficial' : 'Abrir perfil'}
                </a>
              )}
            </div>
          </div>

          <dl className="rounded-xl bg-gray-50 p-5 text-sm text-gray-600">
            <div>
              <dt className="font-bold text-marinho">Endereço</dt>
              <dd className="mt-1">{loja.endereco || `${loja.bairro}, Ibitinga-SP`}</dd>
            </div>
            {loja.atendimento && (
              <div className="mt-4">
                <dt className="font-bold text-marinho">Atendimento</dt>
                <dd className="mt-1">{loja.atendimento}</dd>
              </div>
            )}
            {loja.telefone && (
              <div className="mt-4">
                <dt className="font-bold text-marinho">Telefone</dt>
                <dd className="mt-1">{loja.telefone}</dd>
              </div>
            )}
            {loja.email && (
              <div className="mt-4">
                <dt className="font-bold text-marinho">E-mail</dt>
                <dd className="mt-1 break-all">{loja.email}</dd>
              </div>
            )}
            {loja.imagemFonte && (
              <div className="mt-4">
                <dt className="font-bold text-marinho">Imagem</dt>
                <dd className="mt-1">{loja.imagemFonte}</dd>
              </div>
            )}
            {loja.fonteUrl && (
              <div className="mt-4 border-t border-gray-200 pt-4">
                <dt className="font-bold text-marinho">Fonte</dt>
                <dd className="mt-1">
                  <a href={loja.fonteUrl} target="_blank" rel="noopener noreferrer" className="text-terracota underline underline-offset-4">
                    {loja.fonte}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default function Lojas() {
  const [tipoAtivo, setTipoAtivo] = useState('todos')
  const [lojaAberta, setLojaAberta] = useState(null)

  const filtradas = useMemo(() => {
    if (tipoAtivo === 'todos') return lojas
    return lojas.filter((l) => l.tipo === tipoAtivo)
  }, [tipoAtivo])

  return (
    <section id="lojas" className="scroll-mt-20 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <header className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-marinho sm:text-4xl">Empresas de Ibitinga</h2>
            <p className="mt-3 text-lg text-tinta-suave">
              Lojas, fábricas, marcas infantis, crochê e perfis públicos com contato ou fonte verificável.
            </p>
          </header>
          <p className="text-sm font-bold text-terracota">
            {filtradas.length} empresas na curadoria
          </p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-1 no-scrollbar" aria-label="Filtrar empresas por tipo">
          {tiposLoja.map((tipo) => {
            const ativo = tipo.id === tipoAtivo
            return (
              <button
                key={tipo.id}
                type="button"
                onClick={() => setTipoAtivo(tipo.id)}
                className={`min-h-[44px] whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold transition-colors ${
                  ativo ? 'bg-marinho text-white' : 'bg-white text-tinta-suave hover:text-marinho'
                }`}
                aria-pressed={ativo}
              >
                {tipo.nome}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((l) => (
            <CardLoja key={l.id} loja={l} onAbrir={setLojaAberta} />
          ))}
        </div>
      </div>

      <ModalLoja loja={lojaAberta} onFechar={() => setLojaAberta(null)} />
    </section>
  )
}
