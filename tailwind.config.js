/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblack: "#020816",
        darkbackground: "#1d1d1f",
        // primary: "#CCAF53",
        primary: "#0088CC",
      },
      backgroundImage: {
        footerBackground: "radial-gradient(circle, rgba(0,100,158,1) 0%, rgba(2,8,22,1) 58%);",
        footerBackgroundLight: "radial-gradient(circle, rgba(230,244,255,1) 0%, rgba(179,217,255,1) 40%, rgba(0,136,204,0.7) 100%);",
        background: "radial-gradient(circle, rgba(0,100,158,1) 0%, rgba(2,8,22,1) 80%);",
        backgroundLight: "radial-gradient(circle, rgba(240,248,255,1) 0%, rgba(204,229,255,1) 60%, rgba(0,136,204,0.5) 100%);",
        lightGradient: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(230,244,255,1) 50%, rgba(179,217,255,1) 100%);",
      },
    },
  },
  plugins: [],
};
