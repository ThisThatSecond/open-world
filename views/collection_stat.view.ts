import { ViewEntity, ViewColumn } from "typeorm";
import { CATEGORIES } from "../shared/enums/categories.enum";

@ViewEntity({
  expression: `
    select
      c.collection_id,
      c.title c_title,
      c.location c_location,
      c.language c_language,
      c.is_private c_is_private,
      c.is_active c_active,
      c.category c_category,
      c.caption c_caption,
      c.visibile_options_count c_visible_options_count,
      c.is_familiarity_required c_familiarity_required, 
      (
          select count(*) from pair_votes 
          inner join pairs on pairs.pair_id = pair_votes.pair_id
          inner join polls on pairs.poll_id = polls.poll_id
          inner join collections on collections.collection_id = polls.collection_id 
          where collections.collection_id = c.collection_id and pair_votes.action not in ('2', '3')
          ) as c_votes_count,
      c.creator_id c_creator_id,
      c.created_at c_created_at,
      users.user_id c_user_id,
      users.profile_image_url c_profile_image_url,
      users.username c_user_username,
      users.is_verified c_user_is_verified

      
    from collections c

`,
})
export class CollectionStatView {
  @ViewColumn()
  collection_id: string;

  @ViewColumn()
  c_title: string;

  @ViewColumn()
  c_location: string;

  @ViewColumn()
  c_language: string;

  @ViewColumn()
  c_is_private: boolean;

  @ViewColumn()
  c_is_active: boolean;

  @ViewColumn()
  c_category: CATEGORIES;

  @ViewColumn()
  c_caption: string;

  @ViewColumn()
  c_visible_options_count: number;

  @ViewColumn()
  is_familiarity_required: boolean;

  @ViewColumn()
  c_votes_count: number;

  @ViewColumn()
  c_created_at: Date;

  @ViewColumn()
  c_creator_id: string;
}
