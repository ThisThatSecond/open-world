import { CATEGORIES } from "../shared/enums/categories.enum";
export declare class PollStatView {
    poll_id: string;
    p_question: string;
    p_caption: string;
    p_category: CATEGORIES;
    c_location: string;
    c_language: string;
    p_is_analytics_poll: boolean;
    p_is_private: boolean;
    p_is_active: boolean;
    p_visible_options_count: number;
    p_is_familiarity_required: boolean;
    p_votes_count: number;
    p_created_at: Date;
    p_collection_id: string;
    profile_id: string;
    p_creator_id: string;
}
