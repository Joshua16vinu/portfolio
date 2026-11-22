/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Raw & Pure Classic Palette (Warm Stone / Editorial Alabaster)
                background: '#f2f0ea',    // Warm raw linen canvas
                surface: '#ffffff',       // Pure card background
                surfaceLight: '#ebe8e1',  // Muted stone section / pill
                surfaceDark: '#18181b',   // Solid ink accent
                primary: '#18181b',       // Deep ink primary text
                secondary: '#57534e',     // Warm stone secondary text
                muted: '#8c867f',         // Subtle stone caption
                border: '#dedbd2',        // Delicate hairline divider
                subtle: '#e6e3dc',

                // Accents
                accent: {
                    DEFAULT: '#18181b',
                    hover: '#27272a',
                    emerald: '#059669',
                    amber: '#b45309',
                },

                // Backward compatibility if referenced
                vscode: {
                    bg: '#ffffff',
                    sidebar: '#f2f0ea',
                    blue: '#18181b',
                    teal: '#059669',
                    orange: '#c2410c',
                    green: '#15803d',
                    purple: '#6b21a8',
                    yellow: '#b45309',
                    gray: '#78716c',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
            },
            boxShadow: {
                'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
                'card': '0 10px 30px -10px rgba(0, 0, 0, 0.06)',
                'arch': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
            }
        },
    },
    plugins: [],
}
