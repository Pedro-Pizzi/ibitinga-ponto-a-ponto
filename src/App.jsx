import Cabecalho from './components/Cabecalho.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Catalogo from './components/Catalogo.jsx'
import Lojas from './components/Lojas.jsx'
import Artesaos from './components/Artesaos.jsx'
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
        <Stats />
        <Artesaos />
        <Catalogo />
        <Lojas />
        <Eventos />
        <Turismo />
        <ComoFunciona />
        <SobreProjeto />
      </main>

      <Rodape />

      <a
        href={linkWhatsApp('5516982220435', mensagemGeral())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o Turismo de Ibitinga no WhatsApp"
        className="fixed bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-carta-hover transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      >
        <IconeWhatsApp className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </>
  )
}
