import { Entity, Column, JoinColumn, ManyToOne, Check, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";

@Entity("trackings")
@Unique("unique_profile_poll_tracking", ["tracker", "survey"])
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

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
