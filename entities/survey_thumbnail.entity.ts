import { Entity, Column, ManyToOne, JoinColumn, Index, PrimaryGeneratedColumn, Unique, Check } from "typeorm";
import { Survey } from "./survey.entity";

@Entity("survey_thumbnails")
export class SurveyThumbnail {
  @PrimaryGeneratedColumn("uuid")
  survey_thumbnail_id;

  @Index()
  @ManyToOne(() => Survey, { nullable: false })
  @JoinColumn({
    name: "survey_id",
  })
  survey: Survey;

  @Column({
    nullable: false,
  })
  thumbnail_url: string;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
