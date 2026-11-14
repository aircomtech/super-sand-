import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#087A35",
          "green-hover": "#06632B",
          "green-light": "#E8F5E9",
          "green-muted": "#1F9D55",
          dark: "#004B2D",
          "dark-deep": "#003822",
          charcoal: "#17231D",
          yellow: "#F4C928",
          "yellow-hover": "#E2B81C",
          sand: "#D8C49D",
          "sand-light": "#F7F5F0",
          grey: "#F5F7F5",
          "grey-border": "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'brand': '0 10px 30px -5px rgba(8, 122, 53, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 32px rgba(8, 122, 53, 0.18)',
      }
    },
  },
  plugins: [],
};
export default config;
