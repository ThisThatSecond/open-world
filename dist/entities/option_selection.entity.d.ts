import { Option } from "./option.entity";
import { OptionSelectionActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class OptionSelection {
    option_selection_id: string;
    option: Option;
    action: OptionSelectionActions;
    selector: Profile;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
