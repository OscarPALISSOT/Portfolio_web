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
        roboto: ['var(--Geist-Mono)', 'sans-serif'],
      },
      transitionProperty: {
        'cursor': 'height, width, border-color',
      }
    },
  },
  plugins: [],
} satisfies Config;
