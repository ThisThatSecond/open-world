import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";

@Entity("trackings")
@Unique("unique_profile_survey_tracking", ["tracker", "survey"])
export class Tracking {
  @PrimaryGeneratedColumn("uuid")
  tracking_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "tracker_id",
  })
  tracker: Profile;

  @ManyToOne(() => Survey, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey?: Survey;

  @ManyToOne(() => Profile, { nullable: true })
  @JoinColumn({
    name: "sharing_profile_id",
  })
  sharing_profile: Profile;

  @ManyToOne(() => SurveyCampaign, { nullable: true })
  @JoinColumn({
    name: "campaign_id",
  })
  survey_campaign: SurveyCampaign;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
