export function linkWhatsApp(numero, mensagem) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}

export function mensagemPeca(nomePeca) {
  return `Olá! Vi "${nomePeca}" no catálogo Ibitinga Ponto a Ponto e gostaria de saber mais.`
}

export function mensagemArtesao(nomeArtesao) {
  return `Olá ${nomeArtesao}! Vi seu perfil no Ibitinga Ponto a Ponto e gostaria de saber mais sobre seu trabalho artesanal.`
}

export function mensagemGeral() {
  return 'Olá! Cheguei pelo catálogo Ibitinga Ponto a Ponto e gostaria de mais informações sobre bordados em Ibitinga.'
}
