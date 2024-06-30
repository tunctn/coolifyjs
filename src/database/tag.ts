export type Tag = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  name: string; // varchar(255), not null
  team_id: number | null; // int8, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
