import { Entity, Column, JoinColumn, ManyToOne, Check, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";

@Entity("shares")
@Check("check_survey_or_profile_share", `survey_id is not null or profile_id is not null`)
export class Share {
  @PrimaryGeneratedColumn("uuid")
  share_id: string;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "sharing_profile_id",
  })
  sharingProfile: Profile;

  @ManyToOne(() => Survey, { nullable: true })
  @JoinColumn({
    name: "survey_id",
  })
  survey?: Survey;

  @ManyToOne(() => Profile, { nullable: true })
  @JoinColumn({
    name: "profile_id",
  })
  profile?: Profile;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
