import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '~/core/entities/base.entity';

@Entity()
export class Role extends BaseEntity {
  @Property({ unique: 'roles.name_unique' })
  name: string;

  @Property()
  isActive: boolean;
}
