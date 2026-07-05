/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          bg: '#0d1117',
          panel: '#161b22',
          text: '#c9d1d9',
          muted: '#8b949e',
          primary: '#238636',
          primaryHover: '#2ea043',
          secondary: '#161b22',
          accent: '#58a6ff',
          border: '#30363d'
        }
      },
      borderRadius: {
        'crisp': '6px',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
