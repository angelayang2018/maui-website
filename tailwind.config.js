/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 25s linear infinite",
        slide2: "slide2 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slide2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      minWidth: {
        "1/2": "50%",
      },
      transitionTimingFunction: {
        hesistant: "cubic-bezier(.4,0,.2,1)",
      },
      screens: {
        "large-monitor": "1150px",
        "md-lg": "1084px",
        "medium-monitor": "900px",
        "small-phone": "450px",
      },
      backgroundImage: {
        maui: "url('https://i.ibb.co/dQ9xmk9/background.webp')",
        "vista-home": "url('https://i.ibb.co/BCm55mQ/maui-vista-home.webp')",
        banner: "url('https://i.ibb.co/p26x55r/banner.png')",
        beach: "url('https://i.ibb.co/Q9zMtRM/beach.png')",
        whale: "url('https://i.ibb.co/3T8Ygr5/whale.png')",
      },
      colors: {
        "dark-sky-blue": "#5B668B",
        "darker-sky-blue": "#4B5472",
        "peach-pink": "#F0B099",
        "golden-sun": "#CF9E3E",
        "dark-golden-sun": "#C08D29",
        sand: "#FBF6EB",
        "neutral-gray": "#9D9A9A",
      },
      borderWidth: {
        DEFAULT: "1px",
        0.5: "0.5px",
      },
      height: {
        0.5: "0.5px",
      },
    },
  },
  plugins: [],
};
