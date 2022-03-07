import { Entity, Column, PrimaryColumn, Index, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { User } from "./user.entity";
import { Profile } from "./profile.entity";
import { Invitation } from "./invitation.entity";

@Entity("teams")
@Unique("unique_join_link", ["join_link"])
export class Team {
  @PrimaryColumn()
  team_id: string;

  @Index()
  @Column({
    nullable: false,
  })
  name: string;

  @Index()
  @Column({
    unique: true,
    nullable: false,
  })
  join_link?: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column({
    nullable: true,
  })
  avatar_url?: string;

  @Column({
    type: "float",
    default: 0,
    nullable: false,
  })
  response_credit?: number;

  @Column({
    default: true,
    nullable: false,
  })
  is_active: boolean;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({
    name: "owner_id",
  })
  owner: User;

  @OneToMany(() => Profile, (profile) => profile.team)
  profiles?: Profile[];

  @OneToMany(() => Invitation, (Invitation) => Invitation.team)
  invitations?: Invitation[];

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
  @Column({
    default: null,
  })
  company_id?: string;

}
