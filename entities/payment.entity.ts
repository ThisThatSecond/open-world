import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Check } from "typeorm";
import { User } from "./user.entity";
import { Team } from "./team.entity";
import { PaymentSetting } from "./payment_setting.entity";

@Entity("payments")
@Check("check_completed_payment", `not is_complete or desc is not null`)
@Check("check_opinions_count", `opinions_count > 0`)
export class Payment {
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

  @ManyToOne(() => PaymentSetting, { nullable: false })
  @JoinColumn({
    name: "payment_setting_id",
  })
  paymentSetting: PaymentSetting;

  @Column({
    nullable: false,
    unique: true,
  })
  stripe_session_id: string;

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
