import favicon from './favicon';
import og from './og';
import { mergeWithArrayConcat } from './utils';

export default mergeWithArrayConcat({
    title: '',

    meta: [
        {
            hid: 'description',
            name: 'description',
            content: '',
        },
    ],

    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=vietnamese',
        },
    ],
}, favicon, og);
