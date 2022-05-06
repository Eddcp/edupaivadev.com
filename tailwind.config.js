const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#1E1E26',
      secondary: '#0F0D19'
    }),
    extend: {
      fontFamily: {
        sans: ['Bw Gradual', 'Open Sans', ...defaultTheme.fontFamily.sans],
        title: ['Bw Gradual', 'Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: '#FF0043',
        neutral: '#E9E7F5',
        'custom-black': '#1E1E26'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
