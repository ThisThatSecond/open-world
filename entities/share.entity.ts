import { Entity, Column, JoinColumn, ManyToOne, Check, PrimaryGeneratedColumn } from "typeorm";
import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";

@Entity("shares")
@Check("check_poll_or_collection_share", `poll_id is not null or collection_id is not null or profile_id is not null`)
export class Share {
  @PrimaryGeneratedColumn("uuid")
  share_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "sharing_profile_id",
  })
  sharingProfile: Profile;

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

  @ManyToOne(() => Profile, { nullable: true })
  @JoinColumn({
    name: "profile_id",
  })
  profile?: Profile;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
