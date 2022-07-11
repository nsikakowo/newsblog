module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: {'max': '480px'},
      md: {'max':  '768px'},
      lg: {'max': '976px'},
      xl: {'max': '1440px'},
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px'
    },
    fontSize: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '18px',
      '5': '24px',
      '6': '48px',
      '7': '64px',
      '10': '32px'
    },
    extend: {
      fontFamily: {
        Montserrat : ["Montserrat"], 
      }
    },
  },
  plugins: [],
}