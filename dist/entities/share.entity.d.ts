import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";
export declare class Share {
    share_id: string;
    sharingProfile: Profile;
    poll?: Poll;
    collection?: Collection;
    profile?: Profile;
    created_at?: Date;
}
