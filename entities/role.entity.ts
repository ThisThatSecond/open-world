import {Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Unique, PrimaryColumn} from "typeorm";
import { Profile } from "./profile.entity";
import {User} from "./user.entity";
import {Access} from "./access.entity";

@Entity("roles")
export class Role {
  @PrimaryColumn()
  id: number;

  @Column({name:"name"})
  name:string;

  @Column({
    name:"created_at",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  createdAt?: Date;

  @ManyToOne(() => Access)
  @JoinColumn({
    name: "role_id",
  })
  access: Access;

}
