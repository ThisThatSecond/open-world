import { Poll } from "./poll.entity";
import { Profile } from "./profile.entity";
import { PollProfileActions } from "../shared/enums/actions.enum";
export declare class PollProfileAction {
    poll_user_action_id: string;
    poll: Poll;
    profile: Profile;
    action: PollProfileActions;
    created_at?: Date;
}
