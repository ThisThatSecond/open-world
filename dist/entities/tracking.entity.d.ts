import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { TrackableLink } from "./trackable_link.entity";
export declare class Tracking {
    tracking_id: string;
    tracker: Profile;
    survey?: Survey;
    sharing_profile: Profile;
    trackable_link: TrackableLink;
    created_at?: Date;
}
