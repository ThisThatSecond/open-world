import { User } from './user.entity';
import { Team } from './team.entity';
import { Poll } from './poll.entity';
export declare class Profile {
    profile_id: string;
    user: User;
    creator: User;
    team: Team;
    polls?: Poll[];
    created_at?: Date;
}
