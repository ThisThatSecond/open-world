import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Unique, Index, Column } from "typeorm";
import { Option } from "./option.entity";
import { OptionSelectionActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { TrackableLink } from "./trackable_link.entity";

@Entity("option_selections")
@Unique("unique_option_selector", ["option", "selector"])
export class OptionSelection {
  @PrimaryGeneratedColumn("uuid")
  option_selection_id: string;

  @Index()
  @ManyToOne(() => Option, { nullable: false })
  @JoinColumn({
    name: "option_id",
  })
  option: Option;

  @Column({
    type: "enum",
    enum: OptionSelectionActions,
    enumName: "option_selection_action_enum",
    nullable: false,
  })
  action: OptionSelectionActions;

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

  @ManyToOne(() => TrackableLink, { nullable: true })
  @JoinColumn({
    name: "trackable_link_id",
  })
  trackable_link: TrackableLink;


  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
