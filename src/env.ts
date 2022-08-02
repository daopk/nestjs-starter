import { arrStr, defineEnv, num, str } from '@daopk/env';

export const env = defineEnv({
  NODE_ENV: str(),

  HOST: str({ default: '0.0.0.0', devDefault: 'localhost' }),
  PORT: num({ default: 3000 }),

  API_PREFIX: str({ default: '/' }),

  CORS_ORIGINS: arrStr({ default: [] }),

  DB_TYPE: str({ default: 'mongo', choices: ['mongo', 'mysql', 'mariadb', 'postgresql', 'sqlite', 'better-sqlite'] }),
  DB_URI: str({ desc: 'Database connection string' }),

  JWT_SECRET: str({ desc: 'JWT secret' }),
  /**
   * JWT expiration time (default: 1 day)
   */
  JWT_TTL: str({ default: '1d', docs: 'https://github.com/vercel/ms' }),

  SWAGGER_PATH: str({ default: '/api/docs' }),
  SWAGGER_TITLE: str({ default: 'API' }),
});
