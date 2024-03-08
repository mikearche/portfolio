/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pastel: {
          primary: "#DBCDF0",
          secondary: "#C9E4DE",
          accent: "#C6DEF1",
          neutral: "#DBCDF0",
          "base-100": "#DBCDF0",
          info: "#0000ff",
          success: "#F7D9C4",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
    ],
  },
};
