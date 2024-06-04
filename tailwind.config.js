/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#ff0000', // red
        'gradient-end': '#000000', // black
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
    },
    screens: {
      'lg': '1025px',
    },
  },
  plugins: [],
}

