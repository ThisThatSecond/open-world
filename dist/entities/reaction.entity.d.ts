import { Profile } from "./profile.entity";
import { Reactions } from "../shared/enums/reactions.enum";
import { Survey } from "./survey.entity";
import { TrackableLink } from "./trackable_link.entity";
export declare class Reaction {
    reaction_id: string;
    profile: Profile;
    survey?: Survey;
    reaction: Reactions;
    sharing_profile: Profile;
    trackable_link: TrackableLink;
    created_at?: Date;
}
