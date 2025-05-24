import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from '~/app.module';
import { env } from '~/env';
import { setupSwagger } from '~/setup/setupSwagger';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

    setupSwagger(app);

    await app.listen(env.SERVER_PORT);
}
bootstrap();
