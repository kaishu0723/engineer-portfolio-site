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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    backgroundImage:{
      "intro-bg":"url('/images/tempIntro.png')",
      "start-bg":"url('/images/Preview.png')",
    },
  },
  plugins: [],
} satisfies Config;
