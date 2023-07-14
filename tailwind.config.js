/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "index.html"],

  theme: {
    extend: {
      colors: {
        primary: "#14279B",
        secondary: {
          100: "#5C7AEA",
          200: "#3D56B2",
        },
      },
      fontFamily: {
        lobster: ["Lobster"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
