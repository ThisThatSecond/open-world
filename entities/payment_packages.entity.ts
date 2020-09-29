import { Entity, Column, PrimaryGeneratedColumn, Check } from "typeorm";

@Entity("pricing_packages")
@Check("check_package_price", `price > 0 and credit > 0`)
export class PricingPackage {
  @PrimaryGeneratedColumn("uuid")
  price_package_id: string;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    nullable: false,
    type: "float",
  })
  price: number;

  @Column({
    nullable: false,
  })
  credit: number;

  @Column({
    nullable: false,
  })
  currency: string;

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
