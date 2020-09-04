import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Check } from "typeorm";
import { User } from "./user.entity";
import { Team } from "./team.entity";

@Entity("followerships")
@Check("check_completed_payment", `not is_complete or desc is not null`)
@Check("check_opinions_count_and_price", `opinions_count > 0 && base_price > 0`)
export class Followership {
  @PrimaryGeneratedColumn("uuid")
  payment_id: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({
    name: "payer_id",
  })
  payer: User;

  @ManyToOne(() => Team, { nullable: false })
  @JoinColumn({
    name: "team_id",
  })
  team: Team;

  @Column({
    nullable: false,
    unique: true,
  })
  stripe_session_id: string;

  @Column({
    nullable: false,
  })
  base_price: number;

  @Column({
    nullable: false,
  })
  currency: string;

  @Column({
    nullable: false,
  })
  opinions_count: number;

  @Column({
    nullable: false,
    default: false,
  })
  is_complete?: boolean;

  @Column({
    type: "jsonb",
    array: false,
    nullable: true,
  })
  desc?: { gender: string };

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
