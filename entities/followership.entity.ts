import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Unique } from "typeorm";
import { Profile } from "./profile.entity";
import { FollowershipStatus } from "../shared/enums/followership_status.enum";
import { Survey } from "./survey.entity";
import { TrackableLink } from "./trackable_link.entity";

@Entity("followerships")
@Unique("unique_followership", ["follower", "following"])
export class Followership {
  @PrimaryGeneratedColumn("uuid")
  followership_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "follower_id",
  })
  follower: Profile;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "following_id",
  })
  following: Profile;

  @Column({
    type: "enum",
    enum: FollowershipStatus,
    nullable: false,
    default: FollowershipStatus.PENDING,
  })
  status: FollowershipStatus;

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


  @ManyToOne(() => Survey, { nullable: true })
  @JoinColumn({
    name: "by_survey_id",
  })
  by_survey: Survey;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  updated_at: Date;
}
