export type TeamInvitation = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  team_id: number; // int8, not null
  email: string; // varchar(255), not null
  role: string; // varchar(255), not null
  link: string; // text, not null
  via: string; // varchar(255), not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
