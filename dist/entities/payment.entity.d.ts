import { User } from "./user.entity";
import { Team } from "./team.entity";
import { PaymentSetting } from "./payment_setting.entity";
export declare class Payment {
    payment_id: string;
    payer: User;
    team: Team;
    paymentSetting: PaymentSetting;
    stripe_session_id: string;
    opinions_count: number;
    is_complete?: boolean;
    desc?: {
        gender: string;
    };
    created_at: Date;
}
