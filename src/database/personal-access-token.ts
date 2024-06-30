export type PersonalAccessToken = {
  id: number; // bigserial, not null
  tokenable_type: string; // varchar(255), not null
  tokenable_id: number; // int8, not null
  name: string; // varchar(255), not null
  token: string; // varchar(64), not null
  team_id: string; // varchar(255), not null
  abilities: string | null; // text, nullable
  last_used_at: Date | null; // timestamp, nullable
  expires_at: Date | null; // timestamp, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
