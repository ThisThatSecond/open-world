import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { trackableLink } from "./trackable_link.entity";
export declare class Comment {
    comment_id: string;
    text: string;
    survey?: Survey;
    creator: Profile;
    sharing_profile: Profile;
    trackable_link: trackableLink;
    is_hidden?: boolean;
    upvotes_count: number;
    downvotes_count: number;
    created_at?: Date;
}
