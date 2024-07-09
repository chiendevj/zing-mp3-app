module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#e7ecec',
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8',
        'main-500': '#0e8080',
      },
      colors: {
        'main-100': '#e7ecec',
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8',
        'main-500': '#0e8080',
      },
      keyframes: {
        'slide-right': {
          '0%': {
            transform: 'translateX(-500px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(500px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 0.5s ease-in-out',
        'slide-left': 'slide-left 0.5s ease-in-out',
      }
    },
    screens: {
      '1200': '1200px',
    }
  },
  plugins: [],
}
