import { Entity } from '@mikro-orm/core';
import { BaseEntity } from '~/core/entities/base.entity';

@Entity()
export class Role extends BaseEntity {}
