export function linkWhatsApp(numero, mensagem) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}

export function mensagemPeca(nomePeca) {
  return `Olá! Vi "${nomePeca}" no catálogo Ibitinga Ponto a Ponto e gostaria de saber mais.`
}

export function mensagemGeral() {
  return 'Olá! Cheguei pelo catálogo Ibitinga Ponto a Ponto e gostaria de mais informações sobre bordados em Ibitinga.'
}
