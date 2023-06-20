/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "hsl(224, 30%, 9%)",
        bgSignInOutNavBarColor: "hsl(223, 36%, 13%)",
      },
    },
  },
  plugins: [],
};
