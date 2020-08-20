import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";
import { Reactions } from "../shared/enums/reactions.enum";
export declare class Reaction {
    reaction_id: string;
    tracker: Profile;
    poll: Poll;
    collection: Collection;
    reaction: Reactions;
    created_at?: Date;
}
