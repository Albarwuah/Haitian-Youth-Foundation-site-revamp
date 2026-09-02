import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        haiti: {
          navy:     '#003F88',
          red:      '#CE1126',
          gold:     '#D4AF37',
          offwhite: '#FAF7F2',
          charcoal: '#1A1A2E',
        },
        background: {
          light: '#FAF7F2',
          dark:  '#1A1A2E',
        },
      },
      
      backgroundImage: {
        donatebg: 'url("/gallery/boy.jpg")',
      },
    
    },
  
  },
  plugins: [],
}

export default config