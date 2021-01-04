import { Entity, Column, ManyToOne, JoinColumn, Index, PrimaryGeneratedColumn, Check } from "typeorm";
import { Survey } from "./survey.entity";
import { SurveyThumbnail } from "./survey_thumbnail.entity";
import { User } from "./user.entity";

@Entity("trackable_links")
@Check("trackable_link_campaign_or_user", "(campaign_name is not null and user_id is null) or (campaign_name is null and user_id is not null) ")
export class TrackableLink {
  @PrimaryGeneratedColumn("uuid")
  trackable_link_id;

  @Index()
  @ManyToOne(() => Survey, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey: Survey;

  @Column({
    nullable: false,
  })
  link: string;

  @Index()
  @ManyToOne(() => SurveyThumbnail, { nullable: false })
  @JoinColumn({
    name: "survey_thumbnail_id",
  })
  surveyThumbnail: SurveyThumbnail;

  @Column({
    nullable: true,
  })
  campaign_name: string;

  @Column({
    nullable: true,
  })
  user_id: string;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({
    name: "creator_id",
  })
  creator: User;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
