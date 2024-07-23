import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
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
        deepBluishBlack: "#0B0D17",
        skyBlue: "#D0D6F9",
      },
      fontFamily: {
        Barlow_Condensed: ["Barlow Condensed", "sans-serif"],
        Barlow: ["Barlow", "sans-serif"],
        Bellefair: ["Bellefair", "sans-serif"],
      },
      screens: {
        'sm': '250px',
        'md': '750px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      },
      spacing: {
        PreCustom: 'white-space: pre;',
      },
    },
  },
  plugins: [],
};
export default config;
