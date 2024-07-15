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
        'main-600': '#32323d',
        'main-700': '#696969',
      },
      keyframes: {
        'slide-right': {
          '0%': {
            transform: 'translateX(-250px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(250px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ',
      },
      flex: {
        '4': '4 4 0%',
      }
    },
    screens: {
      '1300': '1300px',
    }
  },
  plugins: [],
}
