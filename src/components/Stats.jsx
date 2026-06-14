import { artesaos, produtos } from '../data/artesaos.js'
import { lojas } from '../data/lojas.js'
import { nomeCategoria } from '../lib/estilos.js'

const STATS = [
  { n: `${artesaos.length}`, l: 'Artesãs cadastradas' },
  { n: `${lojas.length}`, l: 'Lojas e empresas' },
  { n: `${produtos.length}`, l: 'Peças no catálogo' },
  { n: `${Object.keys(nomeCategoria).length}`, l: 'Categorias' },
]

export default function Stats() {
  return (
    <div className="bg-tinta">
      <div className="mx-auto flex max-w-6xl justify-around gap-6 overflow-x-auto px-6 py-8 sm:justify-center sm:gap-20 sm:px-10">
        {STATS.map(({ n, l }) => (
          <div key={l} className="shrink-0 text-center">
            <p className="font-display text-4xl font-black text-terracota">{n}</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/60">{l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
