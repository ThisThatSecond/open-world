import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, OneToMany, Check, Index, OneToOne } from "typeorm";
import { Option } from "./option.entity";
import { Collection } from "./collection.entity";
import { Pair } from "./pair.entity";
import { Survey } from "./survey.entity";
import { PollTypes } from "../shared/enums/poll_types.enum";
import { MultiSelectionTypes, SelectionTypes } from "../shared/enums/selection_types.enum";

@Entity("polls")
@Check("check_collection_or_survey", `(collection_id is not null and survey_id is null) or (collection_id is null and survey_id is not null)`)
@Check("check_poll_votes_count", `votes_count >=  0`)
@Check("check_poll_responses_count", `responses_count >=  0`)
@Check("check_poll_comments_count", `comments_count >=  0`)
@Check("check_poll_position_in_collection", `collection_id is null or position is not null`)
@Check("check_visible_options_count", `visible_options_count is null or visible_options_count >= 0`)
export class Poll {
  @PrimaryColumn()
  poll_id: string;

  @Column({
    nullable: true,
  })
  question: string;

  @Column({
    type: "enum",
    enum: PollTypes,
    nullable: false,
  })
  type: PollTypes;

  @Column({
    nullable: true,
  })
  visible_options_count?: number;

  @Column({
    nullable: true,
  })
  is_familiarity_required?: boolean;

  @Column({
    type: "enum",
    enum: SelectionTypes,
    nullable: true,
  })
  selection_type: SelectionTypes;

  @Column({
    type: "enum",
    enum: MultiSelectionTypes,
    nullable: true,
  })
  multi_selection_type: MultiSelectionTypes;

  @Column({
    nullable: true,
  })
  multi_selection_count?: number;

  @Column({
    nullable: true,
  })
  position: number;

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
  comments_count: number;

  @Index()
  @ManyToOne(() => Collection, (collection) => collection.polls, {
    nullable: true,
  })
  @JoinColumn({
    name: "collection_id",
  })
  collection?: Collection;

  @Index()
  @OneToOne(() => Survey, (survey) => survey.poll, {
    nullable: true,
  })
  @JoinColumn({
    name: "survey_id",
  })
  survey?: Survey;

  @OneToMany(() => Option, (option) => option.poll)
  options?: Option[];

  @OneToMany(() => Pair, (pair) => pair.poll)
  pairs?: Pair[];
}
