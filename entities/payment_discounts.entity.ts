import { Entity, Column, PrimaryGeneratedColumn, Check } from "typeorm";

@Entity("payment_discounts")
@Check("check_discount", `value > 0`)
export class PaymentDiscount {
  @PrimaryGeneratedColumn("uuid")
  payment_discount_id: string;

  @Column({
    nullable: false,
    unique: true,
  })
  code: string;

  @Column({
    nullable: false,
    type: "float",
  })
  value: number;

  @Column({
    type: "timestamptz",
    nullable: false,
  })
  expired_at: Date;

  @Column({
    default: true,
  })
  is_active?: boolean;

  @Column({
    nullable: true,
  })
  desc: string;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  updated_at: Date;
}
