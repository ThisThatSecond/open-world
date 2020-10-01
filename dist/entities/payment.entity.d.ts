import { User } from "./user.entity";
import { Team } from "./team.entity";
import { PaymentSetting } from "./payment_setting.entity";
import { PaymentPackage } from "./payment_packages.entity";
import { PaymentDiscount } from "./payment_discounts.entity";
export declare class Payment {
    payment_id: string;
    payer: User;
    team: Team;
    paymentSetting: PaymentSetting;
    paymentPackage: PaymentPackage;
    paymentDiscount: PaymentDiscount;
    stripe_session_id: string;
    opinions_count: number;
    is_complete?: boolean;
    vat_info?: {
        vat_number: number;
        country_code: string;
        company_name: string;
        company_address: string;
    };
    desc?: {};
    created_at: Date;
}
