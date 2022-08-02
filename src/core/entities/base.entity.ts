import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { ApiHideProperty } from '@nestjs/swagger';

@Entity({ abstract: true })
export abstract class BaseEntity {
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
