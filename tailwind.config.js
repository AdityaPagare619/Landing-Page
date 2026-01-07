/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A4CFA",
        secondary: "#FFB020",
        "primary-dark": "#4335D6",
        "accent-green": "#5BCB49",
        "accent-cyan": "#36D9D8",
        "background-light": "#FFFDF9",
        "background-dark": "#0B0A16",
        "card-light": "#FFFFFF",
        "card-dark": "#161525",
        "text-light": "#1F1F35",
        "text-dark": "#ECECFA",
        "text-muted-light": "#6B7280",
        "text-muted-dark": "#9CA3AF",
        "rankak-sage": "#8DA399",
        "rankak-indigo": "#4338ca",
        "rankak-amber": "#F59E0B",
        "accent-yellow": "#fbbf24",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        'xl': "1.5rem",
        '2xl': "2rem",
        '3xl': "3rem",
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(80, 70, 229, 0.4)',
        'soft-glow': '0 20px 40px -10px rgba(90, 76, 250, 0.15)',
        'card-float': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bloom': 'bloom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        bloom: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
