import { useEffect, useRef } from 'react'
import PadraoBordado from './PadraoBordado.jsx'
import BotaoWhatsApp from './BotaoWhatsApp.jsx'
import { IconeFechar } from './Icones.jsx'
import { estiloCategoria, nomeCategoria } from '../lib/estilos.js'
import { mensagemPeca } from '../lib/whatsapp.js'

export default function ModalProduto({ produto, onFechar }) {
  const fecharRef = useRef(null)

  useEffect(() => {
    if (!produto) return
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
  }, [produto, onFechar])

  if (!produto) return null
  const est = estiloCategoria[produto.categoria]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-tinta/60 p-0 sm:items-center sm:p-4"
      onClick={onFechar}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-peca"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-papel shadow-carta-hover sm:rounded-3xl"
      >
        <button
          ref={fecharRef}
          type="button"
          onClick={onFechar}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-papel/90 text-tinta shadow-carta hover:bg-linho"
        >
          <IconeFechar />
        </button>

        {produto.imagem ? (
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="aspect-[16/9] w-full rounded-t-3xl object-cover"
          />
        ) : (
          <PadraoBordado
            categoria={produto.categoria}
            motivo={produto.motivo}
            className="aspect-[16/9] w-full rounded-t-3xl"
          />
        )}

        <div className="p-6 sm:p-8">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${est.bg} ${est.texto}`}>
            {nomeCategoria[produto.categoria]}
          </span>
          <h2 id="titulo-peca" className="mt-3 font-display text-3xl font-bold leading-tight text-tinta">
            {produto.nome}
          </h2>

          <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-base sm:grid-cols-2">
            <div className="flex gap-2">
              <dt className="font-bold text-tinta">Empresa:</dt>
              <dd className="text-tinta-suave">{produto.artesa}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-tinta">Bairro:</dt>
              <dd className="text-tinta-suave">{produto.bairro}, Ibitinga-SP</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-tinta">Linha:</dt>
              <dd className="text-tinta-suave">{produto.tecnica}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-tinta">Valor:</dt>
              <dd className="text-tinta-suave">{produto.preco}</dd>
            </div>
          </dl>

          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">{produto.descricao}</p>

          <div className="mt-7">
            {produto.whatsapp ? (
              <BotaoWhatsApp
                numero={produto.whatsapp}
                mensagem={mensagemPeca(produto.nome)}
                rotulo={`Falar no WhatsApp sobre ${produto.nome}`}
                className="w-full text-lg"
              >
                Falar com {produto.artesa} no WhatsApp
              </BotaoWhatsApp>
            ) : (
              <a
                href={produto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-terracota px-5 py-3 text-lg font-bold text-white shadow-carta transition-colors hover:bg-[#8a3a2d]"
              >
                Abrir site oficial
              </a>
            )}
            <p className="mt-3 text-center text-sm text-tinta-suave">
              Consulte disponibilidade, cor, tamanho, prazo e forma de entrega no canal oficial.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
