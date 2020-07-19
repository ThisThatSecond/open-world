import { Profile } from "./profile.entity";
import { User } from "./user.entity";
import { Poll } from "./poll.entity";
import { Genders } from "../shared/enums/genders.enum";
import { Educations } from "../shared/enums/educations.enum";
import { CATEGORIES } from "../shared/enums/categories.enum";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";
export declare class Collection {
    collection_id: string;
    title: string;
    caption: string;
    category?: CATEGORIES;
    location: string;
    language: string;
    geo_point?: IGeoPoint | string;
    visibile_options_count: number;
    desired_votes_count: number;
    release_date?: Date;
    is_draft?: boolean;
    is_active?: boolean;
    is_private?: boolean;
    audience_age_groups?: Array<{
        start: number;
        end: number;
    }>;
    audience_genders?: Genders[];
    audience_educations?: Educations[];
    audience_locations?: string[];
    is_familiarity_required?: boolean;
    has_anonymous_vote?: boolean;
    polls?: Poll[];
    profile: Profile;
    creator: User;
    created_at?: Date;
}
