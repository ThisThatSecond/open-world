import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { TrackableLink } from "./trackable_link.entity";

@Entity("comments")
export class Comment {
  @PrimaryColumn()
  comment_id: string;

  @Column({
    nullable: false,
  })
  text: string;

  @ManyToOne(() => Survey, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey?: Survey;

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

  @ManyToOne(() => TrackableLink, { nullable: true })
  @JoinColumn({
    name: "trackable_link_id",
  })
  trackable_link: TrackableLink;


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
