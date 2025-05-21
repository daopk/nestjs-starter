import { defineEnv, num, str } from '@daopk/env';

export const env = defineEnv({
    NODE_ENV: str(),

    SERVER_PORT: num({ default: 3000 }),
});
