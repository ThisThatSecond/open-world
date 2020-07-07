import { Profile } from "./profile.entity";
import { User } from "./user.entity";
import { Poll } from "./poll.entity";
export declare class Collection {
    collection_id: string;
    title: string;
    visibile_options_count: number;
    desired_votes_count: number;
    release_date?: Date;
    is_draft?: boolean;
    is_active?: boolean;
    is_private?: boolean;
    is_familiarity_required?: boolean;
    polls?: Poll[];
    profile: Profile;
    creator: User;
    created_at?: Date;
}
