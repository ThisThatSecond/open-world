import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Check } from "typeorm";
import { User } from "./user.entity";
import { Team } from "./team.entity";
import { PaymentSetting } from "./payment_setting.entity";
import { PaymentPackage } from "./payment_packages.entity";
import { PaymentDiscount } from "./payment_discounts.entity";

@Entity("payments")
@Check("check_completed_payment", `not is_complete or "desc" is not null`)
@Check("check_opinions_count", `(opinions_count is null and payment_package_id is not null) or opinions_count > 0`)
@Check("check_setting_or_package", `(payment_setting_id is not null and payment_package_id is null) or (payment_setting_id is null and payment_package_id is not null)`)
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

  @ManyToOne(() => PaymentSetting, { nullable: true })
  @JoinColumn({
    name: "payment_setting_id",
  })
  payment_setting: PaymentSetting;

  @ManyToOne(() => PaymentPackage, { nullable: true })
  @JoinColumn({
    name: "payment_package_id",
  })
  payment_package: PaymentPackage;

  @ManyToOne(() => PaymentDiscount, { nullable: true })
  @JoinColumn({
    name: "payment_discount_id",
  })
  payment_discount: PaymentDiscount;

  @Column({
    nullable: false,
    unique: true,
  })
  stripe_session_id: string;

  @Column({
    nullable: true,
  })
  response_credit: number;

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
  vat_info?: {
    vat_number: string;
    country_code: string;
    company_name: string;
    company_address: string;
    claimed_company_name: string;
    claimed_company_address: string;
    is_valid: boolean;
    rate: number;
  };

  @Column({
    type: "jsonb",
    array: false,
    nullable: true,
  })
  desc?: {};

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
