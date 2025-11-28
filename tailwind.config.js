/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                // MAIN BRAND COLORS
                flipzyOrange: "#ff6b2c",
                "flipzy-orange": "#ff6a00",
                "flipzy-orange-light": "#ff8a33",
                "flipzy-orange-dark": "#cc5400",

                flipzyBlue: "#0a0f1f",
                "flipzy-blue-light": "#162033",
                "flipzy-blue-dark": "#03060d",

                flipzyDark: "#06090f",
                "flipzy-dark-light": "#0d121b",

                // GRADIENT COLORS
                flipzyGradientStart: "#ff6a00",
                flipzyGradientMid: "#ff7f0a",
                flipzyGradientEnd: "#ff9d33",

                // TEXT NEUTRALS
                flipzyWhite: "#f5f5f7",
                flipzyGray: "#bbbbbb",
            },

            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
