import { User } from './user.entity';
import { Team } from './team.entity';
export declare class Profile {
    profile_id: string;
    user: User;
    creator: User;
    team: Team;
}
