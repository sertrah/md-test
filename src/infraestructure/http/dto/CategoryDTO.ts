export interface CategoryDTO {
  id: string;
  name: string;
  picture: string;
  permalink?: string;
  total_items_in_this_category: number;
  path_from_root: { id: string; name: string }[];
  children_categories?: any[];
  attribute_types: string;
  settings?: any;
  channels_settings?: any;
  meta_categ_id?: any;
  attributable?: boolean;
  date_created: string;
}
