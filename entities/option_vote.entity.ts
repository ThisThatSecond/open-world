import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Unique, In, Index } from "typeorm";
import { Option } from "./option.entity";
import { OptionVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";

@Entity("option_votes")
@Unique("unique_option_voter", ["option", "voter"])
export class OptionVote {
  @PrimaryGeneratedColumn("uuid")
  option_vote_id: string;

  @Index()
  @ManyToOne(() => Option, { nullable: false })
  @JoinColumn({
    name: "option_id",
  })
  option: Option;

  @Column({
    type: "enum",
    enum: OptionVoteActions,
    enumName: "option_vote_action_enum",
    nullable: false,
  })
  action: OptionVoteActions;

  @Index()
  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "voter_id",
  })
  voter: Profile;

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
