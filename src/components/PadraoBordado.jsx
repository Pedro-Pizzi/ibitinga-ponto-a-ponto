// Arte ilustrativa em estilo "amostra de bordado" usada no lugar da foto real
// de cada peça. É gerada por código (SVG), então não depende de nenhum arquivo
// externo e nunca quebra. Quando houver fotos reais dos produtos, adicione um
// campo `imagem` no dado da peça e troque este componente por uma <img>.

const CORES = {
  mesa: '#BD5D43', // terracota
  cama: '#3F6CA6', // anil
  banho: '#2E7D6B', // musgo
  bebe: '#9A4A6E', // ameixa
  decoracao: '#B0832B', // ocre
}

// Um "X" de ponto-cruz
function PontoCruz({ x, y, s = 7, cor, opacity = 1 }) {
  return (
    <g stroke={cor} strokeWidth="2.2" strokeLinecap="round" opacity={opacity}>
      <line x1={x - s} y1={y - s} x2={x + s} y2={y + s} />
      <line x1={x - s} y1={y + s} x2={x + s} y2={y - s} />
    </g>
  )
}

function MotivoFloral({ cor }) {
  const cx = 150
  const cy = 110
  const petalas = Array.from({ length: 8 }, (_, i) => {
    const ang = (i / 8) * Math.PI * 2
    return { x: cx + Math.cos(ang) * 34, y: cy + Math.sin(ang) * 34 }
  })
  return (
    <g>
      {petalas.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="13" fill={cor} opacity="0.85" />
      ))}
      <circle cx={cx} cy={cy} r="18" fill="#FBF6EE" />
      <circle cx={cx} cy={cy} r="10" fill={cor} />
      {[60, 110, 160, 240].map((y, i) =>
        [50, 250].map((x) => (
          <PontoCruz key={`${i}-${x}`} x={x} y={y} cor={cor} opacity="0.5" />
        )),
      )}
    </g>
  )
}

function MotivoGeometrico({ cor }) {
  const linhas = [70, 110, 150]
  return (
    <g>
      {linhas.map((y, li) =>
        Array.from({ length: 9 }, (_, i) => (
          <PontoCruz
            key={`${li}-${i}`}
            x={40 + i * 28}
            y={y}
            cor={cor}
            opacity={li === 1 ? 0.95 : 0.55}
          />
        )),
      )}
    </g>
  )
}

function MotivoListras({ cor }) {
  const ys = [70, 100, 130, 160]
  return (
    <g stroke={cor} strokeWidth="6" strokeLinecap="round">
      {ys.map((y, i) => (
        <line
          key={i}
          x1="36"
          y1={y}
          x2="264"
          y2={y}
          strokeDasharray={i % 2 === 0 ? '2 14' : '14 10'}
          opacity={i % 2 === 0 ? 0.9 : 0.55}
        />
      ))}
    </g>
  )
}

function MotivoLosango({ cor }) {
  const pts = []
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 5; c++) {
      pts.push({ x: 60 + c * 45, y: 75 + r * 35 })
    }
  }
  return (
    <g stroke={cor} strokeWidth="2.4" fill="none">
      {pts.map((p, i) => (
        <rect
          key={i}
          x={p.x - 11}
          y={p.y - 11}
          width="22"
          height="22"
          transform={`rotate(45 ${p.x} ${p.y})`}
          opacity={i % 2 === 0 ? 0.85 : 0.45}
        />
      ))}
    </g>
  )
}

const MOTIVOS = {
  floral: MotivoFloral,
  geometrico: MotivoGeometrico,
  listras: MotivoListras,
  losango: MotivoLosango,
}

export default function PadraoBordado({ categoria, motivo = 'floral', className = '' }) {
  const cor = CORES[categoria] || CORES.mesa
  const Motivo = MOTIVOS[motivo] || MotivoFloral
  return (
    <svg
      viewBox="0 0 300 220"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="300" height="220" fill="#FFFDF9" />
      {/* trama de tecido ao fundo */}
      <g stroke="#2B2117" strokeWidth="1" opacity="0.05">
        {Array.from({ length: 22 }, (_, i) => (
          <line key={`v${i}`} x1={i * 14} y1="0" x2={i * 14} y2="220" />
        ))}
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 14} x2="300" y2={i * 14} />
        ))}
      </g>
      <Motivo cor={cor} />
      {/* moldura de ponto de costura */}
      <rect
        x="12"
        y="12"
        width="276"
        height="196"
        fill="none"
        stroke={cor}
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity="0.6"
        rx="6"
      />
    </svg>
  )
}
