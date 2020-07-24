import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, OneToMany, Check } from "typeorm";
import { User } from "./user.entity";
import { CATEGORIES } from "../shared/enums/categories.enum";
import { Profile } from "./profile.entity";
import { Option } from "./option.entity";
import { Collection } from "./collection.entity";
import { Pair } from "./pair.entity";
import { Genders } from "../shared/enums/genders.enum";
import { Educations } from "../shared/enums/educations.enum";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";

@Entity("polls")
@Check("check_null_profile_id_for_collection", `(profile_id is not null and collection_id is null) or (profile_id is null and collection_id is not null)`)
@Check(
  "check_analytics_requirements",
  `profile_id is null or is_draft or (
      (visibile_options_count is null or desired_votes_count > 0) and
      has_anonymous_vote is not null and
      is_private is not null and
      is_hidden is not null and
      is_active is not null and
      (visibile_options_count is null or visibile_options_count >= 3) 
    )  
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
  geo_point?: IGeoPoint | string;

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
  is_analytics_poll?: boolean;

  @Column({
    nullable: true,
  })
  has_anonymous_vote?: boolean;

  @Column({
    nullable: true,
  })
  is_private?: boolean;

  @Column({
    nullable: true,
  })
  is_familiarity_required?: boolean;

  @Column({
    nullable: true,
  })
  is_draft?: boolean;

  @Column({
    nullable: true,
  })
  is_hidden?: boolean;

  @Column({
    nullable: true,
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

  @OneToMany(() => Pair, (pair) => pair.poll)
  pairs?: Pair[];

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
