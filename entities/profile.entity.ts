import { Entity, Column, PrimaryColumn, Index, JoinColumn, ManyToOne, OneToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Team } from "./team.entity";
import { Poll } from "./poll.entity";
import { NOTIFICATION_PREFERENCES } from "../shared/enums/notification_preferences.enum";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";

@Entity("profiles")
export class Profile {
  @PrimaryColumn()
  profile_id: string;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({
    name: "user_id",
  })
  user: User;

  @Index()
  @Column({
    unique: true,
    nullable: true,
  })
  name?: string;

  @Index()
  @Column({
    nullable: true,
  })
  fullname?: string;

  @Column({
    default: 0,
  })
  activity_badge?: number;

  @Column({
    default: false,
  })
  is_verified?: boolean;

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
  profile_completed?: boolean;

  @Column({
    nullable: true,
  })
  bio?: string;

  @Column({
    type: "point",
    nullable: true,
  })
  geo_point?: IGeoPoint | string;

  @Column({
    nullable: true,
  })
  location?: string;

  @Column("varchar", {
    array: true,
    default: "{}",
  })
  notifications_preferences?: NOTIFICATION_PREFERENCES[];

  @Column({
    default: false,
  })
  neighborhood_visible?: boolean;

  @Column({
    default: false,
  })
  is_analytics_profile?: boolean;

  @Column({
    nullable: true,
  })
  image_url?: string;

  @Column("varchar", {
    array: true,
    default: "{}",
  })
  sees_polls_from?: string[];

  @ManyToOne(() => Team, (team) => team.profiles, { nullable: true })
  @JoinColumn({
    name: "team_id",
  })
  team: Team;

  @OneToMany(() => Poll, (poll) => poll.profile)
  polls?: Poll[];

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
