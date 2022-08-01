import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from '~/env';

export function setupSwagger(app: INestApplication) {
  const builder = new DocumentBuilder();
  builder.setTitle(env.SWAGGER_TITLE);
  builder.addBearerAuth();

  const document = SwaggerModule.createDocument(app, builder.build());
  SwaggerModule.setup(env.SWAGGER_PATH, app, document, {
    customSiteTitle: env.SWAGGER_TITLE,
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
}
