/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0f172a', // pizarra / grafito - fondo principal
          surface: '#141f38', // tarjetas
          surface2: '#1b2942', // tarjetas hover / paneles elevados
          border: '#263449',
          cyan: '#06b6d4', // acuático / interactivo
          'cyan-dark': '#0e7490',
          orange: '#f97316', // vertical / alerta técnica outdoor
          'orange-dark': '#c2410c',
          danger: '#ef4444', // v5 / muy comprometido
        },
      },
      fontFamily: {
        display: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(0,0,0,0.45)',
        glow: '0 0 0 1px rgba(6,182,212,0.4), 0 0 24px -4px rgba(6,182,212,0.35)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 50% 0%, rgba(6,182,212,0.12), transparent 60%)',
      },
    },
  },
  plugins: [],
};
