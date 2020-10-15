import { User } from "./user.entity";
import { Team } from "./team.entity";
import { PaymentSetting } from "./payment_setting.entity";
import { PaymentPackage } from "./payment_packages.entity";
import { PaymentDiscount } from "./payment_discounts.entity";
export declare class Payment {
    payment_id: string;
    payer: User;
    team: Team;
    payment_setting: PaymentSetting;
    payment_package: PaymentPackage;
    payment_discount: PaymentDiscount;
    stripe_session_id: string;
    response_credit: number;
    is_complete?: boolean;
    vat_info?: {
        vat_number: string;
        country_code: string;
        company_name: string;
        company_address: string;
        claimed_company_name: string;
        claimed_company_address: string;
        is_valid: boolean;
        rate: number;
    };
    desc?: {};
    created_at: Date;
}
