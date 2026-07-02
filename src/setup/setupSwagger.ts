import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

import { env } from '~/env';

export function setupSwagger(app: INestApplication) {
    if (!env.SWAGGER_PATH) {
        return;
    }

    const config = new DocumentBuilder();

    config.setTitle(env.SWAGGER_TITLE);
    env.SWAGGER_SERVERS.forEach((server) => {
        config.addServer(server);
    });

    const document = SwaggerModule.createDocument(app, config.build());

    app.use(
        env.SWAGGER_PATH,
        apiReference({
            content: document,
            withFastify: true,
            persistAuth: true,
            hideClientButton: true,
            showDeveloperTools: 'never',
            theme: 'bluePlanet',
        }),
    );
}
