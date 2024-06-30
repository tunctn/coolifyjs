export type TeamUser = {
  id: number; // bigserial, not null
  team_id: number; // int8, not null
  user_id: number; // int8, not null
  role: string; // varchar(255), not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
