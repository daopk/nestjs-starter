import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Global, Module } from '@nestjs/common';
import { env } from '~/env';
import { RedisCacheAdapter } from './adapters/mikro-redis-cache.adapter';
import { getRedisOptions } from './utils/redis';

@Global()
@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: env.DB_TYPE,
      clientUrl: env.DB_URI,
      entities: ['dist/**/*.entity.js'],
      debug: env.isDev,
      ensureIndexes: true,
      resultCache: {
        adapter: RedisCacheAdapter,
        options: getRedisOptions(),
        expiration: env.DB_RESULT_CACHE,
      },
    }),
  ],
})
export class SharedModule {}
