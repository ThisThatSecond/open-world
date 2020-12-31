import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, Index, Check, Unique } from "typeorm";
import { Survey } from "./survey.entity";
import { Profile } from "./profile.entity";

@Entity("survey_engagements")
@Unique(["survey", "profile"])
export class SurveyEngagement {
  @Index()
  @PrimaryColumn("uuid")
  @ManyToOne(() => Survey, (survey) => survey.engagements, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey: Survey;

  @Index()
  @ManyToOne(() => Profile, (profile) => profile.engaged_surveys, { nullable: false })
  @JoinColumn({
    name: "profile_id",
  })
  profile: Profile;

  @Column({
    default: false,
    nullable: false,
  })
  has_tracked?: boolean;

  @Column({
    default: false,
    nullable: false,
  })
  has_reaction?: boolean;

  @Column({
    default: false,
    nullable: false,
  })
  has_shared?: boolean;

  @Column({
    default: false,
    nullable: false,
  })
  is_respondent?: boolean;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
