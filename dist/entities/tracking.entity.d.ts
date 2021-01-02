import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { trackableLink } from "./trackable_link.entity";
export declare class Tracking {
    tracking_id: string;
    tracker: Profile;
    survey?: Survey;
    sharing_profile: Profile;
    trackable_link: trackableLink;
    created_at?: Date;
}
