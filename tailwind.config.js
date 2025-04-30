/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-poppins)', 'sans-serif'],
          exo: ['var(--font-exo)', 'sans-serif'],
          geist: ['var(--font-geist-sans)', 'sans-serif'],
          mono: ['var(--font-geist-mono)', 'monospace'],
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  };
  