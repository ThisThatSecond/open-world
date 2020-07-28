import { Entity, Column, PrimaryColumn, Index, OneToMany } from "typeorm";
import { Genders } from "../shared/enums/genders.enum";
import { Poll } from "./poll.entity";
import { Profile } from "./profile.entity";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";

@Entity("users")
export class User {
  @PrimaryColumn()
  user_id: string;

  @Index()
  @Column({
    unique: true,
    nullable: false,
  })
  username: string;

  @Index()
  @Column({
    nullable: true,
  })
  email?: string;

  @Index()
  @Column({
    nullable: true,
  })
  name?: string;

  @Column({
    nullable: true,
  })
  firstname?: string;

  @Column({
    nullable: true,
  })
  surname?: string;

  @Column({
    nullable: true,
  })
  image_url?: string;

  @Column({
    type: "date",
    nullable: true,
  })
  birthday?: Date;

  @Column({
    type: "enum",
    enum: Genders,
    nullable: true,
  })
  gender?: Genders;

  @Column({
    nullable: true,
  })
  education?: string;

  @Column({
    nullable: true,
  })
  language?: string;
  
  @Column({
    nullable: true,
  })
  facebook_id?: string;

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
  fcm_token?: string;

  @Column({
    nullable: true,
  })
  installed_version?: string;

  @Column({
    default: false,
  })
  is_analytics_user?: boolean;

  @Column({
    default: true,
  })
  is_active?: boolean;

  @Column({
    default: false,
  })
  is_hidden?: boolean;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  last_opened_analytics?: Date;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  last_opened_app?: Date;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  last_checked_activity?: Date;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;

  @OneToMany(() => Profile, (profile) => profile.user)
  profiles?: Profile[];

  @OneToMany(() => Poll, (poll) => poll.creator)
  polls?: Poll[];
}
