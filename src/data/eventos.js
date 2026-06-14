// =============================================================================
//  DADOS DE EVENTOS - Ibitinga Ponto a Ponto
// -----------------------------------------------------------------------------
//  Eventos e contatos baseados no site oficial da Feira do Bordado e em notícias
//  da Prefeitura de Ibitinga.
// =============================================================================

export const tiposEvento = [
  { id: 'todos', nome: 'Todos' },
  { id: 'feira', nome: 'Feiras' },
  { id: 'exposicao', nome: 'Exposições' },
  { id: 'religioso', nome: 'Tradições' },
  { id: 'formacao', nome: 'Formação' },
]

export const nomeEvento = {
  feira: 'Feira',
  exposicao: 'Exposição',
  religioso: 'Tradição',
  formacao: 'Formação',
}

export const corEvento = {
  feira: { bg: 'bg-terracota', texto: 'text-white' },
  exposicao: { bg: 'bg-anil', texto: 'text-white' },
  religioso: { bg: 'bg-ameixa', texto: 'text-white' },
  formacao: { bg: 'bg-musgo', texto: 'text-white' },
}

export const eventos = [
  {
    id: 'feirinha-matriz',
    nome: 'Feirinha de Artesanato de Ibitinga',
    tipo: 'feira',
    dia: 'Sábados',
    mes: '5h a 12h',
    dataTxt: 'Sábados, das 5h às 12h',
    local: 'Praça da Matriz / Centro - Ibitinga-SP',
    descricao:
      'Feira tradicional ligada ao artesanato local. A Prefeitura informa que a Feirinha celebrou 39 anos de tradição, cultura e empreendedorismo em 2026.',
    imagem: './imagens/feirinha-matriz-bancas.jpeg',
    gratuito: true,
    recorrente: true,
    destaque: true,
    fonte: 'Prefeitura de Ibitinga / Vem Pra Ibitinga',
    fonteUrl: 'https://www.ibitinga.sp.gov.br/portal/noticias/0/3/3100/parceria-promove-cursos-para-artesaos-da-feira-do-artesanato-de-ibitinga',
    whatsapp: '5516996168629',
  },
  {
    id: 'feira-bordado-2026',
    nome: '50ª Feira do Bordado de Ibitinga',
    tipo: 'exposicao',
    dia: '03 a 12',
    mes: 'Jul',
    dataTxt: '3 a 12 de julho de 2026',
    local: 'Pavilhão Permanente de Exposições Dr. Licínio Hilmar de Oliveira Arantes',
    descricao:
      'A maior feira de bordados e enxovais da América Latina reúne centenas de expositores, compras, cultura, shows e atrações para a família.',
    imagem: './imagens/reais/feira-bordado-oficial.jpg',
    gratuito: false,
    recorrente: false,
    destaque: true,
    fonte: 'Site oficial Feira do Bordado de Ibitinga',
    fonteUrl: 'https://feiradobordadodeibitinga.com.br/',
    contatoUrl: 'https://feiradobordadodeibitinga.com.br/',
  },
  {
    id: 'corpus-christi-2026',
    nome: 'Corpus Christi de Ibitinga 2026',
    tipo: 'religioso',
    dia: '03 a 04',
    mes: 'Jun',
    dataTxt: '3 e 4 de junho de 2026',
    local: 'Igreja Matriz do Senhor Bom Jesus e Praça Cônego Eutímio Ticianelli',
    descricao:
      'Edição de 2026 já realizada. Tradição em que Ibitinga borda suas ruas para a celebração religiosa, com missas, procissão, praça de alimentação, artesanato local e atrações culturais.',
    imagem: './imagens/feirinha-matriz-rua.jpeg',
    gratuito: true,
    recorrente: true,
    realizado: true,
    destaque: true,
    fonte: 'Prefeitura de Ibitinga',
    fonteUrl: 'https://www.ibitinga.sp.gov.br/portal/noticias/0/3/3792/corpus-christi-ibitinga-borda-suas-ruas-para-a-passagem-do-senhor',
    contatoUrl: 'https://www.ibitinga.sp.gov.br/portal/noticias/0/3/3792/corpus-christi-ibitinga-borda-suas-ruas-para-a-passagem-do-senhor',
  },
  {
    id: 'cursos-artesaos',
    nome: 'Cursos para artesãos da Feira do Artesanato',
    tipo: 'formacao',
    dia: 'Turmas',
    mes: 'SEBRAE',
    dataTxt: 'Programações de capacitação divulgadas pela Secretaria de Turismo',
    local: 'Secretaria de Turismo / Feirinha de Artesanato',
    descricao:
      'A Prefeitura e o SEBRAE já promoveram cursos gratuitos para artesãos da feira, com noções de atendimento ao cliente, finanças, marketing e organização do negócio.',
    imagem: './imagens/banca-artesa-feira.jpeg',
    gratuito: true,
    recorrente: false,
    destaque: false,
    fonte: 'Prefeitura de Ibitinga',
    fonteUrl: 'https://www.ibitinga.sp.gov.br/portal/noticias/0/3/3100/parceria-promove-cursos-para-artesaos-da-feira-do-artesanato-de-ibitinga',
    whatsapp: '5516996168629',
  },
]
