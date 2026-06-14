import { artesaos, categoriasTecnicas } from '../data/artesaos.js'
import ArtesaoCard from './ArtesaoCard.jsx'

export default function Artesaos() {
  return (
    <section id="artesaos" className="scroll-mt-20 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <header className="mb-16 text-center">
          <h2 className="font-grotesk text-4xl font-bold text-marinho sm:text-5xl">
            Mestres da Arte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Conheça os guardiões das técnicas tradicionais de Ibitinga. Cada peça conta uma história de gerações.
          </p>
        </header>

        <div className="space-y-24">
          {categoriasTecnicas.map((tecnica) => {
            const artesãosDaTecnica = artesaos.filter(a => a.tecnica_id === tecnica.id);
            
            if (artesãosDaTecnica.length === 0) return null;

            return (
              <div key={tecnica.id} className="space-y-8">
                <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-marinho">
                      {tecnica.nome}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 italic">
                      {tecnica.descricao}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {artesãosDaTecnica.length} {artesãosDaTecnica.length === 1 ? 'mestre' : 'mestres'}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {artesãosDaTecnica.map((artesao) => (
                    <ArtesaoCard key={artesao.id} artesao={artesao} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
