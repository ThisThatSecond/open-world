import { Entity, Column, JoinColumn, ManyToOne, Check, PrimaryGeneratedColumn } from "typeorm";
import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";
import { Comment } from "./comment.entity";

@Entity("reports")
@Check("check_comment_or_poll_or_collection_or_profile_report", `comment_id is not null or poll_id is not null or collection_id is not null or profile_id is not null`)
export class Report {
  @PrimaryGeneratedColumn("uuid")
  report_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "reporter_id",
  })
  reporter: Profile;

  @ManyToOne(() => Comment, { nullable: true })
  @JoinColumn({
    name: "comment_id",
  })
  comment?: Comment;

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
