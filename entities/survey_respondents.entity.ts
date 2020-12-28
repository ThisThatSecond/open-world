import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, PrimaryColumn, OneToMany, Check, In, Index } from "typeorm";
import { Poll } from "./poll.entity";
import { OptionVote } from "./option_vote.entity";
import { Survey } from "./survey.entity";
import { Profile } from "./profile.entity";

@Check("video_image_check", "video_url is null or image_url is not null")
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
}
