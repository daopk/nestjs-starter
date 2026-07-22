import { Migrator } from '@mikro-orm/migrations';
import { defineConfig } from '@mikro-orm/postgresql';

import { User } from '~/entities/user.entity';
import { env } from '~/env';

export default defineConfig({
    clientUrl: env.DB_CLIENT_URL,
    entities: [User],
    debug: env.isDevelopment,
    extensions: [Migrator],
    migrations: {
        path: 'dist/migrations',
        pathTs: 'src/migrations',
        emit: 'ts',
    },
});
