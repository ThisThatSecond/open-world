import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Unique } from "typeorm";
import { Profile } from "./profile.entity";

@Entity("blocks")
@Unique("unique_block", ["blocker", "blocking"])
export class Block {
  @PrimaryGeneratedColumn("uuid")
  block_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "blocker_id",
  })
  blocker: Profile;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "blocking_id",
  })
  blocking: Profile;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;

}
