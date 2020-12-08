import { Option } from "./option.entity";
import { OptionSelectActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
export declare class OptionVote {
    option_select_id: string;
    option: Option;
    action: OptionSelectActions;
    selector: Profile;
    sharing_profile: Profile;
    created_at?: Date;
}
