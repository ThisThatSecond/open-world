import { Profile } from "./profile.entity";
import { FollowershipStatus } from "../shared/enums/followership_status.enum";
import { Survey } from "./survey.entity";
import { TrackableLink } from "./trackable_link.entity";
export declare class Followership {
    followership_id: string;
    follower: Profile;
    following: Profile;
    status: FollowershipStatus;
    sharing_profile: Profile;
    trackable_link: TrackableLink;
    by_survey: Survey;
    created_at?: Date;
    updated_at: Date;
}
