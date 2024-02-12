import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                Garamond: ['Cormorant Garamond', 'serif'],
            },
            colors:{
                "primary-blue":"#323691",
                "primary-red": "#EC242E",
                "dark-blue": "#001938",
                "darker-blue": "#000E1F",
                "whatsapp-green": '#05f66f',
                "whatsapp-dark-green": '#18864b',
            },
        },
    },

    plugins: [forms],
};
