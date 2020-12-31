import { Entity, Column, ManyToOne, JoinColumn, Index, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Survey } from "./survey.entity";
import { User } from "./user.entity";

@Entity("survey_campaigns")
@Unique(["survey", "name"])
export class SurveyCampaign {
  @PrimaryGeneratedColumn("uuid")
  survey_campaign_id;

  @Index()
  @ManyToOne(() => Survey, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey: Survey;

  @Column({
    nullable: false,
  })
  name: string;

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
