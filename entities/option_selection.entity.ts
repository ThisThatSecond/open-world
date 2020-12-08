import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Unique, Index, Column } from "typeorm";
import { Option } from "./option.entity";
import { OptionSelectActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";

@Entity("option_selection")
@Unique("unique_option_selector", ["option", "selector"])
export class OptionSelection {
  @PrimaryGeneratedColumn("uuid")
  option_select_id: string;

  @Index()
  @ManyToOne(() => Option, { nullable: false })
  @JoinColumn({
    name: "option_id",
  })
  option: Option;

  @Column({
    type: "enum",
    enum: OptionSelectActions,
    enumName: "option_select_action_enum",
    nullable: false,
  })
  action: OptionSelectActions;

  @Index()
  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "selector_id",
  })
  selector: Profile;

  @ManyToOne(() => Profile, { nullable: true })
  @JoinColumn({
    name: "sharing_profile_id",
  })
  sharing_profile: Profile;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
