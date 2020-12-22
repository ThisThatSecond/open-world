import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
export declare class Comment {
    comment_id: string;
    text: string;
    survey?: Survey;
    creator: Profile;
    sharing_profile: Profile;
    is_hidden?: boolean;
    upvotes_count: number;
    downvotes_count: number;
    created_at?: Date;
}
