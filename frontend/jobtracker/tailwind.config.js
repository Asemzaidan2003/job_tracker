/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#22D3EE',
        background: '#0F172A',
        surface: '#1E293B',
        text: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
        },
        success: '#10B981',
        error: '#F43F5E',
        warning: '#F59E0B',
        info: '#38BDF8',
        border: '#334155',
        hoverOverlay: '#1E293B99',
      },
    },
  },
  plugins: [],
}

