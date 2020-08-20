import { Entity, Column, JoinColumn, ManyToOne, Check, PrimaryGeneratedColumn, Index } from "typeorm";
import { User } from "./user.entity";
import { Team } from "./team.entity";
import { Profile } from "./profile.entity";

@Entity("invitation_links")
@Check("check_email_or_user_id", `user_id is not null or email is not null`)
export class InvitationLink {
  @PrimaryGeneratedColumn("uuid")
  invitation_link_id: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({
    name: "user_id",
  })
  user: User;

  @Index()
  @Column({
    nullable: true,
  })
  email?: string;

  @ManyToOne(() => Team)
  @JoinColumn({
    name: "team_id",
  })
  team?: Team;

  @ManyToOne(() => Profile)
  @JoinColumn({
    name: "profile_id",
  })
  profile?: Profile;

  @Column({
    nullable: true,
  })
  invitation_message?: string;

  @Column({
    default: true,
    nullable: false,
  })
  is_active?: boolean;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
