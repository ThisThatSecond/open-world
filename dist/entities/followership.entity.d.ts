import { Profile } from "./profile.entity";
import { FollowershipStatus } from "../shared/enums/followership_status.enum";
export declare class Followership {
    followership_id: string;
    follower: Profile;
    following: Profile;
    status: FollowershipStatus;
    created_at?: Date;
    updated_at: Date;
}
