import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { TrackableLink } from "./trackable_link.entity";

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

  @ManyToOne(() => TrackableLink, { nullable: true })
  @JoinColumn({
    name: "trackable_link_id",
  })
  trackable_link: TrackableLink;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
