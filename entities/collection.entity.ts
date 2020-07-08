import {
  Entity,
  Column,
  Index,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Check,
} from "typeorm";
import { Profile } from "./profile.entity";
import { User } from "./user.entity";
import { Poll } from "./poll.entity";

@Entity("collections")
@Check(
  "check_requirements",
  `
        is_draft or ( 
          title is not null and
          visibile_options_count >= 3 and
          desired_votes_count > 0 and
          is_familiarity_required is not null
        )
    `
)
export class Collection {
  @PrimaryGeneratedColumn("uuid")
  collection_id: string;

  @Index()
  @Column({
    nullable: true,
  })
  title: string;

  @Column({
    nullable: true,
  })
  visibile_options_count: number;

  @Column({
    nullable: true,
  })
  desired_votes_count: number;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  release_date?: Date;

  @Column({
    default: true,
    nullable: false,
  })
  is_draft?: boolean;

  @Column({
    default: true,
    nullable: false,
  })
  is_active?: boolean;

  @Column({
    default: false,
    nullable: false,
  })
  is_private?: boolean;

  @Column({
    nullable: true,
  })
  is_familiarity_required?: boolean;

  @OneToMany(() => Poll, (poll) => poll.collection)
  polls?: Poll[];

  @ManyToOne(() => Profile, (profile) => profile.polls, { nullable: false })
  @JoinColumn({
    name: "profile_id",
  })
  profile: Profile;

  @ManyToOne(() => User, (user) => user.polls, { nullable: false })
  @JoinColumn({
    name: "creator_id",
  })
  creator: User;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
