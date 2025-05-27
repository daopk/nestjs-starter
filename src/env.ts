import { arrStr, defineEnv, num, str } from '@daopk/env';

export const env = defineEnv({
    NODE_ENV: str(),

    SERVER_PORT: num({ default: 3000 }),
    SERVER_HOST: str({ default: '0.0.0.0', devDefault: '127.0.0.1' }),

    SWAGGER_PATH: str({ default: '', devDefault: '/docs' }),
    SWAGGER_SERVERS: arrStr({ default: [] }),

    CORS_ORIGINS: arrStr<string[]>({ default: [] }),
});
