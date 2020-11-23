import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column, Check } from "typeorm";
import { User } from "./user.entity";
import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";

@Entity("comments")
@Check("check_null_poll_or_collection", `(poll_id is not null and collection_id is null) or (poll_id is null and collection_id is not null)`)
export class Comment {
  @PrimaryColumn()
  comment_id: string;

  @Column({
    nullable: false,
  })
  text: string;

  @ManyToOne(() => Poll, { nullable: true })
  @JoinColumn({
    name: "poll_id",
  })
  poll: Poll;

  @ManyToOne(() => Collection, { nullable: true })
  @JoinColumn({
    name: "collection_id",
  })
  collection?: Collection;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "creator_id",
  })
  creator: Profile;

  @ManyToOne(() => Profile, { nullable: true })
  @JoinColumn({
    name: "sharing_profile_id",
  })
  sharing_profile: Profile;


  @Column({
    default: false,
  })
  is_hidden?: boolean;

  @Column({
    default: 0,
  })
  upvotes_count: number;
  
  @Column({
    default: 0,
  })
  downvotes_count: number;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
