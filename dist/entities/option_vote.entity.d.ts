import { Option } from "./option.entity";
import { OptionVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { TrackableLink } from "./trackable_link.entity";
export declare class OptionVote {
    option_vote_id: string;
    option: Option;
    action: OptionVoteActions;
    voter: Profile;
    sharing_profile: Profile;
    trackable_link: TrackableLink;
    created_at?: Date;
}
