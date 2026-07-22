import { Migration } from '@mikro-orm/migrations';

export class Migration20260722084143 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "users" ("id" serial primary key);`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "users" cascade;`);
  }

}
