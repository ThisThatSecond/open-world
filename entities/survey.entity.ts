import { Entity, Column, JoinColumn, ManyToOne, Check, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { CATEGORIES } from "../shared/enums/categories.enum";
import { Profile } from "./profile.entity";
import { Collection } from "./collection.entity";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";
import { Poll } from "./poll.entity";
import { SurveyTypes } from "../shared/enums/survey_types.enum";

@Entity("surveys")
@Check("check_survey_finalized", `(is_draft and finalized_at is null) or (not is_draft and finalized_at is not null)`)
@Check("check_survey_scheduled", `release_date is null or is_draft or ready_to_post`)
@Check("check_survey_votes_count", `votes_count >= 0`)
@Check("check_survey_responses_count", `responses_count <= desired_responses_count and responses_count >= 0 and responses_count <= votes_count`)
@Check("check_survey_complete_responses_count", `complete_responses_count >=0 and complete_responses_count <= responses_count`)
@Check("check_survey_comments_count", `comments_count >=  0`)
export class Survey {
  @PrimaryGeneratedColumn("uuid")
  survey_id: string;

  @Column({
    nullable: true,
  })
  thumbnail_url: string;

  @Column({
    nullable: true,
  })
  context?: string;

  @Column({
    type: "enum",
    enum: CATEGORIES,
    nullable: true,
  })
  category?: CATEGORIES;

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
    nullable: true,
  })
  desired_responses_count?: number;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  release_date?: Date;

  @Column({
    nullable: false,
    default: false,
  })
  is_analytics_survey?: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  is_private?: boolean;

  @Column({
    nullable: false,
    default: true,
  })
  is_draft?: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  is_hidden?: boolean;

  @Column({
    nullable: false,
    default: true,
  })
  is_active?: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  ready_to_post?: boolean;

  @Column({
    type: "enum",
    enum: SurveyTypes,
    nullable: false,
  })
  type?: SurveyTypes;

  @OneToOne(() => Collection, (collection) => collection.survey)
  collection?: Collection;

  @OneToOne(() => Poll, (poll) => poll.survey)
  poll?: Poll;

  @ManyToOne(() => User, (user) => user.surveys, { nullable: false })
  @JoinColumn({
    name: "creator_id",
  })
  creator: User;

  @ManyToOne(() => Profile, (profile) => profile.surveys, { nullable: false })
  @JoinColumn({
    name: "profile_id",
  })
  profile?: Profile;

  @Column({
    default: 0,
  })
  votes_count: number;

  @Column({
    default: 0,
  })
  responses_count: number;

  @Column({
    default: 0,
  })
  complete_responses_count: number;

  @Column({
    default: 0,
  })
  comments_count: number;

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

  @Column({
    type: "jsonb",
    array: false,
    nullable: true,
  })
  extra?: any;
}
