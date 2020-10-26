import { Entity, Column, Index, JoinColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany, Check } from "typeorm";
import { Profile } from "./profile.entity";
import { User } from "./user.entity";
import { Poll } from "./poll.entity";
import { Genders } from "../shared/enums/genders.enum";
import { Educations } from "../shared/enums/educations.enum";
import { CATEGORIES } from "../shared/enums/categories.enum";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";

@Entity("collections")
@Check(
  "check_requirements",
  `
        is_draft or ( 
          title is not null and
          visibile_options_count >= 3 and
          desired_responses_count > 0 and
          location is not null and
          geo_point is not null
        )
    `
)
@Check("check_collection_finalized", `(is_draft and finalized_at is null) or (not is_draft and finalized_at is not null)`)
@Check("check_poll_responses_count", `responses_count <= desired_responses_count`)
export class Collection {
  @PrimaryGeneratedColumn("uuid")
  collection_id: string;

  @Index()
  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: true,
  })
  thumbnail_url: string;

  @Index()
  @Column({
    nullable: true,
  })
  caption: string;

  @Column({
    type: "enum",
    enum: CATEGORIES,
    nullable: true,
  })
  category?: CATEGORIES;

  @Column({
    nullable: true,
  })
  location: string;

  @Column({
    nullable: true,
  })
  language: string;

  @Column({
    type: "point",
    nullable: true,
  })
  geo_point?: IGeoPoint | string;

  @Column({
    nullable: true,
  })
  visibile_options_count: number;

  @Column({
    nullable: true,
  })
  desired_responses_count: number;

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
    default: false,
  })
  is_hidden?: boolean;

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
    type: "jsonb",
    array: false,
    nullable: true,
  })
  audience_age_groups?: Array<{ start: number; end: number }>;

  @Column({
    nullable: true,
  })
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

  @Column({
    default: 0,
  })
  votes_count: number;

  @Column({
    default: 0,
  })
  responses_count: number;

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

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  finalized_at?: Date;
}
