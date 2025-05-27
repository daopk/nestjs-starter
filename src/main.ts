import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from '~/app.module';
import { env } from '~/env';
import { setupSwagger } from '~/setup/setupSwagger';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );

    const corsOrigins = new Set(env.CORS_ORIGINS);
    app.enableCors({
        origin: async (origin: string) => corsOrigins.has(origin),
    });

    setupSwagger(app);

    app.enableShutdownHooks();

    await app.listen(env.SERVER_PORT, env.SERVER_HOST);

    const url = await app.getUrl();
    Logger.debug(`Server is running on ${url}`, 'Bootstrap');
}

bootstrap();
