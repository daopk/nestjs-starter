import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Module } from '@nestjs/common';
import { AppController } from '~/app.controller';
import { env } from '~/env';

@Module({
    imports: [
        MikroOrmModule.forRoot({
            driver: PostgreSqlDriver,
            clientUrl: env.DB_CLIENT_URL,
            entities: ['dist/entities/*.entity.js'],
            debug: env.isDevelopment,
        }),
    ],
    controllers: [AppController],
})
export class AppModule {}
