import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-3-gr": "linear-gradient(90deg, #FFE76A 21%, #65C8FF 37%, #65C8FF 70%, #65C8FF 20.09%, #F00 20.1%)",
      },
      backgroundColor:{
        mainGray:"#292929",
      },
      colors: {
        mainGray: "#292929",
      },
      screens: {
        'mm': '430px', 
      },
    },
  },
  plugins: [],
}
export default config
