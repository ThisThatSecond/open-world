import { ViewEntity, ViewColumn } from "typeorm";
import { CATEGORIES } from "../shared/enums/categories.enum";

@ViewEntity({
  expression: `
    select
      p.poll_id,
      p.question p_question,
      p.caption p_caption,
      p.category p_category,
      p.location p_location,
      p.language p_language,
      p.is_analytics_poll p_is_analytics_poll,
      p.is_private p_is_private,
      p.is_active p_is_active,
      p.visibile_options_count p_visibile_options_count,
      p.is_familiarity_required p_is_familiarity_required,
      (
        select count(*) from pair_votes 
        inner join pairs on pairs.pair_id = pair_votes.pair_id 
        where pairs.poll_id = p.poll_id and pair_votes.action not in ('2', '3')
      ) as p_votes_count,
      p.created_at p_created_at,
      p.collection_id p_collection_id,
      p.profile_id p_profile_id,
      p.creator_id p_creator_id

    from polls

`,
})
export class PollStatView {
  @ViewColumn()
  poll_id: string;

  @ViewColumn()
  p_question: string;
  
  @ViewColumn()
  p_caption: string;

  @ViewColumn()
  p_category: CATEGORIES;

  @ViewColumn()
  c_location: string;

  @ViewColumn()
  c_language: string;

  @ViewColumn()
  p_is_analytics_poll: boolean;
  
  @ViewColumn()
  p_is_private: boolean;

  @ViewColumn()
  p_is_active: boolean;

  @ViewColumn()
  p_visible_options_count: number;

  @ViewColumn()
  p_is_familiarity_required: boolean;

  @ViewColumn()
  p_votes_count: number;

  @ViewColumn()
  p_created_at: Date;
  
  @ViewColumn()
  p_collection_id: string;
  
  @ViewColumn()
  profile_id: string;
  
  @ViewColumn()
  p_creator_id: string;
}
