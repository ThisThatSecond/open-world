import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
export declare class Tracking {
    tracking_id: string;
    tracker: Profile;
    survey?: Survey;
    sharing_profile: Profile;
    created_at?: Date;
}
