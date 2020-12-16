import { Entity, Column, Index, JoinColumn, OneToMany, PrimaryColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Poll } from "./poll.entity";
import { Survey } from "./survey.entity";

@Entity("collections")
export class Collection {
  @PrimaryGeneratedColumn("uuid")
  collection_id: string;

  @Index() // is it needed?
  @Column({
    nullable: true,
  })
  title: string;

  @Index()
  @OneToOne(() => Survey, (survey) => survey.collection, {
    nullable: false,
  })
  @JoinColumn({
    name: "survey_id",
  })
  survey?: Survey;

  @OneToMany(() => Poll, (poll) => poll.collection)
  polls?: Poll[];
}
