export type S3Storage = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  name: string; // varchar(255), not null
  description: string | null; // text, nullable
  region: string; // varchar(255), not null
  key: string; // text, not null
  secret: string; // text, not null
  bucket: string; // text, not null
  endpoint: string | null; // text, nullable
  team_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  is_usable: boolean; // bool, not null
  unusable_email_sent: boolean; // bool, not null
};
