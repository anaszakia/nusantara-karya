/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Primary vibrant orange
          600: '#ea580c', // Deep construction orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        surface: {
          light: '#f8fafc',
          card: '#ffffff',
          muted: '#f1f5f9',
          border: '#e2e8f0',
        },
        dark: {
          bg: '#0b0f19',
          card: '#111827',
          surface: '#1e293b',
          border: '#334155'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 12px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 8px 20px -4px rgba(0, 0, 0, 0.06)',
        'orange-glow': '0 10px 30px -5px rgba(249, 115, 22, 0.35)',
        'orange-sm': '0 4px 14px 0 rgba(249, 115, 22, 0.25)',
      }
    },
  },
  plugins: [],
}
