import { Entity, Column, PrimaryGeneratedColumn, Check } from "typeorm";

@Entity("payment_settings")
@Check("check_price", `base_price > 0`)
export class PaymentSetting {
  @PrimaryGeneratedColumn("uuid")
  payment_setting_id: string;

  @Column({
    nullable: false,
  })
  base_price: number;

  @Column({
    nullable: false,
  })
  currency: string;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  updated_at: Date;
}
