import { Option } from "./option.entity";
import { OptionVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
export declare class OptionVote {
    option_vote_id: string;
    option: Option;
    action: OptionVoteActions;
    voter: Profile;
    created_at?: Date;
}
