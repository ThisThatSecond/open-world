import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, Unique } from "typeorm";
import { User } from "./user.entity";
import { Poll } from "./poll.entity";
import { Profile } from "./profile.entity";
import { PollProfileActions } from "../shared/enums/actions.enum";

@Entity("poll_profile_actions")
@Unique("uniqe_poll_voter", ["poll", "profile"])
export class PollProfileAction {
  @PrimaryColumn()
  poll_user_action_id: string;

  @ManyToOne(() => Poll, { nullable: false })
  @JoinColumn({
    name: "poll_id",
  })
  poll: Poll;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({
    name: "profile_id",
  })
  profile: Profile;

  @Column({
    type: "enum",
    enum: PollProfileActions,
    enumName: 'poll_profile_action_enum',
    nullable: false,
  })
  action: PollProfileActions;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
