import { CATEGORIES } from "../shared/enums/categories.enum";
export declare class CollectionStatView {
    collection_id: string;
    c_title: string;
    c_location: string;
    c_language: string;
    c_is_private: boolean;
    c_is_active: boolean;
    c_category: CATEGORIES;
    c_caption: string;
    c_visible_options_count: number;
    is_familiarity_required: boolean;
    c_votes_count: number;
    c_created_at: Date;
    c_creator_id: string;
}
