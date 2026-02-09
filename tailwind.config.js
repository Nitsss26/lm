/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1a237e', // Royal Blue from Logo
                    50: '#e8eaf6',
                    100: '#c5cae9',
                    500: '#1a237e',
                    600: '#151b63',
                    700: '#0d1142',
                },
                secondary: {
                    DEFAULT: '#ff6f00', // Saffron from Logo
                    50: '#fff8e1',
                    100: '#ffecb3',
                    500: '#ff8f00',
                    600: '#ff6f00',
                    700: '#e65100',
                },
                accent: {
                    green: '#2e7d32', // Green from Logo
                    red: '#c62828', // Red from Logo
                },
                neutral: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                '3d': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 -4px 4px rgba(0, 0, 0, 0.1)',
                'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
                'card-hover': '0 20px 40px -5px rgba(26, 35, 126, 0.1)',
            }
        },
    },
    plugins: [],
}
