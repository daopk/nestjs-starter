import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { ApiHideProperty } from '@nestjs/swagger';
import { BaseEntity } from '@mikro-orm/core';

@Entity({ abstract: true })
export abstract class WrappedEntity<
  T extends WrappedEntity = WrappedEntity<any>,
  PK extends keyof T = '_id',
  P extends string = never,
> extends BaseEntity<T, PK, P> {
  @PrimaryKey()
  @ApiHideProperty()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
