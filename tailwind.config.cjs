/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cosmic-night': '#0B0F1A',
                'nebula-violet': '#3B1E4F',
                'deep-ocean': '#0E3A4A',
                'cream-latte': '#F4E6D8',
                'sea-foam': '#7FCAC3',
                'star-pink': '#E6A6C9',
                'sunset-gold': '#F2B705',
                'coral-glow': '#FF7A5C',
                'coffee-brown': '#4B2E2A',
                'text-primary': '#F5F7FA',
                'text-secondary': '#C6C9D3',
                'text-dark': '#1C1E26',
            },
        },
    },
    plugins: [],
}
