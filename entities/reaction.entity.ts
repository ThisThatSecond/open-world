import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Profile } from "./profile.entity";
import { Reactions } from "../shared/enums/reactions.enum";
import { Survey } from "./survey.entity";
import { TrackableLink } from "./trackable_link.entity";

@Entity("reactions")
@Unique("unique_profile_survey_reaction", ["survey", "profile"])
export class Reaction {
  @PrimaryGeneratedColumn("uuid")
  reaction_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "profile_id",
  })
  profile: Profile;

  @ManyToOne(() => Survey, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey?: Survey;

  @Column({
    type: "enum",
    enum: Reactions,
    nullable: false,
  })
  reaction: Reactions;

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
