import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Check,
} from "typeorm";
import { User } from "./user.entity";
import { CATEGORIES } from "../shared/enums/categories.enum";
import { Profile } from "./profile.entity";
import { Option } from "./option.entity";
import { Collection } from "./collection.entity";

@Entity("polls")
@Check(
  "check_null_profile_id_for_collection",
  `profile_id is null or collection_id is null`
)
@Check(
  "check_is_analytics",
  `profile_id is not null or collection_id is not null and is_analytics_poll`
)
@Check(
  "check_analytics_requirements",
  `profile_id is null or is_draft or (
    desired_votes_count is not null and
    is_familiarity_required is not null
    )  
  `
)
@Check(
  "check_mobile_collection_requirements",
  `profile_id is null and 
   visibile_options_count is null and
   release_date is null and
   desired_votes_count is null and
   is_familiarity_required is null
   `
)
export class Poll {
  @PrimaryColumn()
  poll_id: string;

  @Column({
    nullable: false,
  })
  question: string;

  @Column({
    nullable: true,
  })
  caption?: string;

  @Column({
    nullable: true,
  })
  language?: string;

  @Column({
    type: "point",
    nullable: true,
  })
  geo_point?:
    | {
        x: number;
        y: number;
      }
    | string;

  @Column({
    nullable: true,
  })
  location?: string;

  @Column({
    type: "enum",
    enum: CATEGORIES,
    nullable: true,
  })
  category?: CATEGORIES;

  @Column({
    nullable: true,
  })
  visibile_options_count?: number;

  @Column({
    nullable: true,
  })
  desired_votes_count?: number;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  release_date?: Date;

  @Column({
    default: false,
    nullable: false,
  })
  is_analytics_poll?: boolean;

  @Column({
    default: true,
    nullable: false,
  })
  has_anonymous_vote?: boolean;

  @Column({
    default: false,
    nullable: false,
  })
  is_private?: boolean;

  @Column({
    nullable: true,
  })
  is_familiarity_required?: boolean;

  @Column({
    default: true,
    nullable: false,
  })
  is_draft?: boolean;

  @Column({
    default: false,
    nullable: false,
  })
  is_hidden?: boolean;

  @Column({
    default: true,
    nullable: false,
  })
  is_active?: boolean;

  @ManyToOne(() => User, (user) => user.polls, { nullable: false })
  @JoinColumn({
    name: "creator_id",
  })
  creator: User;

  @ManyToOne(() => Profile, (profile) => profile.polls, { nullable: true })
  @JoinColumn({
    name: "profile_id",
  })
  profile?: Profile;

  @ManyToOne(() => Collection, (collection) => collection.polls, {
    nullable: true,
  })
  @JoinColumn({
    name: "collection_id",
  })
  collection?: Collection;

  @OneToMany(() => Option, (option) => option.poll)
  options?: Option[];

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
