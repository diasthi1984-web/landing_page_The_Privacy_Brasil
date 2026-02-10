/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1a2b4a", // Deep Navy Blue
                secondary: {
                    start: "#0d3d3d", // Dark Teal
                    end: "#2d9d6f",   // Emerald Green
                },
                accent: "#b8d944",  // Electric Yellow-Green
                background: "#f8f9fa", // Off-white/Light Grey
                text: {
                    primary: "#1a2b4a",
                    secondary: "#7a7a7a", // Medium Grey
                }
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'circuit-pattern': "url('/circuit-board.svg')", // Placeholder, will use CSS gradient or SVG
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
