export type GitLabApp = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  name: string; // varchar(255), not null
  organization: string | null; // varchar(255), nullable
  api_url: string; // varchar(255), not null
  html_url: string; // varchar(255), not null
  custom_port: number; // int4, not null
  custom_user: string; // varchar(255), not null
  is_system_wide: boolean; // bool, not null
  is_public: boolean; // bool, not null
  app_id: number | null; // int4, nullable
  app_secret: string | null; // varchar(255), nullable
  oauth_id: number | null; // int4, nullable
  group_name: string | null; // varchar(255), nullable
  public_key: string | null; // text, nullable
  webhook_token: string | null; // text, nullable
  deploy_key_id: number | null; // int4, nullable
  private_key_id: number | null; // int8, nullable
  team_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
