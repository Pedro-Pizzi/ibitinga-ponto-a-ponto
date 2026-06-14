import { useEffect, useMemo, useRef, useState } from 'react'
import { artesaos, corTecnica, nomeTecnica, tiposArtesao } from '../data/artesaos.js'
import { linkWhatsApp } from '../lib/whatsapp.js'
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

function mensagemArtesao(nome) {
  return `Olá! Vi a ${nome} no Ibitinga Ponto a Ponto e gostaria de mais informações sobre o trabalho artesanal.`
}

function CartaoSemImagem({ artesao }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-marinho via-[#273244] to-terracota">
      <div className="px-6 text-center">
        <p className="font-grotesk text-2xl font-black leading-tight text-white">{artesao.nome}</p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/60">{artesao.selo}</p>
      </div>
    </div>
  )
}

function CardArtesao({ artesao, onAbrir }) {
  const estilo = corTecnica[artesao.tecnica] || corTecnica.bordado
  const hrefAlternativo = artesao.instagram || artesao.catalogoUrl || artesao.fonteUrl
  const imagemHeader = artesao.galeria?.[0] || artesao.imagem

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg">
      {/* Header compacto com foto do produto */}
      <div className="relative h-40 overflow-hidden bg-gray-100">
        {imagemHeader ? (
          <img
            src={imagemHeader}
            alt={`Produto de ${artesao.nome}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <CartaoSemImagem artesao={artesao} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-marinho/60 via-marinho/10 to-transparent" />
        <span className={`absolute left-3 top-3 rounded px-2 py-0.5 text-[10px] font-bold uppercase ${estilo.bg} ${estilo.texto}`}>
          {nomeTecnica[artesao.tecnica]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-marinho text-xs font-black text-white">
            {iniciais(artesao.nome)}
          </div>
          <div>
            <h3 className="text-sm font-bold leading-tight text-marinho">{artesao.nome}</h3>
            <p className="text-[11px] text-gray-400">{artesao.bairro} · {artesao.selo}</p>
          </div>
        </div>

        <p className="mb-3 text-xs leading-relaxed text-gray-500 line-clamp-2">{artesao.descricao}</p>

        <div className="mb-3 flex flex-wrap gap-1">
          {artesao.especialidades.slice(0, 2).map((e) => (
            <span key={e} className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500">
              {e}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          <button
            type="button"
            onClick={() => onAbrir(artesao)}
            className="flex-1 rounded-lg bg-terracota py-2 text-xs font-bold text-white transition-colors hover:bg-[#a44a33]"
          >
            Ver página
          </button>
          {artesao.whatsapp ? (
            <a
              href={linkWhatsApp(artesao.whatsapp, mensagemArtesao(artesao.nome))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-terracota py-2 text-xs font-bold text-terracota transition-colors hover:bg-terracota/5"
            >
              WhatsApp
            </a>
          ) : (
            <a
              href={hrefAlternativo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-terracota py-2 text-xs font-bold text-terracota transition-colors hover:bg-terracota/5"
            >
              Perfil
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ModalArtesao({ artesao, onFechar }) {
  const fecharRef = useRef(null)

  useEffect(() => {
    if (!artesao) return
    fecharRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const aoTeclar = (e) => {
      if (e.key === 'Escape') onFechar()
    }
    document.addEventListener('keydown', aoTeclar)
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      document.body.style.overflow = ''
    }
  }, [artesao, onFechar])

  if (!artesao) return null

  const hrefAlternativo = artesao.instagram || artesao.catalogoUrl || artesao.fonteUrl

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-marinho/60 p-0 sm:items-center sm:p-4"
      onClick={onFechar}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-artesao"
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

        {/* Header do modal: foto pessoal da artesã */}
        <div className="relative h-56 overflow-hidden bg-gray-100 sm:h-72">
          {artesao.foto ? (
            <img src={artesao.foto} alt="" className="h-full w-full object-cover object-top" />
          ) : (
            <CartaoSemImagem artesao={artesao} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-marinho/80 via-marinho/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-16 text-white">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-ouro">{nomeTecnica[artesao.tecnica]}</p>
            <h2 id="titulo-artesao" className="font-grotesk text-3xl font-bold leading-tight sm:text-4xl">
              {artesao.nome}
            </h2>
          </div>
        </div>

        {/* Galeria de produtos — chamativa, com scroll horizontal em mobile */}
        {artesao.galeria && artesao.galeria.length > 0 && (
          <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Produtos</p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              {artesao.galeria.map((img, i) => (
                <div key={i} className="group/img overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <img
                    src={img}
                    alt={`Produto ${i + 1}`}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg leading-relaxed text-gray-600">{artesao.descricao}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {artesao.especialidades.map((e) => (
                <span key={e} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-marinho">
                  {e}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {artesao.whatsapp ? (
                <a
                  href={linkWhatsApp(artesao.whatsapp, mensagemArtesao(artesao.nome))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-terracota px-4 py-3 text-sm font-bold text-white hover:bg-[#a44a33]"
                >
                  Chamar no WhatsApp
                </a>
              ) : (
                <a
                  href={hrefAlternativo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-terracota px-4 py-3 text-sm font-bold text-white hover:bg-[#a44a33]"
                >
                  Abrir perfil
                </a>
              )}
            </div>
          </div>

          <dl className="rounded-xl bg-gray-50 p-5 text-sm text-gray-600">
            <div>
              <dt className="font-bold text-marinho">Localização</dt>
              <dd className="mt-1">{artesao.endereco || `${artesao.bairro}, Ibitinga-SP`}</dd>
            </div>
            <div className="mt-4">
              <dt className="font-bold text-marinho">Técnica</dt>
              <dd className="mt-1">{nomeTecnica[artesao.tecnica]}</dd>
            </div>
            <div className="mt-4">
              <dt className="font-bold text-marinho">Canal</dt>
              <dd className="mt-1">{artesao.canalResumo || 'Instagram'}</dd>
            </div>
            {artesao.fonteUrl && (
              <div className="mt-4 border-t border-gray-200 pt-4">
                <dt className="font-bold text-marinho">Fonte</dt>
                <dd className="mt-1">
                  <a href={artesao.fonteUrl} target="_blank" rel="noopener noreferrer" className="text-terracota underline underline-offset-4">
                    {artesao.fonte}
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

export default function Artesaos() {
  const [tecnicaAtiva, setTecnicaAtiva] = useState('todos')
  const [artesaoAberto, setArtesaoAberto] = useState(null)

  const filtrados = useMemo(() => {
    if (tecnicaAtiva === 'todos') return artesaos
    return artesaos.filter((a) => a.tecnica === tecnicaAtiva)
  }, [tecnicaAtiva])

  return (
    <section id="artesaos" className="scroll-mt-20 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <header className="max-w-xl">
            <h2 className="font-grotesk text-3xl font-bold text-marinho sm:text-4xl">Artesãos de Ibitinga</h2>
            <p className="mt-3 text-lg text-gray-500">
              Pequenos artesãos e ateliês locais que mantêm vivas as técnicas manuais, com perfis públicos verificáveis.
            </p>
          </header>
          <p className="text-sm font-bold text-terracota">
            {filtrados.length} artesãos na curadoria
          </p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-1 no-scrollbar" aria-label="Filtrar artesãos por técnica">
          {tiposArtesao.map((tipo) => {
            const ativo = tipo.id === tecnicaAtiva
            return (
              <button
                key={tipo.id}
                type="button"
                onClick={() => setTecnicaAtiva(tipo.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold transition-colors ${
                  ativo ? 'bg-marinho text-white' : 'bg-white text-gray-500 hover:text-marinho'
                }`}
                aria-pressed={ativo}
              >
                {tipo.nome}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((a) => (
            <CardArtesao key={a.id} artesao={a} onAbrir={setArtesaoAberto} />
          ))}
        </div>
      </div>

      <ModalArtesao artesao={artesaoAberto} onFechar={() => setArtesaoAberto(null)} />
    </section>
  )
}
