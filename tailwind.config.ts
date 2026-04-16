/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Ключи 'inter' и 'caramel' должны совпадать с классами font-inter и font-caramel
                'inter': ['Inter', 'sans-serif'],
                'caramel': ['Caramel', 'cursive'],
            },
            animation: {
                marquee: "marquee 20s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" }
                }
            }
        },
    },
    plugins: [],
}