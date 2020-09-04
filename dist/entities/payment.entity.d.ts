import { User } from "./user.entity";
import { Team } from "./team.entity";
export declare class Followership {
    payment_id: string;
    payer: User;
    team: Team;
    stripe_session_id: string;
    base_price: number;
    currency: string;
    opinions_count: number;
    is_complete?: boolean;
    desc?: {
        gender: string;
    };
    created_at: Date;
}
