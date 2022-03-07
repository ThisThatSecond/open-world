import {Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Unique, PrimaryColumn} from "typeorm";
import { Profile } from "./profile.entity";

@Entity("access")
export class Access {
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

}
