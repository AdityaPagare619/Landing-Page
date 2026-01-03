/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Deep Indigo
        secondary: "#818CF8",
        accent: "#FCD34D", // Warm yellow for highlights
        sage: "#84A98C", // Muted Sage
        "sage-light": "#CAD2C5",
        "background-light": "#FFFBF5", // Warm off-white
        "background-dark": "#1F2937", // Dark gray/blue for dark mode
        "card-light": "#FFFFFF",
        "card-dark": "#374151",
        "text-main-light": "#1F2937",
        "text-main-dark": "#F3F4F6",
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
      },
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
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
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
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
        }
      }
    },
  },
  plugins: [],
}
