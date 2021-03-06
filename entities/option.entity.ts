import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, PrimaryColumn, OneToMany, Check, In, Index } from "typeorm";
import { Poll } from "./poll.entity";
import { OptionVote } from "./option_vote.entity";

@Check("video_image_check", "video_url is null or image_url is not null")
@Entity("options")
export class Option {
  @PrimaryColumn()
  option_id: string;

  @Column({
    nullable: true,
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
    nullable: false,
  })
  position: number;

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

  @Index()
  @ManyToOne(() => Poll, (poll) => poll.options, { nullable: false })
  @JoinColumn({
    name: "poll_id",
  })
  poll: Poll;

  @Column({
    default: false,
  })
  is_non_option: boolean;
}
