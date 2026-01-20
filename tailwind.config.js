/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a', // Deep charcoal, close to black but softer
                surface: '#1e1e1e',    // VS Code Editor Background
                surfaceLight: '#252526', // VS Code Sidebar
                primary: '#d4d4d4',    // VS Code Default Text
                secondary: '#a1a1aa',  // Keep as subtle grey
                border: '#1f1f1f',

                // VS Code Syntax Colors
                vscode: {
                    bg: '#1e1e1e',
                    sidebar: '#252526',
                    blue: '#569cd6',    // Keywords, Functions
                    teal: '#4ec9b0',    // Types, Classes
                    orange: '#ce9178',  // Strings
                    green: '#6a9955',   // Comments
                    purple: '#c586c0',  // Control Flow
                    yellow: '#dcdcaa',  // Functions alias
                    gray: '#858585',    // Line numbers
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'blink': 'blink 1s step-end infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            }
        },
    },
    plugins: [],
}
