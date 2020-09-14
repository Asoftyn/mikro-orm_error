import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Options } from '@mikro-orm/core';
import { User } from './user/entities/user.entity';
import { BaseEntity } from './common/entities/base-entity.entity';

const config = {

    type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    dbName: 'database',
    entities: [User, BaseEntity],
    //entities: ['**/entities/*.entity.js'],
    //entitiesTs: ['**/entities/*.entity.ts'],
    debug: true,
    cache: {
        enabled: false
    },
    highlighter: new SqlHighlighter(),
    tsNode: true,
    metadataProvider: TsMorphMetadataProvider

} as Options;
export default config;