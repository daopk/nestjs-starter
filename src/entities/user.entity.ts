import { Entity } from '@mikro-orm/core';
import { WrappedEntity } from '~/core/entities/wrapped.entity';

@Entity()
export class User extends WrappedEntity<User> {}
