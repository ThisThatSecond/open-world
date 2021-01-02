import { Option } from "./option.entity";
import { OptionVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { trackableLink } from "./trackable_link.entity";
export declare class OptionVoteHistory {
    option_vote_history_id: string;
    option: Option;
    action: OptionVoteActions;
    voter: Profile;
    sharing_profile: Profile;
    trackable_link: trackableLink;
    created_at?: Date;
}
