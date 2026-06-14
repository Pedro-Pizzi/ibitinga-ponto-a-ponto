import { estiloTecnica } from '../lib/estilos.js'
import { mensagemArtesao, linkWhatsApp } from '../lib/whatsapp.js'

export default function ArtesaoCard({ artesao }) {
  const mensagem = mensagemArtesao(artesao.nome)
  const href = linkWhatsApp(artesao.whatsapp, mensagem)
  const estilo = estiloTecnica[artesao.tecnica_id] || {}

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-xl">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={artesao.foto}
          alt={`Foto de ${artesao.nome}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">
            {artesao.bairro}
          </p>
          <h3 className="text-xl font-bold leading-tight">
            {artesao.nome}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className={`mb-4 inline-flex self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${estilo.bg} ${estilo.texto}`}>
          {artesao.tecnica_id.replace(/-/g, ' ')}
        </div>
        
        <p className="mb-6 text-sm leading-relaxed text-gray-600 italic">
          "{artesao.bio}"
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {artesao.especialidades.map((esp) => (
            <span key={esp} className="rounded bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-500">
              {esp}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white transition-all hover:bg-[#1fb355] hover:shadow-lg active:scale-95"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Contatar Artesão
          </a>
        </div>
      </div>
    </article>
  )
}
