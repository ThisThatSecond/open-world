import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { TrackableLink } from "./trackable_link.entity";
export declare class Share {
    share_id: string;
    survey?: Survey;
    profile?: Profile;
    sharing_profile: Profile;
    trackable_link: TrackableLink;
    created_at?: Date;
}
