import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // ธีมใหม่: Modern + Mysterious + Cosmic
                'primary-dark': '#0f0a1c',      // Deep dark purple-blue
                'primary-purple': '#1a0f2e',    // Dark indigo
                'primary-accent': '#6d28d9',    // Vibrant purple
                'secondary-gold': '#fbbf24',    // Warm golden yellow
                'secondary-violet': '#a78bfa',  // Soft violet
                'accent-cyan': '#06b6d4',       // Cyan blue
                'accent-magenta': '#ec4899',    // Hot magenta
                'neon-violet': '#b624ff',       // Neon purple
                'neon-cyan': '#00ffff',         // Neon cyan
                'glow-purple': '#d946ef',       // Glowing purple
                'warm-tone': '#f97316',         // Modern orange
                'text-light': '#f5f3ff',        // Light lavender
                'text-muted': '#a0aec0',        // Muted gray-blue
                'glass-bg': 'rgba(15, 10, 28, 0.6)',
            },
            backgroundImage: {
                'gradient-cosmic': 'linear-gradient(135deg, #0f0a1c 0%, #1a0f2e 25%, #2d1b4e 50%, #1a0f2e 75%, #0f0a1c 100%)',
                'gradient-mystic': 'linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 50%, #6d28d9 100%)',
                'gradient-neon': 'linear-gradient(90deg, #b624ff 0%, #06b6d4 50%, #00ffff 100%)',
            },
            boxShadow: {
                'glow-purple': '0 0 20px rgba(182, 36, 255, 0.5)',
                'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
                'glow-magenta': '0 0 20px rgba(236, 72, 153, 0.5)',
                'neon': '0 0 10px rgba(182, 36, 255, 0.7), 0 0 20px rgba(6, 182, 212, 0.5)',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                'md': '8px',
                'lg': '12px',
                'xl': '16px',
                '2xl': '24px',
            },
            backdropBrightness: {
                '50': '.5',
                '75': '.75',
                '100': '1',
                '125': '1.25',
                '150': '1.5',
                '200': '2',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(182, 36, 255, 0.5)' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(182, 36, 255, 0.8)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
        },
    },
    plugins: [],
};

export default config;