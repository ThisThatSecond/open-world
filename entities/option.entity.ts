import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  OneToMany,
} from "typeorm";
import { Poll } from "./poll.entity";
import { OptionVote } from "./option_vote.entity";

@Entity("options")
export class Option {
  @PrimaryColumn()
  option_id: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: true,
  })
  image_url?: string;
  
  @Column({
    nullable: true,
  })
  video_url?: string;

  @Column({
    nullable: true,
  })
  is_this?: boolean;

  @Column({
    default: 0,
  })
  upvotes_count: number;
  
  @Column({
    default: 0,
  })
  downvotes_count: number;
  
  @OneToMany(() => OptionVote, (optionVote) => optionVote.option)
  optionVotes?: OptionVote[];

  @ManyToOne(() => Poll, (poll) => poll.options, { nullable: false })
  @JoinColumn({
    name: "poll_id",
  })
  poll: Poll;

}
