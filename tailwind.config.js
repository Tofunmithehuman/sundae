/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0B99FA',
        secondary: '#B202EC', 
        background: '#0F0619',
        success: '#24A69A',
        error: '#EE534F',
      },
      keyframes: {
        upDown: {
          "0%, 100%":{
            transform:'translateY(0)'
          },
          "50%":{
            transform:'translateY(1rem)'
          },
        }
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

