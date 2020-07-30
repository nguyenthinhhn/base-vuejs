import {
    cleanEnv, str, url, host, port,
} from 'envalid';

const validEnv = cleanEnv(process.env, {
    APP_ENV: str({
        devDefault: 'local',
        desc: 'Application env',
    }),

    APP_URL: url({
        desc: 'App url',
    }),

    APP_NAME: str({
        desc: 'App name',
        default: 'Account Mapper',
    }),

    HOST: host({
        default: '0.0.0.0',
        desc: 'Application host',
    }),

    PORT: port({
        default: 3000,
        desc: 'Application port',
    }),

    API_BASE_URL: str({
        default: '/api',
        desc: 'API rewrite entrypoint',
    }),
}, {
    strict: true,
});

export const {
    APP_ENV,
    APP_URL,
    APP_NAME,
    HOST,
    PORT,
    API_BASE_URL,
    isDev,
    isProduction,
} = validEnv;
