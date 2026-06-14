import { produtos } from '../data/artesaos.js'
import { IconeSeta } from './Icones.jsx'

const destaques = produtos.filter((p) => p.destaque).slice(0, 3)

export default function Hero() {
  return (
    <section id="topo" className="overflow-hidden bg-marinho">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 md:grid-cols-[1fr_460px]">
        <div className="px-4 py-16 sm:px-6 md:py-24">
          <p className="mb-6 inline-flex items-center gap-2 rounded bg-ouro/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ouro">
            Ibitinga-SP · Capital Nacional do Bordado
          </p>
          <h1 className="font-grotesk text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Empresas e bordados de Ibitinga,
            <span className="text-ouro"> direto no canal oficial.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Lojas, fábricas, eventos e bancas reunidos em uma vitrine mobile com fotos reais, contatos públicos e fontes verificáveis.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#catalogo"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-ouro px-8 py-3 font-bold text-marinho transition-all hover:scale-[1.02] hover:bg-[#cc9000]"
            >
              Explorar catálogo <IconeSeta className="h-5 w-5" />
            </a>
            <a
              href="#lojas"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3 font-bold text-white transition-all hover:bg-white/10"
            >
              Ver empresas
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden border-l border-white/10 md:min-h-full">
          <img
            src="./imagens/feirinha-matriz-bancas.jpeg"
            alt="Feirinha da Matriz em Ibitinga com bancas de artesanato e bordado"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <p className="mb-4 inline-block rounded bg-marinho/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">Destaques com fonte real</p>
            <div className="grid gap-3">
              {destaques.map((produto) => (
                <a
                  key={produto.id}
                  href="#catalogo"
                  className="group flex items-center gap-4 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur transition-transform hover:-translate-y-0.5"
                >
                  <img
                    src={produto.imagem}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm font-bold leading-snug text-marinho group-hover:text-terracota">
                      {produto.nome}
                    </h3>
                    <p className="text-[11px] text-gray-500">{produto.artesa} · {produto.tecnica}</p>
                    <span className="mt-1 block text-xs font-bold text-terracota">{produto.preco}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
