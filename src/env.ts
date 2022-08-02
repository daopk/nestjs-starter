import { defineEnv, num, str } from '@daopk/env';

export const env = defineEnv({
  NODE_ENV: str(),

  HOST: str({ default: '0.0.0.0', devDefault: 'localhost' }),
  PORT: num({ default: 3000 }),

  DB_TYPE: str({ default: 'mongo', choices: ['mongo', 'mysql', 'mariadb', 'postgresql', 'sqlite', 'better-sqlite'] }),
  DB_URI: str({ desc: 'Database connection string' }),

  SWAGGER_PATH: str({ default: '/api/docs' }),
  SWAGGER_TITLE: str({ default: 'API' }),
});
