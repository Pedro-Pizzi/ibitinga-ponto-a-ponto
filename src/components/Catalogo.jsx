import { useMemo, useState } from 'react'
import { produtos, categorias } from '../data/artesaos.js'
import CardProduto from './CardProduto.jsx'
import ModalProduto from './ModalProduto.jsx'
import { IconeBusca } from './Icones.jsx'

export default function Catalogo() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos')
  const [busca, setBusca] = useState('')
  const [pecaAberta, setPecaAberta] = useState(null)

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    return produtos.filter((p) => {
      const naCategoria = categoriaAtiva === 'todos' || p.categoria === categoriaAtiva
      const noTermo =
        termo === '' ||
        `${p.nome} ${p.artesa} ${p.tecnica} ${p.descricao}`.toLowerCase().includes(termo)
      return naCategoria && noTermo
    })
  }, [categoriaAtiva, busca])

  return (
    <div className="bg-white">
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar" role="list" aria-label="Categorias do catálogo">
            {categorias.map((c) => {
              const ativo = c.id === categoriaAtiva
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategoriaAtiva(c.id)}
                  className={`flex min-w-[86px] flex-col items-center gap-2 rounded-xl p-3 transition-all ${
                    ativo
                      ? 'bg-white text-marinho shadow-sm ring-1 ring-black/5'
                      : 'text-gray-400 hover:bg-gray-100/50 hover:text-marinho'
                  }`}
                  aria-pressed={ativo}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${ativo ? 'bg-ouro/10 text-ouro' : 'bg-gray-100'}`}>
                    <span className="text-sm font-black">{c.nome.slice(0, 1)}</span>
                  </div>
                  <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-normal">{c.nome}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <section id="catalogo" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <header className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-marinho sm:text-4xl">Vitrine de peças reais</h2>
            <p className="mt-3 text-lg text-gray-500">
              Produtos, coleções e linhas divulgados por marcas, fábricas e bancas de Ibitinga.
            </p>
          </header>

          <label className="relative w-full md:max-w-sm">
            <span className="sr-only">Buscar peça, empresa ou linha</span>
            <IconeBusca className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar peça, empresa ou linha"
              className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-sm text-marinho outline-none transition-colors placeholder:text-gray-400 focus:border-ouro"
            />
          </label>
        </div>

        {filtrados.length > 0 ? (
          <>
            <p className="mb-4 text-sm font-semibold text-gray-500">
              {filtrados.length} de {produtos.length} peças na vitrine
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtrados.map((p) => (
                <CardProduto key={p.id} produto={p} onAbrir={setPecaAberta} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-gray-100 p-10 text-center">
            <p className="font-grotesk text-xl text-marinho">Nenhuma peça com esse filtro.</p>
          </div>
        )}

        <ModalProduto produto={pecaAberta} onFechar={() => setPecaAberta(null)} />
      </section>
    </div>
  )
}
