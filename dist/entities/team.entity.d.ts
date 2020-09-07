import { User } from './user.entity';
import { Profile } from './profile.entity';
import { Invitation } from './invitation.entity';
export declare class Team {
    team_id: string;
    name: string;
    join_link?: string;
    description: string;
    avatar_url?: string;
    opinions_count?: number;
    is_active: boolean;
    owner: User;
    profiles?: Profile[];
    invitations?: Invitation[];
    created_at?: Date;
}
