import { User } from './user.entity';
export declare class Team {
    team_id: string;
    name: string;
    join_link: string;
    description: string;
    avatar_url: string;
    opinions_count: number;
    creator: User;
    is_active: boolean;
    created_at: any;
}
