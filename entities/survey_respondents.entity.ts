import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, Index } from "typeorm";
import { Survey } from "./survey.entity";
import { Profile } from "./profile.entity";

@Entity("survey_respondents")
export class SurveyRespondent {
  @Index()
  @PrimaryColumn("uuid")
  @ManyToOne(() => Survey, (survey) => survey.respondents, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey: Survey;

  @Index()
  @ManyToOne(() => Profile, (profile) => profile.responded_surveys, { nullable: false })
  @JoinColumn({
    name: "profile_id",
  })
  profile: Profile;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
