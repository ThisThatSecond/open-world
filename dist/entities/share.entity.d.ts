import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { trackableLink } from "./trackable_link.entity";
export declare class Share {
    share_id: string;
    survey?: Survey;
    profile?: Profile;
    sharing_profile: Profile;
    trackable_link: trackableLink;
    created_at?: Date;
}
