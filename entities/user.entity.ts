import { Entity, Column, PrimaryColumn, Index, OneToMany, Check, Unique } from "typeorm";
import { Genders } from "../shared/enums/genders.enum";
import { Poll } from "./poll.entity";
import { Profile } from "./profile.entity";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";
import { Invitation } from "./invitation.entity";
import { Team } from "./team.entity";
import { Survey } from "./survey.entity";

@Check("check_analytics_user_email", `not is_analytics_user or email is not null`)
@Check("check_anonymous_user", `not is_anonymous_user or not is_analytics_user`)
@Check("check_username", `is_anonymous_user or username is not null`)
@Entity("users")
export class User {
  @PrimaryColumn()
  user_id: string;

  @Index()
  @Column({
    unique: true,
    nullable: true,
  })
  username: string;

  @Index()
  @Column({
    nullable: true,
    unique: true,
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
    type: "jsonb",
    array: false,
    nullable: true,
  })
  geo_ip?: any;

  @Column({
    default: false,
  })
  neighborhood_visible?: boolean;

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
    default: false,
  })
  is_anonymous_user?: boolean;

  @Column({
    default: true,
  })
  is_active?: boolean;

  @Column({
    default: false,
  })
  is_hidden?: boolean;

  @Column({
    default: false,
  })
  is_admin?: boolean;

  @Column({
    default: false,
  })
  email_verified?: boolean;

  @Column({
    nullable: true,
  })
  bio?: string;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  last_opened_analytics?: Date;

  @Column({
    type: "jsonb",
    array: false,
    nullable: true,
  })
  desc?: { gender?: string };

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;

  @Column({
    default: false,
  })
  is_company_member?: boolean;

  @Column({
    default: null,
  })
  company_id?: string;

  @Column({
    default: null,
  })
  company_role?: string;

  @Column({
    default: false,
  })
  has_on_boarded?: boolean;


  @OneToMany(() => Team, (team) => team.owner)
  teams?: Team[];

  @OneToMany(() => Profile, (profile) => profile.user)
  profiles?: Profile[];

  @OneToMany(() => Survey, (survey) => survey.creator)
  surveys?: Survey[];

  @OneToMany(() => Invitation, (invitation) => invitation.invitee)
  invitations?: Invitation[];
}
