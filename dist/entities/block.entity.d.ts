import { Profile } from "./profile.entity";
export declare class Block {
    block_id: string;
    blocker: Profile;
    blocking: Profile;
    created_at?: Date;
}
