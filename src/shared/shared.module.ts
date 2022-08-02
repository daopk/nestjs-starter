import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Global, Module } from '@nestjs/common';
import { env } from '~/env';

@Global()
@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: env.DB_TYPE,
      clientUrl: env.DB_URI,
      entities: ['dist/**/*.entity.js'],
      debug: env.isDev,
      ensureIndexes: true,
    }),
  ],
})
export class SharedModule {}
