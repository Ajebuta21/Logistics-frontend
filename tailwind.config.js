/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        secondary: "#000000",
      },
      backgroundImage: {
        home: "url('./assets/backgrounds/truck.jpg')",
        ship: "url('./assets/backgrounds/shipping.jpg')",
        admin: "url('./assets/backgrounds/admin.jpg')",
        air: "url('./assets/backgrounds/air.jpg')",
        land: "url('./assets/backgrounds/land.jpg')",
        sea: "url('./assets/backgrounds/sea.jpg')",
      },
      fontSize: {
        xxs: ["0.55rem", "0.75rem"],
        xss: ["0.65rem", "0.75rem"],
      },
    },
  },
  plugins: [],
};
