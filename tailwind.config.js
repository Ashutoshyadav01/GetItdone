export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',   // Slate-800 (dark blueish)
        secondary: '#3b82f6', // Blue-500
        accent: '#38bdf8',    // Sky-400
         danger: '#dc2626', 
         dangerDark: '#b91c1c',
      },
    },
  },
  plugins: [],
}
