module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        handytheme: {
          primary: "#fc6401",
          secondary: "#C7EFCF",
          accent: "#f7c02d",
          neutral: "#3d4451",
          "base-100": "#F9F9FB",
        },
      },
      "lofi",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
