import { Cascade, Collection, Entity, ManyToMany, ManyToOne, Property, Unique, Enum, OneToMany } from '@mikro-orm/core';
import { BaseEntity } from '../../common/entities/base-entity.entity';

@Entity()
export class User extends BaseEntity {

  @Property()
  @Unique()
  username: string;

  constructor(username: string) {
    super();
    //this.username = username;
  }

}
