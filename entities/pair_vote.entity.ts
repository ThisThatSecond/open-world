import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Unique, Index } from "typeorm";
import { Pair } from "./pair.entity";
import { PairVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";

@Entity("pair_votes")
@Unique("uniqe_pair_voter", ["pair", "voter"])
export class PairVote {
  @PrimaryGeneratedColumn("uuid")
  pair_vote_id: string;

  @Column({
    type: "enum",
    enum: PairVoteActions,
    enumName: "pair_vote_action_enum",
    nullable: false,
  })
  action: PairVoteActions;

  @Index()
  @ManyToOne(() => Pair, { nullable: false })
  @JoinColumn({
    name: "pair_id",
  })
  pair: Pair;

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
