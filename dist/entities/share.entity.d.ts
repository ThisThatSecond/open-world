import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
export declare class Share {
    share_id: string;
    sharingProfile: Profile;
    survey?: Survey;
    profile?: Profile;
    created_at?: Date;
}
