import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from '~/env';

export function setupSwagger(app: INestApplication) {
    if (!env.SWAGGER_PATH) {
        return;
    }

    const config = new DocumentBuilder();

    env.SWAGGER_SERVERS.forEach((server) => {
        config.addServer(server);
    });

    const documentFactory = () => SwaggerModule.createDocument(app, config.build());
    SwaggerModule.setup(env.SWAGGER_PATH, app, documentFactory, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
}
