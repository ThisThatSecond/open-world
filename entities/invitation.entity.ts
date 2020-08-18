import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, Check, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Team } from "./team.entity";
import { Profile } from "./profile.entity";
import { InvitationTypes } from "../shared/enums/invitation_types.enum";
import { InvitationStatus } from "../shared/enums/invitation_status.enum";

@Entity("invitations")
@Check("check_profile_or_team_invitation", `profile_id is not null or team_id is not null`)
export class Invitation {
  @PrimaryGeneratedColumn("uuid")
  invitation_id: string;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({
    name: "inviter_id",
  })
  inviter: User;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({
    name: "invitee_id",
  })
  invitee: User;

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
    type: "enum",
    enum: InvitationStatus,
    nullable: false,
    default: InvitationStatus.PENDING,
  })
  status: InvitationStatus;

  @Column({
    type: "enum",
    enum: InvitationTypes,
    nullable: false,
  })
  type: InvitationTypes;

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

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  updated_at: Date;
}
