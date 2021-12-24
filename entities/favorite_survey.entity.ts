import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Unique } from "typeorm";
import { Profile } from "./profile.entity";

@Entity("favorite_surveys")
export class FavoriteSurveys {
  @PrimaryGeneratedColumn("uuid")
  favorite_id: string;

  @Column({
    name: "user_id",
  })
  user_id: string;

  @Column({
    name: "survey_id",
  })
  survey_id: string;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
