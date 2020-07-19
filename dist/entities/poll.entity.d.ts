import { User } from "./user.entity";
import { CATEGORIES } from "../shared/enums/categories.enum";
import { Profile } from "./profile.entity";
import { Option } from "./option.entity";
import { Collection } from "./collection.entity";
import { Pair } from "./pair.entity";
import { Genders } from "../shared/enums/genders.enum";
import { Educations } from "../shared/enums/educations.enum";
export declare class Poll {
    poll_id: string;
    question: string;
    caption?: string;
    language?: string;
    geo_point?: {
        latitude: number;
        longitude: number;
    } | string;
    location?: string;
    category?: CATEGORIES;
    visibile_options_count?: number;
    desired_votes_count?: number;
    release_date?: Date;
    audience_age_groups?: Array<{
        start: number;
        end: number;
    }>;
    audience_genders?: Genders[];
    audience_educations?: Educations[];
    audience_locations?: string[];
    is_analytics_poll?: boolean;
    has_anonymous_vote?: boolean;
    is_private?: boolean;
    is_familiarity_required?: boolean;
    is_draft?: boolean;
    is_hidden?: boolean;
    is_active?: boolean;
    creator: User;
    profile?: Profile;
    collection?: Collection;
    options?: Option[];
    pairs?: Pair[];
    created_at?: Date;
}
