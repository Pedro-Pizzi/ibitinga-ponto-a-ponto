const ODS = [
  { n: 8, nome: 'Trabalho decente e crescimento econômico', cor: '#A21942' },
  { n: 9, nome: 'Indústria, inovação e infraestrutura', cor: '#FD6925' },
  { n: 10, nome: 'Redução das desigualdades', cor: '#DD1367' },
  { n: 11, nome: 'Cidades e comunidades sustentáveis', cor: '#FD9D24' },
]

export default function SobreProjeto() {
  return (
    <section id="projeto" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-terracota">
            O projeto
          </p>
          <h2 className="font-display text-3xl font-bold text-tinta sm:text-4xl">
            Inclusão digital com dados reais de Ibitinga
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-tinta-suave">
            <p>
              Ibitinga é reconhecida como <strong className="text-tinta">Capital Nacional do Bordado</strong> e reúne um circuito forte de lojas, fábricas, bancas e eventos ligados ao enxoval.
            </p>
            <p>
              O <strong className="text-tinta">Ibitinga Ponto a Ponto</strong> organiza essas informações em uma vitrine mobile: nomes reais, fotos reais, contatos públicos e links para sites, guias ou perfis usados como fonte.
            </p>
            <p>
              A proposta acadêmica é mostrar como tecnologia simples pode dar visibilidade ao comércio local, facilitar a pesquisa do visitante e aproximar empresas e compradores sem depender de um marketplace fechado.
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-2xl bg-papel p-6 shadow-carta sm:p-8">
            <h3 className="font-display text-xl font-bold text-tinta">
              Objetivos de Desenvolvimento Sustentável
            </h3>
            <p className="mt-2 text-tinta-suave">
              Este projeto contribui diretamente para 4 dos 17 ODS da ONU:
            </p>
            <ul className="mt-5 space-y-3">
              {ODS.map((o) => (
                <li key={o.n} className="flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-display text-xl font-bold text-white"
                    style={{ backgroundColor: o.cor }}
                    aria-hidden="true"
                  >
                    {o.n}
                  </span>
                  <span className="font-semibold text-tinta">
                    <span className="sr-only">ODS {o.n}: </span>
                    {o.nome}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl borda-ponto p-6 text-tinta-suave">
            <p>
              <strong className="text-tinta">Curadoria transparente.</strong> Quando a empresa tem site, WhatsApp, endereço ou imagem pública, a página mostra essa informação e inclui o link da fonte consultada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
