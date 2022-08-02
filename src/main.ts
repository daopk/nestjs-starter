import { NestFactory } from '@nestjs/core';
import { AppModule } from '~/app.module';
import { env } from '~/env';
import { setupSwagger } from '~/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['warn'] });

  if (env.isDev) {
    setupSwagger(app);
  }

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  await app.listen(env.PORT, env.HOST);
}

bootstrap();
