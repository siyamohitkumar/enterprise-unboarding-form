module.exports = {
  theme: {
    extend: {
      boxShadow: {
        "custom-deep":
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;",
      },
    },
  },
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [],
};
