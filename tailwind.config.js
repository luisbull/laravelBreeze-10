import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'company': {
                    100: '#87F5E7',
                    200: '#6AD8CB',
                    300: '#4BBCAF',
                    400: '#28A195',
                    DEFAULT: '#0D9488', // Base Color
                    600: '#00867B',
                    700: '#006D62',
                    800: '#00544A',
                    900: '#003C34',
                  },
            },
        },
    },

    plugins: [forms],
};
