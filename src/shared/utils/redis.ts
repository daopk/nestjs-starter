import { RedisOptions } from 'ioredis';
import { env } from '~/env';

export function getRedisOptions(): RedisOptions {
  return {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    password: env.REDIS_PASSWORD,
    db: env.REDIS_DB,
    keyPrefix: env.REDIS_PREFIX,
  };
}
