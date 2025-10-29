/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HR Mode Colors
        hr: {
          primary: '#2563EB',
          secondary: '#475569',
          accent: '#0EA5E9',
          background: '#F8FAFC',
          text: '#1E293B',
          success: '#10B981',
        },
        // Developer Mode Colors
        dev: {
          primary: '#22D3EE',
          secondary: '#A78BFA',
          accent: '#34D399',
          background: '#0F172A',
          text: '#E2E8F0',
          code: '#F472B6',
          warning: '#FBBF24',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}
