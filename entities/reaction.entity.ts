import { Entity, Column, JoinColumn, ManyToOne, Check, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";
import { Reactions } from "../shared/enums/reactions.enum";

@Entity("reactions")
@Check("check_poll_or_collection_reaction", `poll_id is not null or collection_id is not null`)
@Unique("unique_profile_poll_reaction", ['poll', 'profile'])
@Unique("unique_profile_collection_reaction", ['collection', 'profile'])
export class Reaction {
  @PrimaryGeneratedColumn("uuid")
  reaction_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "profile_id",
  })
  profile: Profile;

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
    type: "enum",
    enum: Reactions,
    nullable: false,
  })
  reaction: Reactions;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
