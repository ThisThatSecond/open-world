import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Check, Unique } from "typeorm";
import { Profile } from "./profile.entity";
import { FollowershipStatus } from "../shared/enums/followership_status.enum";

@Entity("followerships")
@Unique("unique_follwership", ["follower", "follwing"])
export class Collection {
  @PrimaryGeneratedColumn("uuid")
  followership_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "follower_id",
  })
  follower: Profile;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "following_id",
  })
  following: Profile;

  @Column({
    type: "enum",
    enum: FollowershipStatus,
    nullable: false,
    default: FollowershipStatus.PENDING,
  })
  status: FollowershipStatus;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  updated_at: Date;
}
