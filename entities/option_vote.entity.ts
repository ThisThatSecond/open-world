import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Option } from "./option.entity";
import { OptionVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";

@Entity("option_votes")
@Unique("uniqe_option_voter", ["option", "voter"])
export class OptionVote {
  @PrimaryGeneratedColumn("uuid")
  option_vote_id: string;

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

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "voter_id",
  })
  voter: Profile;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
