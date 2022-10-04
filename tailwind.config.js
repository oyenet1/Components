module.exports = {
  mode: "jit",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url(/images/done.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
