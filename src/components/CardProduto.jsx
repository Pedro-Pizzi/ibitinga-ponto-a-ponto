import PadraoBordado from './PadraoBordado.jsx'
import { nomeCategoria } from '../lib/estilos.js'
import { mensagemPeca, linkWhatsApp } from '../lib/whatsapp.js'

export default function CardProduto({ produto, onAbrir }) {
  const mensagem = mensagemPeca(produto.nome)
  const href = produto.whatsapp ? linkWhatsApp(produto.whatsapp, mensagem) : produto.url
  const imagemContain = produto.imagemModo === 'contain'

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        {produto.destaque && (
          <span className="absolute left-3 top-3 z-10 rounded bg-terracota px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Destaque
          </span>
        )}
        {produto.imagem ? (
          <img
            src={produto.imagem}
            alt={produto.nome}
            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
              imagemContain ? 'bg-white object-contain p-8' : 'object-cover'
            }`}
            loading="lazy"
          />
        ) : (
          <PadraoBordado categoria={produto.categoria} motivo={produto.motivo} className="h-full w-full" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-tinta-suave">
          {produto.artesa}
        </p>
        <h3 className="mb-2 font-display font-bold leading-tight text-marinho transition-colors line-clamp-2 group-hover:text-terracota">
          {produto.nome}
        </h3>
        <div className="mt-auto">
          <p className="text-sm font-bold text-marinho">
            {produto.preco}{' '}
            <span className="text-[11px] font-normal text-gray-400">
              · {nomeCategoria[produto.categoria]} · {produto.tecnica}
            </span>
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-[#25D366] py-2 text-xs font-bold text-white transition-colors hover:bg-[#1fb355]"
            >
              {produto.whatsapp ? 'WhatsApp' : 'Site oficial'}
            </a>
            <button
              type="button"
              onClick={() => onAbrir(produto)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-base font-bold text-gray-500 transition-colors hover:bg-gray-50"
              aria-label={`Ver detalhes de ${produto.nome}`}
              title="Ver detalhes"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
