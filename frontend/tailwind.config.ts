import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'primaryHover': 'var(--primaryHover)',
        'secondaryHover': 'var(--secondaryHover)',
        'background': 'var(--background)',
        'text': 'var(--text)',
        'textHover': 'var(--textHover)',
      },
      fontFamily: {
        geistMono: ['var(--Geist-Mono)', 'sans-serif'],
        vazirmatn: ['var(--Vazirmatn)', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        slideLeft: 'slide 20s infinite linear',
        slideRight: 'slide 20s infinite linear reverse',
      },
    },
  },
  plugins: [],
} satisfies Config;
