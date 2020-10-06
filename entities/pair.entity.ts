import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Unique, OneToMany } from "typeorm";
import { Poll } from "./poll.entity";
import { Option } from "./option.entity";
import { PairVote } from "./pair_vote.entity";

@Entity("pairs")
@Unique(["option1", "option2"])
export class Pair {
  @PrimaryGeneratedColumn("uuid")
  pair_id: string;

  @ManyToOne(() => Poll, { nullable: false })
  @JoinColumn({
    name: "poll_id",
  })
  poll: Poll;

  @ManyToOne(() => Option, { nullable: false })
  @JoinColumn({
    name: "option1_id",
  })
  option1: Option;

  @ManyToOne(() => Option, { nullable: false })
  @JoinColumn({
    name: "option2_id",
  })
  option2: Option;

  @Column({
    default: 0,
  })
  option1_wins_count: number;

  @Column({
    default: 0,
  })
  option2_wins_count: number;

  @OneToMany(() => PairVote, (pairVote) => pairVote.pair)
  pairVotes?: PairVote[];

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
