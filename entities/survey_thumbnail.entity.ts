import { Entity, Column, ManyToOne, JoinColumn, Index, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Survey } from "./survey.entity";

@Entity("survey_thumbnails")
@Unique("unique_survey_default_thumbnail", ["survey", "thumbnail_url", "is_default"])
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
    nullable: false,
    default: false,
  })
  is_default: boolean;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
