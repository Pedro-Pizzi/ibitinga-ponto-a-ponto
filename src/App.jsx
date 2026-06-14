import Cabecalho from './components/Cabecalho.jsx'
import Hero from './components/Hero.jsx'
import Catalogo from './components/Catalogo.jsx'
import Lojas from './components/Lojas.jsx'
import Eventos from './components/Eventos.jsx'
import Turismo from './components/Turismo.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import SobreProjeto from './components/SobreProjeto.jsx'
import Rodape from './components/Rodape.jsx'
import { IconeWhatsApp } from './components/Icones.jsx'
import { linkWhatsApp, mensagemGeral } from './lib/whatsapp.js'

export default function App() {
  return (
    <>
      <a href="#conteudo" className="pular-conteudo">
        Pular para o conteúdo
      </a>

      <Cabecalho />

      <main id="conteudo">
        <Hero />
        <Catalogo />
        <Lojas />
        <Eventos />
        <Turismo />
        <ComoFunciona />
        <SobreProjeto />
      </main>

      <Rodape />

      <a
        href={linkWhatsApp('5516996168629', mensagemGeral())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o Turismo de Ibitinga no WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-carta-hover transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <IconeWhatsApp className="h-7 w-7" />
      </a>
    </>
  )
}
