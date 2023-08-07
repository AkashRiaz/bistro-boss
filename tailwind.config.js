/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f7de4f",

          secondary: "#f7df8a",

          accent: "#8093e5",

          neutral: "#1B1820",

          "base-100": "#F9FAFA",

          info: "#8DACDD",

          success: "#21D47D",

          warning: "#F8D268",

          error: "#EE716D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
