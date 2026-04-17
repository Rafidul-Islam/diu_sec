export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(circle at top left, rgba(56, 189, 248, 0.14), transparent 45%), radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.16), transparent 30%)",
      },
    },
  },
  plugins: [],
};
