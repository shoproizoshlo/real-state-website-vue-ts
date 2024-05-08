/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-color": "hsl(228, 66%, 53%)",
        "first-color-alt": "hsl(228, 66%, 47%)",
        "first-color-light": "hsl(228, 62%, 59%)",
        "first-color-lighten": "hsl(228, 100%, 97%)",
        "second-color": "hsl(25, 83%, 53%)",
        "title-color": "hsl(228, 57%, 28%)",
        "text-color": "hsl(228, 15%, 50%)",
        "text-color-light": "hsl(228, 12%, 75%)",
        "border-color": "hsl(228, 99%, 98%)",
        "body-color": "#fff",
        "container-color": "#fff",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "biggest-font-size": "2.25rem",
        "biggest-font-size-large": "4rem",
        "h1-font-size": "1.5rem",
        "h1-font-size-large": "2.25rem",
        "h2-font-size": "1.25rem",
        "h2-font-size-large": "1.5rem",
        "h3-font-size": "1rem",
        "h3-font-size-large": "1.25rem",
        "normal-font-size": "0.938rem",
        "normal-font-size-large": "1rem",
        "small-font-size": "0.813rem",
        "small-font-size-large": "0.875rem",
        "smaller-font-size": "0.75rem",
        "smaller-font-size-large": "0.813rem",
      },
      fontWeight: {
        "font-medium": "500",
        "font-semi-bold": "600",
      },
      zIndex: {
        "z-tooltip": "10",
        "z-fixed": "100",
      },
    },
  },
  plugins: [],
};
