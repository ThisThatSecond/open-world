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
import { Genders } from "../shared/enums/genders.enum";
import { Educations } from "../shared/enums/educations.enum";

@Entity("collections")
@Check(
  "check_requirements",
  `
        is_draft or ( 
          title is not null and
          visibile_options_count >= 3 and
          desired_votes_count > 0 and
          location is not null
        )
    `
)
@Check(
  "check_public_audience",
  `
        not is_private or ( 
          audience_age_min is null and
          audience_age_max is null and
          audience_genders is null and
          audience_educations is null and
          audience_locations is null
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
  location: number;
  
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
  audience_age_min?: number;

  @Column({
    nullable: true,
  })
  audience_age_max?: number;

  @Column("varchar", {
    array: true,
    nullable: true,
  })
  audience_genders?: Genders[];

  @Column("varchar", {
    array: true,
    nullable: true,
  })
  audience_educations?: Educations[];

  @Column("varchar", {
    array: true,
    nullable: true,
  })
  audience_locations?: string[];

  @Column({
    default: false,
    nullable: false,
  })
  is_familiarity_required?: boolean;

  @Column({
    default: true,
    nullable: false,
  })
  has_anonymous_vote?: boolean;

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
