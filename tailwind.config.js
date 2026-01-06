/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A4CFA", // Vibrant Purple/Blue from the screenshots
        secondary: "#FFB020", // The warm yellow/orange used for highlights
        "primary-dark": "#4335D6",
        "accent-green": "#5BCB49", // Green for progress/success
        "accent-cyan": "#36D9D8", // Cyan for specific globes
        "background-light": "#FFFDF9", // Very light cream/white from screenshots
        "background-dark": "#0B0A16", // Deep dark background for dark mode
        "card-light": "#FFFFFF",
        "card-dark": "#161525",
        "text-light": "#1F1F35",
        "text-dark": "#ECECFA",
        "text-muted-light": "#6B7280",
        "text-muted-dark": "#9CA3AF",
        "rankak-sage": "#8DA399",
        "rankak-sage-light": "#E6F4F1",
        "rankak-indigo": "#4338ca",
        "rankak-indigo-deep": "#312e81",
        "rankak-indigo-light": "#6366f1",
        "rankak-amber": "#F59E0B",
        "rankak-offwhite": "#FFF9F2",
        "rankak-parchment": "#FEFCF5",
        "rankak-text": "#2D334A",
        "rankak-input": "#F3F4F6",
        "accent-yellow": "#fbbf24",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "Nunito", "Space Grotesk", "sans-serif"],
        body: ["Inter", "Quicksand", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      borderRadius: {
        'xl': "1.5rem",
        '2xl': "2rem",
        '3xl': "3rem",
        '4xl': '2.5rem',
        '5xl': '3rem',
        'portal': '5rem 5rem 2rem 2rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'button': '0 4px 0 0 rgba(0,0,0,0.1)',
        'button-hover': '0 2px 0 0 rgba(0,0,0,0.1)',
        'glow': '0 0 60px -15px rgba(79, 70, 229, 0.5)',
        'glow-hover': '0 0 30px rgba(99, 102, 241, 0.6)',
        'portal-depth': 'inset 0 0 60px rgba(67, 56, 202, 0.05)',
        'orb': 'inset 0 4px 10px rgba(255,255,255,0.3), 0 10px 20px rgba(67, 56, 202, 0.4)',
        'parchment': '0 10px 15px -3px rgba(168, 162, 158, 0.2), 0 4px 6px -2px rgba(168, 162, 158, 0.1)',
        'soft-glow': '0 20px 40px -10px rgba(90, 76, 250, 0.15)',
        'card-float': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'inner-highlight': 'inset 0 2px 0 rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'confetti': 'confetti 1s ease-out forwards',
        'portal-enter': 'portal-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(91, 80, 229, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(91, 80, 229, 0.6)' },
        },
        'portal-enter': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
