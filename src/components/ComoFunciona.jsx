const PASSOS = [
  {
    n: 1,
    titulo: 'Veja a vitrine real',
    texto: 'Explore peças divulgadas por lojas, fábricas e bancas de Ibitinga, com foto, linha de produto e empresa responsável.',
  },
  {
    n: 2,
    titulo: 'Confira a fonte',
    texto: 'Cada empresa traz site, perfil público, guia comercial ou canal oficial usado na curadoria dos dados.',
  },
  {
    n: 3,
    titulo: 'Fale no canal certo',
    texto: 'Quando há WhatsApp público, o botão abre a conversa pronta. Quando não há, o acesso vai para o site ou perfil oficial.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-tinta text-linho">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Da pesquisa à compra, em 3 passos
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-linho/80">
          A plataforma organiza o que já existe na cidade: empresas, eventos, fotos e contatos públicos, em uma experiência simples para celular.
        </p>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {PASSOS.map((p) => (
            <li key={p.n} className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-terracota font-display text-2xl font-bold text-white">
                {p.n}
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">{p.titulo}</h3>
              <p className="mt-2 text-lg leading-relaxed text-linho/80">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
