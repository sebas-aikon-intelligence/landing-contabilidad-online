import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF6B00',
        'brand-orange-light': '#FF8C3A',
        'brand-amber': '#F59E0B',
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 1.8s infinite',
        'scroll-logos': 'scroll-logos 35s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'count-bar': 'count-bar 1.4s cubic-bezier(0.16,1,0.3,1) forwards',
        'processing': 'processing 1.2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'scroll-logos': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'count-bar': {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        processing: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      boxShadow: {
        'orange-sm': '0 4px 14px rgba(255,107,0,0.2)',
        'orange-md': '0 8px 25px rgba(255,107,0,0.3)',
        'orange-lg': '0 16px 40px rgba(255,107,0,0.35)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,107,0,0.12)',
      },
    },
  },
  plugins: [],
}

export default config
