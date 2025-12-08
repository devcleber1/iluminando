/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Fredoka', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        menu: ['Montserrat', 'sans-serif'],
      },
      // Otimizações de performance
      colors: {
        // Usar valores nomeados para reduzir CSS
        primary: '#ffce26',
      },
      screens: {
        // Mobile first approach
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
  // Otimizações de build
  safelist: [
    // Incluir classes dinamicamente usadas
    'text-yellow-500',
    'text-white',
    'bg-yellow-500',
    'hover:brightness-95',
  ],
  corePlugins: {
    // Desativar plugins não utilizados
    appearance: false,
    backfaceVisibility: false,
    backgroundAttachment: false,
    backgroundBlendMode: false,
    backgroundOrigin: false,
    backgroundPosition: false,
    borderCollapse: false,
    borderSpacing: false,
    boxDecorationBreak: false,
    boxSizing: false,
    clear: false,
    colorScheme: false,
    columns: false,
    contentVisibility: false,
    cursor: false,
    mixBlendMode: false,
    mixBlendMode: false,
    resize: false,
    scrollBehavior: false,
    scrollMargin: false,
    scrollPadding: false,
    scrollSnapAlign: false,
    scrollSnapStop: false,
    scrollSnapType: false,
    textDecoration: false,
    textDecorationColor: false,
    textDecorationStyle: false,
    textDecorationThickness: false,
    textUnderlineOffset: false,
    touchAction: false,
    transformOrigin: false,
    userSelect: false,
    willChange: false,
    wordBreak: false,
  },
}