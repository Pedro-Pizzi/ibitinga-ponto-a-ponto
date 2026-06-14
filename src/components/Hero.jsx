import { nomeCategoria } from '../lib/estilos.js'
import { produtos } from '../data/artesaos.js'
import { linkWhatsApp, mensagemPeca } from '../lib/whatsapp.js'

const destaques = produtos.filter((p) => p.destaque).slice(0, 4)

function hrefProduto(produto) {
  return produto.whatsapp
    ? linkWhatsApp(produto.whatsapp, mensagemPeca(produto.nome))
    : produto.url
}

export default function Hero() {
  return (
    <section id="topo" className="overflow-hidden">
      <div className="grid min-h-[540px] md:grid-cols-2">

        {/* Coluna editorial */}
        <div className="flex flex-col justify-center bg-linho px-6 py-16 sm:px-10 md:px-14 md:py-28">
          <p className="mb-5 flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-widest text-terracota">
            <span aria-hidden="true" className="block h-0.5 w-6 shrink-0 bg-terracota" />
            Ibitinga-SP · Capital Nacional do Bordado
          </p>
          <h1 className="font-display text-4xl font-black leading-[1.05] text-tinta sm:text-5xl lg:text-6xl">
            O bordado da Feirinha,{' '}
            <em className="text-terracota">
              agora a um toque
            </em>{' '}
            de distância.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
            Catálogo de artesãs, lojas e eventos de bordado em Ibitinga.
            Compre direto de quem fez — pelo WhatsApp, sem intermediário.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-terracota px-7 py-3 font-bold text-white transition-colors hover:bg-[#8a3a2d]"
            >
              Ver o catálogo →
            </a>
            <a
              href="#lojas"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border-2 border-musgo px-7 py-3 font-bold text-musgo transition-colors hover:bg-musgo hover:text-white"
            >
              Lojas &amp; empresas
            </a>
          </div>
        </div>

        {/* Coluna visual — grade 2×2 com fotos reais */}
        <div className="grid grid-cols-2 gap-px bg-tinta/20">
          {destaques.map((produto) => (
            <a
              key={produto.id}
              href={hrefProduto(produto)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden sm:min-h-[260px]"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="relative bg-tinta/75 px-4 py-3.5">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/60">
                  {nomeCategoria[produto.categoria]}
                </p>
                <h3 className="font-display text-sm font-bold leading-snug text-white line-clamp-2">
                  {produto.nome}
                </h3>
                <span className="mt-2 inline-block text-[10px] font-extrabold uppercase tracking-wide text-ouro">
                  {produto.whatsapp ? 'WhatsApp →' : 'Ver site →'}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
