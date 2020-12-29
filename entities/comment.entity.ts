import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column, Check } from "typeorm";
import { User } from "./user.entity";
import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";

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

  @ManyToOne(() => SurveyCampaign, { nullable: true })
  @JoinColumn({
    name: "survey_campaign_id",
  })
  survey_campaign: SurveyCampaign;


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
