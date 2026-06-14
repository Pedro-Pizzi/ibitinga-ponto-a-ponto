// =============================================================================
//  CATÁLOGO DE TÉCNICAS E ARTESÃOS - Ibitinga Ponto a Ponto
// -----------------------------------------------------------------------------
//  Espaço dedicado aos mestres do artesanato local, organizados por técnica.
// =============================================================================

export const categoriasTecnicas = [
  {
    id: 'bordado-rechileu',
    nome: 'Bordado Rechileu',
    descricao: 'Técnica de bordado com recortes, criando vazados elegantes e tradicionais.',
    cor: 'terracota'
  },
  {
    id: 'croche',
    nome: 'Crochê Artístico',
    descricao: 'Peças feitas à mão com agulha de gancho, variando de toalhas a decorações.',
    cor: 'ocre'
  },
  {
    id: 'ponto-cruz',
    nome: 'Ponto Cruz',
    descricao: 'Bordado em tela com pontos em forma de X, ideal para personalizações.',
    cor: 'anil'
  },
  {
    id: 'patchwork',
    nome: 'Patchwork e Quilt',
    descricao: 'Trabalhos feitos com retalhos de tecidos costurados, formando desenhos geométricos.',
    cor: 'ameixa'
  },
  {
    id: 'pintura-tecido',
    nome: 'Pintura em Tecido',
    descricao: 'Arte aplicada diretamente no tecido com tintas especiais e pincéis.',
    cor: 'musgo'
  },
  {
    id: 'bordado-manual',
    nome: 'Bordado Manual',
    descricao: 'O autêntico bordado feito à mão, ponto a ponto, com carinho e tradição.',
    cor: 'terracota'
  }
];

export const artesaos = [
  {
    id: 'dona-marilda-feirinha',
    nome: 'Dona Marilda da Feirinha',
    tecnica_id: 'bordado-manual',
    bio: 'Presença garantida todos os sábados na Praça da Matriz, Dona Marilda é mestra nos panos de prato e almofadas que decoram as casas de Ibitinga há décadas.',
    especialidades: ['Panos de Prato', 'Capas de Almofada'],
    whatsapp: '5516996168629',
    foto: './imagens/artesaos/artesao-1.jpg',
    bairro: 'Centro / Feirinha'
  },
  {
    id: 'nadia-tapetes',
    nome: 'Nádia dos Tapetes',
    tecnica_id: 'croche',
    bio: 'Referência na Feirinha de Sábado por suas passadeiras e tapetes de algodão puro, unindo durabilidade e o design rústico típico do artesanato ibitinguense.',
    especialidades: ['Tapetes', 'Passadeiras'],
    whatsapp: '5516996168629',
    foto: './imagens/artesaos/artesao-2.jpg',
    bairro: 'Vila Izabel'
  },
  {
    id: 'dona-maria-rechileu',
    nome: 'Dona Maria do Rechileu',
    tecnica_id: 'bordado-rechileu',
    bio: 'Mais de 40 anos dedicados ao bordado rechileu, mantendo viva a tradição da família.',
    especialidades: ['Toalhas de Mesa', 'Caminhos de Mesa'],
    whatsapp: '5516996168629',
    foto: './imagens/artesaos/artesao-1.jpg',
    bairro: 'Centro'
  },
  {
    id: 'seu-jose-croche',
    nome: 'Seu José do Crochê',
    tecnica_id: 'croche',
    bio: 'Especialista em tapetes e jogos de banheiro em crochê, conhecido pela rapidez e precisão.',
    especialidades: ['Tapetes', 'Jogos de Banheiro'],
    whatsapp: '5516996168629',
    foto: './imagens/artesaos/artesao-2.jpg',
    bairro: 'Jardim Primavera'
  },
  {
    id: 'ana-ponto-cruz',
    nome: 'Ana do Ponto Cruz',
    tecnica_id: 'ponto-cruz',
    bio: 'Transforma enxovais de bebê em peças únicas com bordados personalizados em ponto cruz.',
    especialidades: ['Enxoval de Bebê', 'Toalhas de Rosto'],
    whatsapp: '5516996168629',
    foto: './imagens/artesaos/artesao-3.jpg',
    bairro: 'Vila Izabel'
  },
  {
    id: 'teresa-patchwork',
    nome: 'Dona Teresa do Patchwork',
    tecnica_id: 'patchwork',
    bio: 'Mestra na arte de unir retalhos, cria colchas que contam histórias através das cores.',
    especialidades: ['Colchas', 'Almofadas'],
    whatsapp: '5516996168629',
    foto: './imagens/artesaos/artesao-4.jpg',
    bairro: 'Jardim São Jorge'
  },
  {
    id: 'lucia-pintura',
    nome: 'Lúcia Pintura',
    tecnica_id: 'pintura-tecido',
    bio: 'Traz a natureza para o pano com suas pinturas florais detalhadas em panos de prato.',
    especialidades: ['Panos de Prato', 'Caminhos de Mesa'],
    whatsapp: '5516996168629',
    foto: './imagens/artesaos/artesao-5.jpg',
    bairro: 'Centro'
  }
];

