/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#a4f9bd",

        secondary: "#dc1df2",

        accent: "#57db15",

        neutral: "#1E172B",

        base: "#FFFFFF",

        info: "#9FCCEF",

        success: "#51E1A7",

        warning: "#DB920A",

        error: "#FB4B77",
      },
    },
  ],
  plugins: [require("daisyui")],
};
