import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                danger: 'var(--danger)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: 'var(--primary)',
                    secondary: '#9333ea',
                    accent: '#22c55e',
                    neutral: '#111827',
                    'base-100': '#c327e8',
                },
            },
        ],
    },
} satisfies Config;