export const categorias = [
  { id: 'todos', nome: 'Todas as peças', cor: 'terracota' },
  { id: 'mesa', nome: 'Mesa e cozinha', cor: 'terracota' },
  { id: 'cama', nome: 'Cama', cor: 'anil' },
  { id: 'banho', nome: 'Banho', cor: 'musgo' },
  { id: 'bebe', nome: 'Enxoval de bebê', cor: 'ameixa' },
  { id: 'decoracao', nome: 'Decoração', cor: 'ocre' },
]

export const produtos = [
  {
    id: 'lavive-corelli',
    nome: 'Coleção Corelli - algodão 200 fios',
    categoria: 'cama',
    tecnica: 'Bordado corneli e acabamento premium',
    artesa: 'Lavive',
    bairro: 'Jardim Primavera',
    preco: 'Consulte no site oficial',
    motivo: 'floral',
    imagem: './imagens/reais/lavive-corelli.jpg',
    destaque: true,
    descricao:
      'Linha de cama da Lavive com bordado corneli, tons suaves e proposta de cama posta sofisticada. A marca apresenta a coleção como parte dos lançamentos 2026.',
    url: 'https://lavive.com.br/',
  },
  {
    id: 'am-jogo-cama-400-fios',
    nome: 'Jogo de cama 400 fios ponto palito',
    categoria: 'cama',
    tecnica: 'Percal 400 fios com ponto palito',
    artesa: 'AM Bordados',
    bairro: 'Jardim São Jorge',
    preco: 'Consulte no site oficial',
    motivo: 'listras',
    imagem: './imagens/reais/am-jogo-cama.png',
    destaque: true,
    descricao:
      'Produto vendido no site da AM Bordados dentro da categoria de jogos de cama, com variações de tamanho e cor.',
    whatsapp: '5516997245919',
    url: 'https://www.ambordados.com.br/jogo-de-cama',
  },
  {
    id: 'paulinha-encanto',
    nome: 'Enxoval de berço personalizado Encanto',
    categoria: 'bebe',
    tecnica: 'Enxoval de berço 200 fios personalizado',
    artesa: 'Paulinha Baby',
    bairro: 'Ibitinga',
    preco: 'Consulte catálogo / lojista',
    motivo: 'floral',
    imagem: './imagens/reais/paulinha-banner.jpg',
    destaque: true,
    descricao:
      'Linha infantil divulgada pela Paulinha Baby, fabricante especializada em enxovais para bebês, quarto completo, bolsas, mosquiteiros e acessórios.',
    whatsapp: '5516981800072',
    url: 'https://www.paulinhababy.com.br/catalogos',
  },
  {
    id: 'juma-cama-posta',
    nome: 'Cama posta Juma Enxovais',
    categoria: 'cama',
    tecnica: 'Composição de cama, enxoval e decoração',
    artesa: 'Juma Enxovais',
    bairro: 'Aeroporto / Centro',
    preco: 'Consulte lojas Juma',
    motivo: 'floral',
    imagem: './imagens/reais/juma-hero.jpg',
    destaque: true,
    descricao:
      'Referência visual do site oficial da Juma, empresa de Ibitinga com loja de fábrica, loja no centro e atendimento para consumidor e revendedores.',
    url: 'https://www.juma.com.br/',
  },
  {
    id: 'lunene-enxoval-personalizado',
    nome: 'Enxoval de bebê personalizado Lunenê',
    categoria: 'bebe',
    tecnica: 'Personalização sob medida para quarto de bebê',
    artesa: 'Lunenê Baby',
    bairro: 'Ibitinga',
    preco: 'Consulte no site oficial',
    motivo: 'geometrico',
    imagem: './imagens/reais/lunene-banner.jpg',
    destaque: false,
    descricao:
      'A Lunenê Baby trabalha com enxovais personalizados, coleções de berço e atendimento digital para projetos de quarto de bebê.',
    whatsapp: '5516982126183',
    url: 'https://www.lunenebaby.com.br/',
  },
  {
    id: 'sakura-cozinha-cottage',
    nome: 'Coleção de cozinha Sakura Enxovais',
    categoria: 'mesa',
    tecnica: 'Estampas e jogos para cozinha e mesa posta',
    artesa: 'Sakura Enxovais',
    bairro: 'Centro',
    preco: 'Consulte no site oficial',
    motivo: 'floral',
    imagem: './imagens/reais/sakura-banner.jpg',
    destaque: false,
    descricao:
      'A Sakura Enxovais divulga coleções estampadas para cozinha e mesa posta em seu site oficial e canais públicos.',
    whatsapp: '5516997251412',
    url: 'https://www.sakuraenxovais.com.br/',
  },
  {
    id: 'croche-vitoria-coberdrom',
    nome: 'Linha de coberdrom e mantas Crochê Vitória',
    categoria: 'decoracao',
    tecnica: 'Crochê, mantas, tapetes e decoração têxtil',
    artesa: 'Crochê Vitória',
    bairro: 'Centro',
    preco: 'Consulte no site oficial',
    motivo: 'losango',
    imagem: './imagens/reais/croche-vitoria-banner.png',
    destaque: false,
    descricao:
      'Loja de Ibitinga com site próprio para tapetes, mantas, jogos de banheiro, almofadas, toalhas e caminhos de mesa em crochê.',
    whatsapp: '551633413868',
    url: 'https://www.crochevitoria.com.br/',
  },
  {
    id: 'toalhas-feira-artesanal',
    nome: 'Toalhas bordadas da Feirinha da Matriz',
    categoria: 'banho',
    tecnica: 'Bordado em toalhas e acabamento artesanal',
    artesa: 'Feirinha de Artesanato',
    artesao_id: 'dona-maria-rechileu',
    bairro: 'Centro',
    preco: 'Negociação direta na banca',
    motivo: 'listras',
    imagem: './imagens/toalhas-bordadas.jpeg',
    destaque: false,
    descricao:
      'Registro local de toalhas bordadas vendidas na Feirinha de Artesanato, usado como exemplo real da vitrine comunitária.',
    whatsapp: '5516996168629',
  },
  {
    id: 'aventais-feira-artesanal',
    nome: 'Aventais bordados e utilidades de cozinha',
    categoria: 'mesa',
    tecnica: 'Aplicação, bordado e costura criativa',
    artesa: 'Feirinha de Artesanato',
    artesao_id: 'lucia-pintura',
    bairro: 'Centro',
    preco: 'Negociação direta na banca',
    motivo: 'floral',
    imagem: './imagens/aventais-bordados.jpeg',
    destaque: false,
    descricao:
      'Foto real da Feirinha da Matriz com aventais bordados, peças de cozinha e costura criativa expostas em banca local.',
    whatsapp: '5516996168629',
  },
]
