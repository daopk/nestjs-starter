import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { ApiHideProperty } from '@nestjs/swagger';
import { WrappedEntity } from '~/core/entities/wrapped.entity';
import { Role } from './role.entity';

@Entity()
export class User extends WrappedEntity<User> {
  @Property({ unique: 'users.username_unique' })
  username: string;

  @Property({ hidden: true })
  @ApiHideProperty()
  password: string;

  @Property({ unique: 'users.email_unique' })
  email: string;

  @ManyToOne({ entity: () => Role, nullable: true })
  role?: Role;

  @Property()
  isActive: boolean;
}
