import { defineEntity, p } from '@mikro-orm/core';

const UserSchema = defineEntity({
    name: 'User',
    tableName: 'users',
    properties: {
        id: p.integer().primary(),
    },
});

export class User extends UserSchema.class {}

UserSchema.setClass(User);
