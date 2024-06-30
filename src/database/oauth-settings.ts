export type OAuthSettings = {
  id: number; // bigserial, not null
  provider: string; // varchar(255), not null
  enabled: boolean; // bool, not null
  client_id: string | null; // varchar(255), nullable
  client_secret: string | null; // text, nullable
  redirect_uri: string | null; // varchar(255), nullable
  tenant: string | null; // varchar(255), nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
