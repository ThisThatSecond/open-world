import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Index } from "typeorm";
import { User } from "./user.entity";
import { Pair } from "./pair.entity";
import { PairVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { trackableLink } from "./trackable_link.entity";

@Entity("pair_votes_history")
export class PairVoteHistory {
  @PrimaryGeneratedColumn("uuid")
  pair_vote_history_id: string;

  @Index()
  @ManyToOne(() => Pair, { nullable: false })
  @JoinColumn({
    name: "pair_id",
  })
  pair: Pair;

  @Column({
    type: "enum",
    enum: PairVoteActions,
    enumName: "pair_vote_action_enum",
  })
  action: PairVoteActions;

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

  @ManyToOne(() => trackableLink, { nullable: true })
  @JoinColumn({
    name: "trackable_link_id",
  })
  trackable_link: trackableLink;


  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
