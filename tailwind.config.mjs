import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f2ff',
          100: '#e8e6ff',
          200: '#cfcaff',
          300: '#b6aeff',
          400: '#9d92ff',
          500: '#6C5CE7',
          600: '#5a4ec1',
          700: '#4a419e',
          800: '#3a337b',
          900: '#2a2558'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      }
    }
  },
  plugins: [typography()]
}
