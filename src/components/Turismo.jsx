export default function Turismo() {
  const cards = [
    {
      titulo: 'Feirinha da Matriz',
      descricao: 'Acontece aos sábados pela manhã, com bancas de bordado, artesanato, aventais, toalhas e peças para casa.',
      cor: 'bg-terracota/10',
      label: 'Tradição',
    },
    {
      titulo: 'Lojas de fábrica',
      descricao: 'A cidade reúne marcas de cama, mesa, banho, decoração e enxoval infantil, com venda física e canais digitais.',
      cor: 'bg-anil/10',
      label: 'Compras',
    },
    {
      titulo: 'Enxoval infantil',
      descricao: 'Empresas como Paulinha Baby e Lunenê Baby divulgam linhas de berço, quarto de bebê e peças personalizadas.',
      cor: 'bg-musgo/10',
      label: 'Bebê',
    },
    {
      titulo: 'Feiras e exposições',
      descricao: 'A Feira do Bordado e ações da Prefeitura movimentam visitantes, lojistas e fabricantes durante o calendário da cidade.',
      cor: 'bg-ocre/10',
      label: 'Eventos',
    },
  ]

  return (
    <section id="turismo" className="scroll-mt-20 border-t border-gray-100 bg-papel">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <header className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-terracota">Conheça Ibitinga</p>
          <h2 className="font-display text-3xl font-bold text-tinta sm:text-4xl">
            A Capital Nacional do Bordado
          </h2>
          <p className="mt-4 text-lg text-tinta-suave">
            A cidade combina turismo de compras, produção têxtil, tradição artesanal e empresas que vendem para todo o Brasil. O catálogo aproxima esse circuito de quem pesquisa antes de visitar ou comprar.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.titulo} className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${card.cor}`}>
                <div className="h-4 w-4 rounded-full border-2 border-current opacity-20" />
              </div>
              <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-terracota">{card.label}</span>
              <h3 className="mb-2 font-display text-xl font-bold text-tinta">{card.titulo}</h3>
              <p className="text-sm leading-relaxed text-tinta-suave">{card.descricao}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-marinho text-white shadow-carta">
          <div className="grid md:grid-cols-[1fr_0.9fr]">
            <img
              src="./imagens/feirinha-matriz-rua.jpeg"
              alt="Rua da Feirinha da Matriz em Ibitinga"
              className="h-72 w-full object-cover md:h-full"
              loading="lazy"
            />
            <div className="p-8 sm:p-12">
              <h3 className="mb-4 font-display text-2xl font-bold sm:text-3xl">Como montar o roteiro</h3>
              <p className="mb-6 leading-relaxed text-gray-300">
                Comece pelas empresas e peças que aparecem na vitrine, salve os contatos oficiais e organize a visita entre Feirinha, lojas de fábrica e eventos da cidade.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-ouro" /> Feirinha: sábado pela manhã na região central
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-ouro" /> Lojas e fábricas: confirme horário pelo site ou WhatsApp
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-ouro" /> Eventos: confira datas oficiais antes da viagem
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-ouro">Dica de visita</h4>
                <p className="text-sm text-gray-200">
                  Se quiser comparar preços e estilos, use a vitrine para separar marcas de cama, mesa, banho, bebê e crochê antes de sair de casa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
