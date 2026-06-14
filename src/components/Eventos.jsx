import { useMemo, useState } from 'react'
import { eventos, nomeEvento, tiposEvento } from '../data/eventos.js'
import { linkWhatsApp } from '../lib/whatsapp.js'

function ItemEvento({ evento }) {
  const msg = `Olá! Vi o evento "${evento.nome}" no Ibitinga Ponto a Ponto e quero mais informações.`
  const href = evento.whatsapp ? linkWhatsApp(evento.whatsapp, msg) : evento.contatoUrl || evento.fonteUrl

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg">
      <div className="relative h-36 overflow-hidden bg-gray-100">
        {evento.imagem ? (
          <img
            src={evento.imagem}
            alt={evento.nome}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-marinho borda-ponto">
            <p className="px-4 text-center font-grotesk text-2xl font-bold text-white">{evento.nome}</p>
          </div>
        )}
        <span className="absolute right-2 top-2 rounded bg-ouro px-2 py-0.5 text-[10px] font-bold uppercase text-marinho">
          {evento.dia} {typeof evento.mes === 'string' ? evento.mes.slice(0, 3) : ''}
        </span>
        <span className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase text-marinho">
          {nomeEvento[evento.tipo]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 font-bold leading-snug text-marinho transition-colors line-clamp-1 group-hover:text-terracota">
          {evento.nome}
        </h3>
        <p className="mb-3 text-xs text-tinta-suave line-clamp-2">{evento.descricao}</p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-[10px] font-medium text-tinta-suave">{evento.local.split(',')[0]}</span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-terracota hover:underline"
          >
            {evento.whatsapp ? 'Saber mais ->' : 'Fonte oficial ->'}
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Eventos() {
  const [tipoAtivo, setTipoAtivo] = useState('todos')

  const filtrados = useMemo(() => {
    if (tipoAtivo === 'todos') return eventos
    return eventos.filter((e) => e.tipo === tipoAtivo)
  }, [tipoAtivo])

  return (
    <section id="eventos" className="scroll-mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <header className="max-w-xl">
            <h2 className="font-grotesk text-3xl font-bold text-marinho sm:text-4xl">Agenda de eventos</h2>
            <p className="mt-3 text-lg text-tinta-suave">
              Feirinha, Feira do Bordado, Corpus Christi e ações públicas ligadas ao bordado e ao artesanato.
            </p>
          </header>
          <p className="text-sm font-bold text-terracota">
            {filtrados.length} eventos e ações
          </p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-1 no-scrollbar" aria-label="Filtrar eventos por tipo">
          {tiposEvento.map((tipo) => {
            const ativo = tipo.id === tipoAtivo
            return (
              <button
                key={tipo.id}
                type="button"
                onClick={() => setTipoAtivo(tipo.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold transition-colors ${
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
          {filtrados.map((e) => (
            <ItemEvento key={e.id} evento={e} />
          ))}
        </div>
      </div>
    </section>
  )
}
