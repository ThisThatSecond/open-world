import {Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Unique, PrimaryColumn} from "typeorm";
import { Profile } from "./profile.entity";

@Entity("permissions")
export class Access {
  @PrimaryColumn()
  id: number;

  @Column({name:"user_id"})
  userId:string;

  @Column({name:"role_id"})
  roleId:string;

  @Column({
    name: "created_at",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  createdAt?: Date;

}
