const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
	.react('resources/js/patients/app.js', 'public/js/patients/')
	.sass('resources/sass/app.scss', 'public/css')
	.sass('resources/sass/patients/app.scss', 'public/css/patients/')

/*
mix.react('resources/js/app.js', 'public/js')
.react('resources/js/superadmin/app.js', 'public/js/superadmin/')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/superadmin/app.scss', 'public/css/superadmin/');
 */