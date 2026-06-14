/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linho: '#FBF6EE',
        papel: '#FFFDF9',
        tinta: '#2B2117',
        'tinta-suave': '#5C5142',
        terracota: '#BD5D43',
        musgo: '#2E7D6B',
        ocre: '#B0832B',
        anil: '#3F6CA6',
        ameixa: '#9A4A6E',
        // Cores novas da direcao visual B
        ouro: '#E6A300',
        marinho: '#111827',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        grotesk: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Mulish', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        carta: '0 1px 2px rgba(43,33,23,0.06), 0 8px 24px -12px rgba(43,33,23,0.18)',
        'carta-hover': '0 2px 4px rgba(43,33,23,0.08), 0 16px 40px -16px rgba(43,33,23,0.28)',
      },
    },
  },
  plugins: [],
}
