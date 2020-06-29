import { Profile } from './profile.entity';
import { User } from './user.entity';
import { Poll } from './poll.entity';
export declare class Collection {
    collection_id: string;
    title: string;
    profile: Profile;
    creator: User;
    polls?: Poll[];
    is_draft?: boolean;
    created_at?: Date;
}
