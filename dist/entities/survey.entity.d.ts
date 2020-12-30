import { User } from "./user.entity";
import { CATEGORIES } from "../shared/enums/categories.enum";
import { Profile } from "./profile.entity";
import { Collection } from "./collection.entity";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";
import { Poll } from "./poll.entity";
import { SurveyTypes } from "../shared/enums/survey_types.enum";
import { SurveyEngagement } from "./survey_engagements.entity";
export declare class Survey {
    survey_id: string;
    thumbnail_url: string;
    context?: string;
    category?: CATEGORIES;
    language?: string;
    geo_point?: IGeoPoint | string;
    location?: string;
    desired_responses_count?: number;
    release_date?: Date;
    is_analytics_survey?: boolean;
    is_private?: boolean;
    is_draft?: boolean;
    is_hidden?: boolean;
    is_active?: boolean;
    ready_to_post?: boolean;
    type?: SurveyTypes;
    collection?: Collection;
    poll?: Poll;
    creator: User;
    profile?: Profile;
    engagements?: SurveyEngagement[];
    votes_count: number;
    responses_count: number;
    complete_responses_count: number;
    comments_count: number;
    created_at?: Date;
    finalized_at?: Date;
    extra?: any;
}
