export type Taggable = {
  tag_id: number; // int8, not null
  taggable_id: number; // int8, not null
  taggable_type: string; // varchar(255), not null
};
