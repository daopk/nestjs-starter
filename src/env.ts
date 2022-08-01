import { defineEnv, num, str } from '@daopk/env';

export const env = defineEnv({
  NODE_ENV: str(),

  HOST: str({ default: '0.0.0.0', devDefault: 'localhost' }),
  PORT: num({ default: 3000 }),
});
