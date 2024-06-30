export type ScheduledDatabaseBackup = {
  id: number; // bigserial, not null
  description: string | null; // text, nullable
  uuid: string; // varchar(255), not null
  enabled: boolean; // bool, not null
  save_s3: boolean; // bool, not null
  frequency: string; // varchar(255), not null
  number_of_backups_locally: number; // int4, not null
  database_type: string; // varchar(255), not null
  database_id: number; // int8, not null
  s3_storage_id: number | null; // int8, nullable
  team_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  databases_to_backup: string | null; // text, nullable
};
