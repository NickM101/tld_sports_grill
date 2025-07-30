/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // amber-400
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-900
        primary: {
          DEFAULT: 'var(--color-primary)', // gray-800
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // amber-400
          foreground: 'var(--color-secondary-foreground)', // gray-900
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-600
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)', // gray-500
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // orange-500
          foreground: 'var(--color-accent-foreground)', // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // gray-900
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // gray-900
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // yellow-400
          foreground: 'var(--color-warning-foreground)', // gray-900
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)', // white
        },
        // Brand-specific colors
        surface: 'var(--color-surface)', // gray-100
        'text-primary': 'var(--color-text-primary)', // gray-900
        'text-secondary': 'var(--color-text-secondary)', // gray-500
        'cta-hover': 'var(--color-cta-hover)', // amber-600
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        oswald: ['Oswald', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'clamp-xl': 'clamp(1.8rem, 4vw, 3.2rem)',
        'clamp-lg': 'clamp(1.5rem, 3vw, 2.5rem)',
        'clamp-md': 'clamp(1.2rem, 2.5vw, 1.8rem)',
      },
      letterSpacing: {
        'tight-premium': '-0.02em',
      },
      lineHeight: {
        'tight-premium': '1.1',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        lg: '8px',
        md: '6px',
        sm: '4px',
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(45, 45, 45, 0.08)',
        'premium-lg': '0 20px 40px rgba(244, 166, 64, 0.15)',
        'cta': '0 8px 25px rgba(244, 166, 64, 0.3)',
      },
      animation: {
        'flame-pulse': 'flame-pulse 2s ease-in-out infinite',
        'sports-pulse': 'sports-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'flame-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.02)',
            filter: 'brightness(1.1)',
          },
        },
        'sports-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'scale(1.01)',
            opacity: '1',
          },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'premium': '2px',
      },
      gridTemplateColumns: {
        'asymmetric': '1fr 1.2fr 0.8fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}