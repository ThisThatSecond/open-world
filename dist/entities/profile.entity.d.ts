import { User } from './user.entity';
import { Team } from './team.entity';
export declare class Profile {
    profile_id: string;
    name: string;
    user: User;
    creator: User;
    team: Team;
}
