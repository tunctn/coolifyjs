export type GitHubApp = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  name: string; // varchar(255), not null
  organization: string | null; // varchar(255), nullable
  api_url: string; // varchar(255), not null
  html_url: string; // varchar(255), not null
  custom_user: string; // varchar(255), not null
  custom_port: number; // int4, not null
  app_id: number | null; // int4, nullable
  installation_id: number | null; // int4, nullable
  client_id: string | null; // varchar(255), nullable
  client_secret: string | null; // text, nullable
  webhook_secret: string | null; // text, nullable
  is_system_wide: boolean; // bool, not null
  is_public: boolean; // bool, not null
  private_key_id: number | null; // int8, nullable
  team_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  contents: string | null; // varchar(255), nullable
  metadata: string | null; // varchar(255), nullable
  pull_requests: string | null; // varchar(255), nullable
  administration: string | null; // varchar(255), nullable
};
