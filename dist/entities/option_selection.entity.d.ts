import { Option } from "./option.entity";
import { OptionSelectionActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { TrackableLink } from "./trackable_link.entity";
export declare class OptionSelection {
    option_selection_id: string;
    option: Option;
    action: OptionSelectionActions;
    selector: Profile;
    sharing_profile: Profile;
    trackable_link: TrackableLink;
    created_at?: Date;
}
