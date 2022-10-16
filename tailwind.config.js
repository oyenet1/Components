module.exports = {
  mode: "jit",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url(/images/done.jpg)",
        dove: "url(/images/dove.jpg)",
        pigeon: "url(/images/pigeon.jpg)",
        flowers: "url(/images/flowers.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
