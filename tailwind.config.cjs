/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#282c34',
        secondary: '#5865f2',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        }
      },
      animation: {
        appear : 'appear .5s ease-in-out forwards'
      },
      keyframes: {
        appear: {
          '0%' : { opacity: '0' },
          '100%' : { opacity: '1' }
        }
      },
      borderRadius: {
        '4xl' : '2rem'
      }

    },
  },
  plugins: [],
}
