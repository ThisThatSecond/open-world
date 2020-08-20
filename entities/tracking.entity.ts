import { Entity, Column, JoinColumn, ManyToOne, Check, PrimaryGeneratedColumn } from "typeorm";
import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";

@Entity("trackings")
@Check("check_poll_or_collection_tracking", `poll_id is not null or collection_id is not null`)
export class Tracking {
  @PrimaryGeneratedColumn("uuid")
  tracking_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "tracker_id",
  })
  tracker: Profile;

  @ManyToOne(() => Poll, { nullable: true })
  @JoinColumn({
    name: "poll_id",
  })
  poll?: Poll;

  @ManyToOne(() => Collection, { nullable: true })
  @JoinColumn({
    name: "collection_id",
  })
  collection?: Collection;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
