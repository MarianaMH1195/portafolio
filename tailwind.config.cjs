/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
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
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
