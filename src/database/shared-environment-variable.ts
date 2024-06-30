export type SharedEnvironmentVariable = {
  id: number; // bigserial, not null
  key: string; // varchar(255), not null
  value: string | null; // text, nullable
  is_shown_once: boolean; // bool, not null
  type: 'team' | 'project' | 'environment'; // varchar(255), not null
  team_id: number; // int8, not null
  project_id: number | null; // int8, nullable
  environment_id: number | null; // int8, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  is_multiline: boolean; // bool, not null
  version: string; // varchar(255), not null
  is_literal: boolean; // bool, not null
};
