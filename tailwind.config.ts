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
      darkRed: '#8B0000',        // Primary Dark Red
      accentRed: '#A52A2A',      // Accent Red
      backgroundDark: '#1C1C1C', // Dark Background
      lightGray: '#D3D3D3',      // Light Gray for text and borders
      offWhite: '#F0E6E6',       // Off-white for secondary text
      highlightRed: '#FF4500',   // Highlight Red for alerts/emphasis
      accentDark: '#2E2E2E',     // Dark Accent for dividers/shadows
      thirdDark: '#313338',      // Third Dark for hover effects
    },
  },
  },
  plugins: [],
};
export default config;
