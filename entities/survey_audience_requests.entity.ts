import { Entity, Column, ManyToOne, JoinColumn, Index, PrimaryGeneratedColumn, Unique, Check } from "typeorm";
import { Survey } from "./survey.entity";
import { User } from "./user.entity";

@Entity("survey_audience_requests")
export class SurveyAudienceRequest {
  @PrimaryGeneratedColumn("uuid")
  survey_audience_request_id;

  @Index()
  @ManyToOne(() => Survey, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey: Survey;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({
    name: "creator_id",
  })
  creator: User;

  @Column({
    type: "jsonb",
    array: false,
    nullable: false,
  })
  extra?: any;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
