import { APP_URL, APP_NAME } from './env';

export default {
    meta: [
        {
            hid: 'og:title',
            property: 'og:title',
            content: APP_NAME,
        },
        {
            hid: 'og:description',
            property: 'og:description',
            content: '',
        },
        {
            hid: 'og:image',
            property: 'og:image',
            content: `${APP_URL}/icon.png`,
        },
        {
            hid: 'og:url',
            property: 'og:url',
            content: APP_URL,
        },
        {
            hid: 'og:type',
            property: 'og:type',
            content: 'website',
        },
        {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: APP_NAME,
        },
        {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary',
        },
    ],
};
