/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "66v": "66vh",
      },
      screens: {
        ph: {
          min: "640px",
        },
        tb: {
          min: "768px",
        },
        emt: {
          min: "1024px",
        },
        dt: {
          min: "1280px",
        },
        ldt: {
          min: "1536px",
        },
        max_dt: {
          min: "1920px",
        },
      },
    },
  },
  plugins: [],
};
