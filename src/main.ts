import { NestFactory } from '@nestjs/core';
import { env } from '~/env';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT, env.HOST);
}

bootstrap();
