const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                indigo: colors.indigo,
                fuschia: colors.fuschia,
                'pallete1': '#80BEF5',
                'pallete2': '#C3D3DB',
                'pallete3': '#E2A184',
                'palletefont': '#252222'
            },
            backgroundImage: {
                'header': "url('../img/bg-header.png')",
                'middle': "url('../img/bg-middle.png')",
                'footer': "url('../img/bg-footer.png')",
                'login': "url('../img/bg-login.png')"
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['hover'],
            borderStyle: ['hover', 'active', 'focus'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
