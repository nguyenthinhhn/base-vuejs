import path from 'path';

import head from './nuxt/head';
import {
    APP_ENV,
    HOST,
    PORT,
    APP_URL,
    API_BASE_URL,
    isProduction,
} from './nuxt/env';

export default {
    mode: 'spa',

    dev: !isProduction,

    srcDir: path.resolve(__dirname, 'app'),

    head,

    env: {
        APP_ENV,
        APP_URL,
        API_BASE_URL,
    },

    server: {
        host: HOST,
        port: PORT,
    },

    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~/assets/sass/tailwind.css',
        '~/assets/sass/app.scss',
    ],

    plugins: [
        '~/plugins/nuxt-client-init',
        '~/plugins/element-ui',
        '~/plugins/components',
    ],

    build: {
        postcss: {
            plugins: {
                tailwindcss: path.resolve(__dirname, './app/tailwind.config.js'),
            },
        },
    },

    modules: [
        '@nuxtjs/google-analytics',
    ],
};
