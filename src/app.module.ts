import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { AppController } from '~/app.controller';
import mikroOrmConfig from '~/mikro-orm.config';

@Module({
    imports: [MikroOrmModule.forRoot(mikroOrmConfig)],
    controllers: [AppController],
})
export class AppModule {}
