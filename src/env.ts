import { arrStr, defineEnv, num, str } from '@daopk/env';

export const env = defineEnv({
  NODE_ENV: str(),

  HOST: str({ default: '0.0.0.0', devDefault: 'localhost' }),
  PORT: num({ default: 3000 }),

  API_PREFIX: str({ default: '/' }),

  CORS_ORIGINS: arrStr({ default: [] }),

  DB_TYPE: str({ default: 'mongo', choices: ['mongo', 'mysql', 'mariadb', 'postgresql', 'sqlite', 'better-sqlite'] }),
  DB_URI: str({ desc: 'Database connection string' }),
  /**
   * Result cache expiration in milliseconds
   */
  DB_RESULT_CACHE: num({ default: 10_000 }),

  REDIS_HOST: str({ default: 'localhost' }),
  REDIS_PORT: num({ default: 6379 }),
  REDIS_PASSWORD: str({ default: '' }),
  REDIS_DB: num({ default: 0 }),
  REDIS_PREFIX: str({ desc: 'Redis key prefix' }),

  JWT_SECRET: str({ desc: 'JWT secret' }),
  /**
   * JWT expiration time (default: 1 day)
   */
  JWT_TTL: str({ default: '1d', docs: 'https://github.com/vercel/ms' }),

  SWAGGER_PATH: str({ default: '/api/docs' }),
  SWAGGER_TITLE: str({ default: 'API' }),
});
