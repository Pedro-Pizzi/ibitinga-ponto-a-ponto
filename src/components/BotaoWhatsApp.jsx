import { IconeWhatsApp } from './Icones.jsx'
import { linkWhatsApp } from '../lib/whatsapp.js'

export default function BotaoWhatsApp({ numero, mensagem, children, className = '', rotulo }) {
  return (
    <a
      href={linkWhatsApp(numero, mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotulo}
      className={
        'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#1FA855] px-5 py-3 ' +
        'font-bold text-white shadow-carta transition-colors hover:bg-[#178a44] ' +
        className
      }
    >
      <IconeWhatsApp className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </a>
  )
}
