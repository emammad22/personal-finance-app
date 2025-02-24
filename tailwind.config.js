/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
            primary: "#a3e635",
            primaryLight: "#0ea5e9",
            primaryDark: "#0369a1",
            text: "#fff",
            textLight: "#e5e5e5",
            textLighter: "#d4d4d4",
            white: "#fff",
            black: "#000",
            rose: "#ef4444",
            green: "#16a34a",
            neutral50: "#fafafa",
            neutral100: "#f5f5f5",
            neutral200: "#e5e5e5",
            neutral300: "#d4d4d4",
            neutral350: "#CCCCCC",
            neutral400: "#a3a3a3",
            neutral500: "#737373",
            neutral600: "#525252",
            neutral700: "#404040",
            neutral800: "#262626",
            neutral900: "#171717",
          },
      },
    },
    plugins: [],
  }