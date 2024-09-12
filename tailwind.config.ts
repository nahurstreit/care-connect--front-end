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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbarBgColor: 'rgba(242, 240, 240, 1)',
        navbarSelectedColor: 'rgba(239, 83, 86, 1)'
      },
    },
  },
  plugins: [],
};
export default config;
